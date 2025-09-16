import express from 'express';
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from '../controllers/UserController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

// Aplica a proteção de autenticação e autorização de admin para todas as rotas neste arquivo.
router.use(protect, authorize('admin'));

router.route('/')
  .get(getAllUsers);

router.route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

export default router;