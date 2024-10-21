"use server";

import { z } from "zod";
import { actionClient } from "../../lib/safe-action";
import { prisma } from "~/server/db";

// This schema is used to validate input from client.
const schema = z.object({
  profile: z.object({
    name: z.string().min(0).max(500),
    faculty: z.string().min(0).max(500),
    major: z.string().min(0).max(500),
  }),
  page: z.number().min(1).default(1),
});

const schemaNoPagination = z.object({
  profile: z.object({
    name: z.string().min(0).max(500),
    faculty: z.string().min(0).max(500),
    major: z.string().min(0).max(500),
  }),
});

export const getAllGraduatesNoPagination = actionClient.schema(schemaNoPagination).action(
  async ({
    parsedInput: {
      profile: { name, faculty, major },
      // page,
    },
  }) => {
    // const limit = 6;
    // const offset = (page - 1) * limit;

    const data = await prisma.user.findMany({
      where: {
        profile: {
          name: { contains: name },
          faculty: { contains: faculty },
          major: { contains: major },
        },
      },
      // skip: offset,
      // take: limit,
    });

    return data;
  },
);


export const getAllGraduates = actionClient.schema(schema).action(
  async ({
    parsedInput: {
      profile: { name, faculty, major },
      page,
    },
  }) => {
    const limit = 6;
    const offset = (page - 1) * limit;

    const data = await prisma.user.findMany({
      where: {
        profile: {
          name: { contains: name },
          faculty: { contains: faculty },
          major: { contains: major },
        },
      },
      skip: offset,
      take: limit,
    });

    // get all with pagination
    return data;
  },
);
