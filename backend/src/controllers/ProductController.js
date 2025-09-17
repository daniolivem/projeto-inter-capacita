import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Criar produto
export const criarProduto = async (req, res) => {
  try {
const { title, description, price, stock, images, sellerId, categoryId } = req.body;

const produto = await prisma.product.create({
  data: {
    title,
    description,
    price,
    stock,
    images,
    sellerId,     
    categoryId,   
  },
});

    res.status(201).json(produto);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

// Listar todos os produtos
export const listarProduto = async (req, res) => {
  try {
    const produtos = await prisma.product.findMany({
      orderBy: { createdAt: "desc" }, // opcional: ordena por data
    });
    res.json(produtos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Buscar produto por ID
export const buscarPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const produto = await prisma.product.findUnique({ where: { id } });

    if (!produto) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    res.json(produto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Atualizar produto
export const atualizarProduto = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price, stock, images } = req.body;

    const produto = await prisma.product.update({
      where: { id },
      data: { title, description, price, stock, images },
    });

    res.json(produto);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "Produto não encontrado ou dados inválidos" });
  }
};

// Deletar produto
export const deletarProduto = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.product.delete({ where: { id } });

    res.json({ message: "Produto removido com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "Produto não encontrado" });
  }
};

// Buscar produtos por vendedor
export const buscarProdutosPorVendedor = async (req, res) => {
  try {
    const { sellerId } = req.params;
    
    const produtos = await prisma.product.findMany({
      where: { sellerId },
      include: {
        category: {
          select: {
            id: true,
            name: true
          }
        }
      },
      orderBy: { createdAt: "desc" }
    });

    res.json(produtos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
