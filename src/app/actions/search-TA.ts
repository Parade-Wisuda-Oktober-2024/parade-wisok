"use server";

import { z } from "zod";
import { actionClient } from "~/lib/safe-action";
import { prisma } from "~/server/db";

export const searchAllTA = actionClient
  .schema(
    z.object({
      nameOrTitle: z.string().default(""),
      faculty: z.string().default(""),
      major: z.string().default(""),
      // limit: z.number().min(1).default(6),
      // page: z.number().min(1).default(1),
    }),
  )
  .action(
    async ({ parsedInput: { nameOrTitle, faculty, major } }) => {
      // const offset = (page - 1) * limit;
      try {
        const TARecords = await prisma.tA.findMany({
          where: {
            OR: [
              {
                wisudawan: {
                  profile: {
                    AND: [
                      {
                        name: {
                          contains: nameOrTitle,
                          mode: "insensitive",
                        },
                      },
                      {
                        faculty: {
                          contains: faculty,
                          mode: "insensitive",
                        },
                      },
                      {
                        major: {
                          contains: major,
                          mode: "insensitive",
                        },
                      },
                    ],
                  },
                },
              },
              {
                title: {
                  contains: nameOrTitle,
                  mode: "insensitive",
                },
              },
            ],
          },
          select: {
            title: true,
            wisudawan: {
              select: {
                profile: {
                  select: {
                    name: true,
                    faculty: true,
                    major: true,
                  },
                },
              },
            },
            _count: {
              select: {
                likes: true,
              },
            },
          },
          // take: limit,
          // skip: offset,
        });

        const data = TARecords.map((ta) => ({
          title: ta.title,
          wisudawanName: ta.wisudawan?.profile?.name ?? "Unknown",
          faculty: ta.wisudawan?.profile?.faculty ?? "Unknown",
          major: ta.wisudawan?.profile?.major ?? "Unknown",
          likeCount: ta._count.likes,
        }));

        return data;
      } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch TA records.");
      }
    },
  );


export const searchTA = actionClient
  .schema(
    z.object({
      nameOrTitle: z.string().default(""),
      faculty: z.string().default(""),
      major: z.string().default(""),
      limit: z.number().min(1).default(6),
      page: z.number().min(1).default(1),
    }),
  )
  .action(
    async ({ parsedInput: { nameOrTitle, faculty, major, limit, page } }) => {
      const offset = (page - 1) * limit;

      try {
        const TARecords = await prisma.tA.findMany({
          where: {
            OR: [
              {
                wisudawan: {
                  profile: {
                    AND: [
                      {
                        name: {
                          contains: nameOrTitle,
                          mode: "insensitive",
                        },
                      },
                      {
                        faculty: {
                          contains: faculty,
                          mode: "insensitive",
                        },
                      },
                      {
                        major: {
                          contains: major,
                          mode: "insensitive",
                        },
                      },
                    ],
                  },
                },
              },
              {
                title: {
                  contains: nameOrTitle,
                  mode: "insensitive",
                },
              },
            ],
          },
          select: {
            id: true,
            title: true,
            wisudawan: {
              select: {
                profile: {
                  select: {
                    name: true,
                    faculty: true,
                    major: true,
                  },
                },
              },
            },
            _count: {
              select: {
                likes: true,
              },
            },
          },
          take: limit,
          skip: offset,
        });

        const data = TARecords.map((ta) => ({
          taId: ta.id,
          title: ta.title,
          wisudawanName: ta.wisudawan?.profile?.name ?? "Unknown",
          faculty: ta.wisudawan?.profile?.faculty ?? "Unknown",
          major: ta.wisudawan?.profile?.major ?? "Unknown",
          likeCount: ta._count.likes,
        }));

        return data;
      } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch TA records.");
      }
    },
  );

