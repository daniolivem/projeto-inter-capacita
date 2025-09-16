import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando a criação de múltiplos usuários...');

  const usersData = [
    {
      name: 'Ana Clara',
      email: 'ana.clara@example.com',
      password: 'senha123',
      role: 'cliente',
      phone: '11987654321',
      address: 'Rua das Amélias, 45, Rio de Janeiro, RJ'
    },
    {
      name: 'Bruno Costa',
      email: 'bruno.costa@example.com',
      password: 'senha456',
      role: 'cliente',
      phone: '21998877665',
      address: 'Avenida Central, 1010, Niterói, RJ'
    },
    {
      name: 'Vendedor de Hardware',
      email: 'vendedor.hw@tecnobits.com',
      password: 'vendedor123',
      role: 'vendedor',
      phone: '11912345678',
      address: 'Rua dos Componentes, 789, Campinas, SP'
    }
  ];

  // Criptografa as senhas antes de inserir
  const usersWithHashedPasswords = await Promise.all(
    usersData.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return { ...user, password: hashedPassword };
    })
  );

  // Deleta usuários existentes com os mesmos emails para evitar erros de duplicidade
  await prisma.user.deleteMany({
    where: {
      email: {
        in: usersData.map(user => user.email),
      },
    },
  });

  // Insere os novos usuários
  const result = await prisma.user.createMany({
    data: usersWithHashedPasswords,
    skipDuplicates: true, // Ignora se um usuário com o mesmo email já existir
  });

  console.log(`${result.count} usuários foram criados com sucesso!`);
}

main()
  .catch((e) => {
    console.error('Ocorreu um erro ao criar os usuários:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
