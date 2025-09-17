import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando limpeza do banco de dados...');

  try {
    // Deleta em ordem para respeitar as relações de foreign key
    console.log('Deletando itens de pedido...');
    await prisma.orderItem.deleteMany({});

    console.log('Deletando pedidos...');
    await prisma.order.deleteMany({});

    console.log('Deletando produtos...');
    await prisma.product.deleteMany({});

    console.log('Deletando categorias...');
    await prisma.category.deleteMany({});

    console.log('Deletando usuários...');
    await prisma.user.deleteMany({});

    console.log('\n=== LIMPEZA CONCLUÍDA ===');
    console.log('✅ Todos os dados foram removidos do banco de dados');
    console.log('Agora você pode executar os seeds novamente para popular o banco com dados frescos.');

  } catch (error) {
    console.error('Erro durante a limpeza do banco:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error('Ocorreu um erro ao executar o script de limpeza:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('Conexão com o banco de dados fechada.');
  });