import express from 'express';
import { getPendingSellers, getSellerById, updateSellerStatus } from '../controllers/AdminController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

// Middleware para verificar se o usuário é admin
const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: 'Acesso negado. Apenas administradores podem acessar este recurso.' });
    }
};

// Rotas protegidas por autenticação e restritas a admin
router.use(protect, authorize('admin'));

// Rota para listar vendedores pendentes
router.get('/pending-sellers', getPendingSellers);

// Rota para buscar detalhes de um vendedor específico
router.get('/sellers/:id', getSellerById);

// Rota para aprovar/rejeitar um vendedor
router.patch('/sellers/:id/status', updateSellerStatus);

export default router;