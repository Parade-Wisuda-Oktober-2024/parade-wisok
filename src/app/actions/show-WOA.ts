"use server";

import { z } from "zod";
import { actionClient } from "~/lib/safe-action";
import { prisma } from "../../server/db";

// This schema is used to validate input from client.
const schema = z.object({
  post: z.object({
    to: z.string().min(0).max(500),
    content: z.string().min(0).max(1000),
  }),
  page: z.number().min(1).default(1),
});

export const getAllWOA = actionClient.schema(schema).action(
  async ({
    parsedInput: {
      post: {to, content},
      page,
    }
  }) => {
    const limit = 16;
    const offset = (page - 1) * limit;

    const data = await prisma.woa.findMany({
      where:{
        to: {contains: to},
        content: {contains: content},
      },
      orderBy: {
        createdAt: 'desc'
      },
      skip: offset,
      take: limit,
    });

    // get all with pagination
    return data;
  },
);