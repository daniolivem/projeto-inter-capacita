import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando a atualização do usuário cliente...');

  const user = await prisma.user.update({
    where: {
      email: 'cliente@tecnobits.com',
    },
    data: {
      name: 'João da Silva',
      phone: '(11) 99999-8888',
      address: 'Rua das Flores, 123, São Paulo, SP',
    },
  });

  console.log('Usuário atualizado com sucesso:');
  console.log(user);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
