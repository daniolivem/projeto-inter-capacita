import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { JWT_SECRET, JWT_EXPIRES_IN } from '../config/env.js';


const prisma = new PrismaClient();

const generateToken = (id, role) => {
    return jwt.sign({ id, role }, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN,
    });
};

export const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body; //cliente ou vendedor

        //validação
        if (!name || !email || !password || !role) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios.'})
        }
        //para verificar se o usário já existe
        const existingUser = await prisma.user.findUnique({ where: { email } });
            if (existingUser) {
                return res.status(409).json({ message: 'Email em uso.'})
            }
        //critp senha
        const hashedPassword = await bcrypt.hash(password, 12);

        //cria usuario no bd
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role,
            },
        });
        //para gerar o token e enviar a res
        const token = generateToken(user.id, user.role);

        res.status(201).json({
            message: 'Usuário registrado com sucesso!',
            token,
            user: { id: user.id, name: user.name, email: user.email, role: user.role},
        });
    } catch (error) {
            res.status(500).json({ message: 'Erro no servidor', error: error.message})
        }
    };

    export const login = async (req, res) => {
        try {
            const { email, password } = req.body;

            //validação
            if (!email || !password) {
                return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
            }
            //encontrar usuário3
            const user = await prisma.user.findUnique({ where: { email } });
            if (!user || !(await bcrypt.compare(password, user.password))) {
                return res.status(401).json({ message: 'Credenciais inválidas.' });
            }

            //gerar token e env res
            const token = generateToken(user.id, user.role);
            res.status(200).json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role }});
        } catch (error) {
            res.status(500).json({ message: 'Erro no servidor.', error: error.message });
        }
    };