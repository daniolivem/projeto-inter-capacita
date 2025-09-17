import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Busca todos os vendedores pendentes de aprovação
export const getPendingSellers = async (req, res) => {
    try {
        const pendingSellers = await prisma.user.findMany({
            where: {
                role: 'vendedor',
                status: 'pending'
            },
            select: {
                id: true,
                name: true,
                email: true,
                cnpj: true,
                phone: true,
                address: true,
                createdAt: true
            }
        });

        res.json(pendingSellers);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar vendedores pendentes', error: error.message });
    }
};

// Busca detalhes de um vendedor específico pelo ID
export const getSellerById = async (req, res) => {
    const { id } = req.params;

    try {
        const seller = await prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                name: true,
                email: true,
                cnpj: true,
                phone: true,
                address: true,
                status: true,
                role: true,
                createdAt: true,
                updatedAt: true
            }
        });

        if (!seller) {
            return res.status(404).json({ message: 'Vendedor não encontrado' });
        }

        // Verifica se o usuário é realmente um vendedor
        if (seller.role !== 'vendedor') {
            return res.status(400).json({ message: 'Usuário não é um vendedor' });
        }

        res.json(seller);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar detalhes do vendedor', error: error.message });
    }
};

// Aprovar ou rejeitar um vendedor
export const updateSellerStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!['approved', 'rejected'].includes(status)) {
        return res.status(400).json({ message: 'Status inválido. Use approved ou rejected' });
    }

    try {
        const updatedSeller = await prisma.user.update({
            where: { id },
            data: { 
                status: status === 'approved' ? 'active' : 'rejected'
            },
            select: {
                id: true,
                name: true,
                email: true,
                status: true
            }
        });

        res.json({
            message: `Vendedor ${status === 'approved' ? 'aprovado' : 'rejeitado'} com sucesso`,
            seller: updatedSeller
        });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar status do vendedor', error: error.message });
    }
};