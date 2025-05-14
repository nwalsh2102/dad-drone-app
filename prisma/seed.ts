import { PrismaClient } from "../src/generated/prisma";
const prisma = new PrismaClient();

const initialResponse = [
  {
    id: 1,
    name: "Nick",
    email: "nick@email.com",
    message: "I am nick",
    createdAt: "time",
  },
];

async function main() {
  console.log("Start seeding...");

  for (const response of initialResponse) {
    const newResponse = await prisma.contactResponses.create({
      data: response,
    });
    console.log(`Created post with id: ${newResponse.id}`);
  }
  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
