import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando o processo de seed para produtos e categorias...');

  try {
    // Lê o arquivo products.json
    const productsData = JSON.parse(
      fs.readFileSync(path.join(__dirname, 'products.json'), 'utf-8')
    );

    console.log(`Carregados ${productsData.length} produtos do arquivo JSON`);

    // Extrai todas as categorias únicas
    const uniqueCategories = [...new Set(productsData.map(product => product.category))];
    console.log(`Encontradas ${uniqueCategories.length} categorias únicas:`, uniqueCategories);

    // Cria ou atualiza as categorias
    const categoryMap = new Map();
    for (const categoryName of uniqueCategories) {
      const category = await prisma.category.upsert({
        where: { name: categoryName },
        update: {},
        create: { name: categoryName },
      });
      categoryMap.set(categoryName, category.id);
      console.log(`Categoria '${categoryName}' criada/atualizada com ID: ${category.id}`);
    }

    // Busca todos os vendedores disponíveis
    let sellers = await prisma.user.findMany({
      where: { 
        role: 'vendedor',
        status: 'active'
      }
    });

    // Se não há vendedores, cria alguns vendedores padrão
    if (sellers.length === 0) {
      console.log('Nenhum vendedor encontrado. Criando vendedores padrão...');
      const bcrypt = await import('bcryptjs');
      
      const defaultSellers = [
        {
          name: 'TecnoBits Store',
          email: 'vendedor@tecnobits.com',
          password: await bcrypt.default.hash('vendedor123', 12),
        },
        {
          name: 'ElectroMax',
          email: 'vendedor@electromax.com',
          password: await bcrypt.default.hash('vendedor123', 12),
        },
        {
          name: 'GamerHub',
          email: 'vendedor@gamerhub.com',
          password: await bcrypt.default.hash('vendedor123', 12),
        },
        {
          name: 'TechWorld',
          email: 'vendedor@techworld.com',
          password: await bcrypt.default.hash('vendedor123', 12),
        }
      ];

      for (const sellerData of defaultSellers) {
        const seller = await prisma.user.create({
          data: {
            ...sellerData,
            role: 'vendedor',
            status: 'active'
          }
        });
        sellers.push(seller);
        console.log(`Vendedor criado: ${seller.name} (${seller.email})`);
      }
    }

    console.log(`Distribuindo produtos entre ${sellers.length} vendedores:`);
    sellers.forEach((seller, index) => {
      console.log(`  ${index + 1}. ${seller.name} (${seller.email})`);
    });

    // Cria ou atualiza os produtos
    let createdCount = 0;
    let updatedCount = 0;

    for (let i = 0; i < productsData.length; i++) {
      const productData = productsData[i];
      const categoryId = categoryMap.get(productData.category);
      
      // Distribui produtos entre vendedores de forma circular
      const currentSeller = sellers[i % sellers.length];
      
      // As imagens serão puxadas do frontend, não armazenamos no banco
      const images = [];
      
      // Calcula o estoque baseado no inStock
      const stock = productData.inStock ? Math.floor(Math.random() * 50) + 10 : 0;
      
      // Usa o preço com desconto se disponível, senão usa o preço normal
      const finalPrice = productData.priceDiscount || productData.price;

      try {
        // Tenta buscar produto pelo título (removemos a verificação de sellerId para permitir reatribuição)
        const existingProduct = await prisma.product.findFirst({
          where: { 
            title: productData.name
          }
        });

        if (existingProduct) {
          // Atualiza produto existente (incluindo possível mudança de vendedor)
          await prisma.product.update({
            where: { id: existingProduct.id },
            data: {
              title: productData.name,
              description: productData.description,
              price: finalPrice,
              stock: stock,
              images: images,
              categoryId: categoryId,
              sellerId: currentSeller.id, // Atualiza o vendedor
            }
          });
          updatedCount++;
        } else {
          // Cria novo produto
          await prisma.product.create({
            data: {
              title: productData.name,
              description: productData.description,
              price: finalPrice,
              stock: stock,
              images: images,
              sellerId: currentSeller.id,
              categoryId: categoryId,
            }
          });
          createdCount++;
        }

        if ((createdCount + updatedCount) % 50 === 0) {
          console.log(`Processados ${createdCount + updatedCount} produtos...`);
        }

      } catch (error) {
        console.error(`Erro ao processar produto '${productData.name}':`, error.message);
      }
    }

    console.log('\n=== RESUMO DO SEED ===');
    console.log(`✅ Categorias processadas: ${uniqueCategories.length}`);
    console.log(`✅ Produtos criados: ${createdCount}`);
    console.log(`✅ Produtos atualizados: ${updatedCount}`);
    console.log(`✅ Total de produtos processados: ${createdCount + updatedCount}`);
    console.log(`✅ Vendedores utilizados: ${sellers.length}`);
    
    // Mostra a distribuição de produtos por vendedor
    console.log('\n=== DISTRIBUIÇÃO POR VENDEDOR ===');
    for (const seller of sellers) {
      const productCount = await prisma.product.count({
        where: { sellerId: seller.id }
      });
      console.log(`📦 ${seller.name}: ${productCount} produtos`);
    }
    
    console.log('\nSeed executado com sucesso! 🎉');

  } catch (error) {
    console.error('Erro durante o processo de seed:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error('Ocorreu um erro ao executar o seed script:', e);
    process.exit(1);
  })
  .finally(async () => {
    // Fecha a conexão com o banco de dados ao final do processo
    await prisma.$disconnect();
    console.log('Conexão com o banco de dados fechada.');
  });