import express from 'express';
import * as ProductController from '../controllers/ProductController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

// Rotas públicas
router.get("/", ProductController.listarProduto);       // Listar todos os produtos
router.get("/:id", ProductController.buscarPorId);     // Buscar produto por ID

// Rotas protegidas (apenas admin e vendedor podem criar, atualizar e deletar)
router.post("/", protect, authorize('admin', 'vendedor'), ProductController.criarProduto);
router.put("/:id", protect, authorize('admin', 'vendedor'), ProductController.atualizarProduto);
router.delete("/:id", protect, authorize('admin', 'vendedor'), ProductController.deletarProduto);

export default router;
