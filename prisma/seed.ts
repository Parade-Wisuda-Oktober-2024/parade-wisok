import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding...");

  const dummyData = [
    {
      id: '1',
      to: "Alice",
      content: "Welcome to our platform! Let’s get started.",
      createdAt: new Date('2024-01-01T10:00:00Z')
    },
    {
      id: '2',
      to: "Bob",
      content: "Here’s a reminder about your upcoming meeting.",
      createdAt: new Date('2024-02-15T14:30:00Z')
    },
    {
      id: '3',
      to: "Charlie",
      content: "Congratulations on completing your course!",
      createdAt: new Date('2024-03-10T09:15:00Z')
    },
    {
      id: '4',
      to: "Diana",
      content: "Don’t miss our special offers this week.",
      createdAt: new Date('2024-04-20T16:45:00Z')
    },
    {
      id: '5',
      to: "Eve",
      content: "We’d love to hear your feedback.",
      createdAt: new Date('2024-05-05T12:00:00Z')
    },
    {
      id: '11',
      to: "Alice",
      content: "Welcome to our platform! Let’s get started.",
      createdAt: new Date('2024-01-01T10:00:00Z')
    },
    {
      id: '12',
      to: "Bob",
      content: "Here’s a reminder about your upcoming meeting.",
      createdAt: new Date('2024-02-15T14:30:00Z')
    },
    {
      id: '13',
      to: "Charlie",
      content: "Congratulations on completing your course!",
      createdAt: new Date('2024-03-10T09:15:00Z')
    },
    {
      id: '14',
      to: "Diana",
      content: "Don’t miss our special offers this week.",
      createdAt: new Date('2024-04-20T16:45:00Z')
    },
    {
      id: '15',
      to: "Eve",
      content: "We’d love to hear your feedback.",
      createdAt: new Date('2024-05-05T12:00:00Z')
    },
    {
      id: '21',
      to: "Alice",
      content: "Welcome to our platform! Let’s get started.",
      createdAt: new Date('2024-01-01T10:00:00Z')
    },
    {
      id: '22',
      to: "Bob",
      content: "Here’s a reminder about your upcoming meeting.",
      createdAt: new Date('2024-02-15T14:30:00Z')
    },
    {
      id: '23',
      to: "Charlie",
      content: "Congratulations on completing your course!",
      createdAt: new Date('2024-03-10T09:15:00Z')
    },
    {
      id: '24',
      to: "Diana",
      content: "Don’t miss our special offers this week.",
      createdAt: new Date('2024-04-20T16:45:00Z')
    },
    {
      id: '25',
      to: "Eve",
      content: "We’d love to hear your feedback.",
      createdAt: new Date('2024-05-05T12:00:00Z')
    },
  ];

  for (const woa of dummyData) {
    await prisma.wOA.create({ data: woa });
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
