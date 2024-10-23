"use server";

import {z} from "zod";
import {actionClient} from "~/lib/safe-action";
import {prisma} from "~/server/db";

// This schema is used to validate input from client.
const schema = z.object({
  nameOrNim: z.string().default(""),
  major: z.string().default(""),
  content: z.string().max(1000).optional(),
  page: z.number().min(1).default(1),
});

export const searchWOA = actionClient.schema(schema).action(
  async ({
           parsedInput: {
             nameOrNim,
             major,
             content,
             page,
           }
         }) => {
    const limit = 100;
    const offset = (page - 1) * limit;

    try {
      const woaRecords = await prisma.woA.findMany({
        where: {
          OR: [
            {
              targetName: {
                contains: nameOrNim,
                mode: "insensitive",
              },
            },
            {
              targetNIM: {
                contains: nameOrNim,
                mode: "insensitive",
              },
            },
            {
              content: {
                contains: content,
                mode: "insensitive",
              }
            }
          ],
        },
        select: {
          id: true,
          targetNIM: true,
          targetName: true,
          targetMajor: true,
          content: true,
          sender: true,
        },
        orderBy: {
          createdAt: 'desc'
        },
        skip: offset,
        take: limit,
      });

      const data = woaRecords.map((woa) => ({
        woaId: woa.id,
        name: woa.targetName ?? "Anon",
        nim: woa.targetNIM ?? "Anon",
        major: woa.targetMajor ?? "Anon",
        content: woa.content,
        senderName: woa.sender ?? "Anon"
      }));
      return data;

    } catch (error) {
      throw new Error("Failed to fetch WOA records.");
    }
    // get all with pagination
  },
);