"use server";

import { z } from "zod";
import { actionClient } from "~/lib/safe-action";
import { prisma } from "../../server/db";
import { send } from "process";

// This schema is used to validate input from client.
const schema = z.object({
  nameOrNim: z.string().default(""),
  faculty: z.string().default(""),
  major: z.string().default(""),
  senderName : z.string(),
  content: z.string().min(0).max(1000),
  page: z.number().min(1).default(1),
});

export const getAllWOA = actionClient.schema(schema).action(
  async ({
    parsedInput: {
      nameOrNim,
      faculty,
      major,
      senderName,
      content,
      page,
    }
  }) => {
    const limit = 16;
    const offset = (page - 1) * limit;
    console.log(nameOrNim);
    console.log(faculty);
    console.log(major);
    try{
      const woaRecords = await prisma.wOA.findMany({
        select: {
          id: true,
          user: {
            select: {
              nim : true,
              profile: {
                select: {
                  name: true,
                  faculty: true,
                  major: true,
                },
              },
            },
          },
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
        name: woa.user?.profile?.name,
        nim: woa.user?.nim ?? "Unknown",
        content: content,
        senderName: woa.sender ?? "Anon"
      }));
      return data;
      
    }catch(error){
      throw new Error("Failed to fetch WOA records.");
    }
    // get all with pagination
  },
);