import { prisma } from './prisma-client';

async function up() {
  await prisma.user.create({
    data: [
      {
        fullName: 'User',
        email: 'user@test.ru',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'USER',
      },
    ],
  });
}

async function down() {}

async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.log(error);
  }
}
