import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const email = 'cliente@tecnobits.com';
  const name = 'Cliente TecnoBits Store';
  const plainPassword = 'cliente123';
  const role = 'cliente';

  console.log(`Iniciando o processo de seed para o usuário: ${email}...`);

  // Criptografa a senha antes de salvar no banco
  const hashedPassword = await bcrypt.hash(plainPassword, 12);

  // Usamos 'upsert' para evitar erros ao rodar o script múltiplas vezes.
  // Ele cria o usuário se não existir (pelo email) ou apenas o atualiza se já existir.
  const user = await prisma.user.upsert({
    where: { email: email },
    update: {
      // Aqui você pode definir campos para serem atualizados se o usuário já existir
      // Por exemplo, garantir que o nome e a senha estejam sempre corretos.
      name: name,
      password: hashedPassword,
    },
    create: {
      name: name,
      email: email,
      password: hashedPassword,
      role: role,
    },
  });

  console.log(`Usuário '${user.name}' (${user.email}) com perfil de '${user.role}' criado/atualizado com sucesso!`);
}

main()
  .catch((e) => {
    console.error('Ocorreu um erro ao executar o seed script:', e);
    process.exit(1);
  })
  .finally(async () => {
    // Fecha a conexão com o banco de dados ao final do processo
    await prisma.$disconnect();
  });
