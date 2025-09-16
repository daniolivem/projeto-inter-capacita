import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';


const prisma = new PrismaClient();

async function main() {
  const email = 'admin@tecnobits.com';
  const name = 'Admin Tecnobits';
  const plainPassword = 'admin123';
  const role = 'admin';

  console.log(`Iniciando o processo de seed para o usuário admin: ${email}...`);

  const hashedPassword = await bcrypt.hash(plainPassword, 12);

  const user = await prisma.user.upsert({
    where: { email: email },
    update: {
      name: name,
      password: hashedPassword,
      role: role, // Garante que o perfil seja admin
    },
    create: {
      name: name,
      email: email,
      password: hashedPassword,
      role: role,
    },
  });

  console.log(`Usuário admin '${user.name}' (${user.email}) criado/atualizado com sucesso!`);
}

main()
  .catch((e) => {
    console.error('Ocorreu um erro ao executar o seed script do admin:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });