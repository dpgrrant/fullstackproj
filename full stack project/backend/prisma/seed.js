const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
 
(async function main() {
  try {
    const martinFowler = await prisma.user.upsert({
      where: { username: 'test' },
      update: {},
      create: {
        username:"test",
        password:"test",   
        posts: {
          create: [
            {
              title:"first1",
              text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
              goal:1
            },
            {
              title:"second2",
              text: `I'm not a great programmer; I'm just a good programmer with great habits.`,
              goal:2

            },
          ],
        },
      },
    });
 
    console.log('Create 1 user with 2 posts: ', martinFowler);
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();