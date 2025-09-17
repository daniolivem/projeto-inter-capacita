import express from 'express';
import cors from 'cors';
import authRoutes from './src/routes/authRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import productRoutes from './src/routes/productRoutes.js';
import adminRoutes from './src/routes/adminRoutes.js';
import { protect, authorize } from './src/middleware/authMiddleware.js';


const app = express();

app.use(cors());
app.use(express.json());

// Rotas de Autenticação e Perfil (públicas e privadas)
app.use('/api/auth', authRoutes);

// Rotas de Gerenciamento de Usuários (apenas admin)
app.use('/api/users', userRoutes);

// Rotas de Gerenciamento de Produtos
app.use("/api/products", productRoutes);

// Rotas do Admin
app.use('/api/admin', adminRoutes);

// rota protegida para vendedores
app.post('/api/products', protect, authorize('vendedor'), (req, res) => {
    res.status(201).json({ message: `Produto criado pelo vendedor ${req.user.name}` });
});

export default app;