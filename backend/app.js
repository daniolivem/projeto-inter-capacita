import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import fs from "fs";
import authRoutes from "./src/routes/authRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import productRoutes from "./src/routes/productRoutes.js";
import adminRoutes from "./src/routes/adminRoutes.js";
import categoryRoutes from "./src/routes/categoryRoutes.js";
import cartRoutes from "./src/routes/cartRoutes.js";
import orderRoutes from "./src/routes/orderRoutes.js";
import uploadRoutes from "./src/routes/uploadRoutes.js";
import { protect, authorize } from "./src/middleware/authMiddleware.js";

import sellerProductRoutes from "./src/routes/sellerProductRoutes.js";

const app = express();

// Hardening básico
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" }, // permitir servir imagens a partir de /uploads
  }),
);

// Rate limit focado em endpoints sensíveis (habilitado apenas em produção)
const isProd = process.env.NODE_ENV === "production";
const authLimiter = isProd
  ? rateLimit({
      windowMs: 15 * 60 * 1000, // 15 min
      max: 100, // até 100 req/15min por IP
      standardHeaders: true,
      legacyHeaders: false,
      message: {
        message: "Muitas tentativas. Aguarde alguns minutos e tente novamente.",
      },
    })
  : (req, res, next) => next(); // no-op em dev/test

const allowedOrigins = new Set([
  process.env.FRONTEND_URL || "http://localhost:5173",
  "http://localhost:5173",
  ...(process.env.CORS_ORIGINS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean),
]);
app.use(
  cors({
    origin: (origin, callback) => {
      // Permite requests sem origin (ex.: Postman, curl)
      if (!origin) return callback(null, true);
      // Aceita correspondência exata da lista
      if (allowedOrigins.has(origin)) return callback(null, true);
      // Aceita qualquer subdomínio *.vercel.app (útil para URLs de preview)
      // Aceita qualquer subdomínio *.vercel.app e *.onrender.com
      try {
        const host = new URL(origin).host;
        if (host.endsWith(".vercel.app")) return callback(null, true);
        if (host.endsWith(".onrender.com")) return callback(null, true);
        if (host.endsWith(".railway.app")) return callback(null, true);
      } catch (_) {}
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);
app.use(express.json());

// Static uploads
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "src", "uploads")));

// Rotas de Autenticação e Perfil (públicas e privadas)
app.use("/api/auth", authLimiter, authRoutes);

// Rotas de Gerenciamento de Usuários (apenas admin)
app.use("/api/users", userRoutes);

// Rotas de Gerenciamento de Produtos
app.use("/api/products", productRoutes);

// Rotas do Admin
app.use("/api/admin", adminRoutes);

// rota protegida para vendedores
app.post("/api/products", protect, authorize("vendedor"), (req, res) => {
  res
    .status(201)
    .json({ message: `Produto criado pelo vendedor ${req.user.name}` });
});

// Rotas de Gerenciamento de Categorias
app.use("/api/categories", categoryRoutes);

// Rotas do Carrinho de Compras
app.use("/api/cart", cartRoutes);

// Rotas de Pedidos
app.use("/api/orders", orderRoutes);

// Rotas do vendedor monitorar os produtos
app.use("/api/seller", sellerProductRoutes);

// Rotas de Upload de arquivos (imagens de produtos)
app.use("/api/upload", uploadRoutes);

// Servir o frontend buildado (quando existir) e fallback SPA para rotas do React
// Evita 404 ao acessar rotas como /admin/login diretamente pelo backend
const frontendDist = path.resolve(__dirname, "..", "frontend", "dist");
const indexHtml = path.join(frontendDist, "index.html");
if (fs.existsSync(indexHtml)) {
  app.use(express.static(frontendDist));
  app.get("*", (req, res, next) => {
    if (req.path.startsWith("/api") || req.path.startsWith("/uploads"))
      return next();
    res.sendFile(indexHtml);
  });
}

export default app;
