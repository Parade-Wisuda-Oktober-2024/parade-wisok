import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 1. Empty the Database
  await prisma.wOA.deleteMany({});
  await prisma.profile.deleteMany({});
  await prisma.user.deleteMany({});

  console.log('Database emptied.');

  // 2. Create Users with Profiles
  const user1 = await prisma.user.create({
    data: {
      id: 'user1-id',
      nim: '12345678',
      passwordHash: 'hashed_password_1',
      role: 'USER',
      profile: {
        create: {
          name: 'John Doe',
          faculty: 'Engineering',
          major: 'Computer Science',
          campus: 'Main Campus',
        },
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      id: 'user2-id',
      nim: '87654321',
      passwordHash: 'hashed_password_2',
      role: 'USER',
      profile: {
        create: {
          name: 'Jane Smith',
          faculty: 'Business',
          major: 'Marketing',
          campus: 'City Campus',
        },
      },
    },
  });

  console.log('Users with profiles created:', { user1, user2 });

  // 3. Create WOA Entries
  await prisma.wOA.createMany({
    data: [
      {
        id: 'woa1-id',
        userId: user1.id,
        sender: user2.id,
        anon: false,
        content: 'This is a message from User 2 to User 1.',
      },
      {
        id: 'woa2-id',
        userId: user2.id,
        sender: user1.id,
        anon: true,
        content: 'An anonymous message from User 1 to User 2.',
      },
    ],
  });

  console.log('WOA entries created.');
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
