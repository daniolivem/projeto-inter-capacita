import { PrismaClient } from "@prisma/client";  
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export const getMe = (req, res) => {
    res.status(200).json(req.user);
};

const userSelect = {
    id: true,
    name: true,
    email: true,
    role: true,
    createdAt: true,
    updatedAt: true,
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            select: userSelect,
        });

        res.status(200).json(users);
    }catch (error) {
        console.error("erro ao buscar usuários:", error);
        res.status(500).json({ message: "Ocorreu um erro no servidor ao buscar usuários"});
    }
};
export const getUserById= async (req, res) => {
    try {
        const { id } = req.params;
        const user = await prisma.user.findUnique({
            where: {
                id: id,
            },
            select: userSelect,
        });

        if (!user) {
            return res.status(400).json({ message: "Usuário não encontrado" });
        }

        res.status(200).json(user);
    }catch (error) {
        console.error("erro ao buscar usuários:", error);
        res.status(500).json({ message: "Ocorreu um erro no servidor ao buscar usuários"});
    }
};

export const updateUser= async (req, res) => {
    try {
        const { id } = req.params;
        const { email, name, role } = req.body;

        const updatedUser = await prisma.user.update({
            where: { id: id },
            data: {
                email: email,
                name: name,
                role: role,
            },
            select: userSelect,
        });

        res.status(200).json(updatedUser);

    }catch (error) {
        if (error.code === 'P2025') {
            return res.status(404).json({ message: "Usuário não encontrado."})
        }
        console.error("Erro ao atualizar usuário:", error);
        res.status(500).json({ message: "Ocorreu um erro no servidor ao buscar usuários"});
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.user.delete({
            where: { id: id },

        });
        res.status(200).send();
    }catch (error) {
        if (error.code === 'P2025') {
            return res.status(404).json({ message: "Usuário não encontrado." });
        }
        console.error("Erro ao deletar usuário:", error);
        res.status(500).json({ message: "Ocorreu um erro no servidor ao deletar usuário."})
    }
};

// @desc    Get user profile
// @route   GET /api/profile
// @access  Private
export const getProfile = async (req, res) => {
  // O ID do usuário é obtido do token JWT, adicionado à requisição pelo middleware 'protect'
  const user = await prisma.user.findUnique({
    where: { id: req.user.id },
    // Seleciona apenas os campos seguros para retornar
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      phone: true,
      address: true,
      cnpj: true, // Inclui CNPJ para vendedores
      status: true,
      createdAt: true,
    },
  });

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'Usuário não encontrado' });
  }
};

// @desc    Update user profile
// @route   PUT /api/profile
// @access  Private
export const updateProfile = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.id },
  });

  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  const { name, email, password, phone, address, cnpj } = req.body;

  // Verifica se o e-mail já está em uso por outro usuário
  if (email && email !== user.email) {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'O e-mail já está em uso' });
    }
  }

  const dataToUpdate = {
    name: name || user.name,
    email: email || user.email,
    phone: phone || user.phone,
    address: address || user.address,
  };

  // Se o usuário for vendedor, permite atualizar CNPJ
  if (user.role === 'vendedor' && cnpj !== undefined) {
    dataToUpdate.cnpj = cnpj;
  }

  // Se uma nova senha for fornecida, hasheia antes de salvar
  if (password) {
    const salt = await bcrypt.genSalt(10);
    dataToUpdate.password = await bcrypt.hash(password, salt);
  }

  try {
    const updatedUser = await prisma.user.update({
      where: { id: req.user.id },
      data: dataToUpdate,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        phone: true,
        address: true,
        cnpj: true,
        status: true,
      },
    });

    res.json({
      message: 'Perfil atualizado com sucesso',
      user: updatedUser,
    });
  } catch (error) {
    console.error('Erro ao atualizar perfil:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
};