import { Router } from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import * as sellerController from '../controllers/SellerController.js';

const router = Router();

// Rotas protegidas para admin
router.get('/pending', protect, admin, sellerController.getPendingSellers);
router.get('/:id', protect, admin, sellerController.getSellerDetails);
router.patch('/:id/status', protect, admin, sellerController.updateSellerStatus);

export default router;