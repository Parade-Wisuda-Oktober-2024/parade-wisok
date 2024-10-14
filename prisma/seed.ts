import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.like.deleteMany();
  await prisma.tA.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.user.deleteMany();

  const users = [];
  for (let i = 1; i <= 6; i++) {
    const user = await prisma.user.create({
      data: {
        nim: `13523${i}`,
        passwordHash: `hashedpassword${i}`,
        role: UserRole.USER,
        profile: {
          create: {
            name: `User ${i}`,
            faculty: `STEI`,
            campus: `Ganesha`,
          },
        },
      },
    });

    users.push(user);

    await prisma.tA.create({
      data: {
        title: `Thesis Title ${i}`,
        description: `Description for Thesis ${i}`,
        wisudawan: {
          connect: { id: user.id },
        },
      },
    });
  }

  for (let i = 7; i <= 13; i++) {
    const user = await prisma.user.create({
      data: {
        nim: `16523${i}`,
        passwordHash: `hashedpassword${i}`,
        role: UserRole.USER,
        profile: {
          create: {
            name: `User ${i}`,
            faculty: `FTMD`,
            campus: `Ganesha`,
          },
        },
      },
    });

    users.push(user);

    await prisma.tA.create({
      data: {
        title: `Thesis Title ${i}`,
        description: `Description for Thesis ${i}`,
        wisudawan: {
          connect: { id: user.id },
        },
      },
    });
  }

  // Add Likes
  for (let i = 1; i <= 13; i++) {
    const ta = await prisma.tA.findFirst({
      where: { wisudawanId: users[i - 1]?.id },
    });

    if (ta) {
      // Create 2 likes for each TA
      await prisma.like.create({
        data: {
          TA: {
            connect: { id: ta.id },
          },
          user: {
            connect: { id: users[i % 13]?.id },
          },
        },
      });

      await prisma.like.create({
        data: {
          TA: {
            connect: { id: ta.id },
          },
          user: {
            connect: { id: users[(i + 1) % 13]?.id },
          },
        },
      });
    }
  }
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