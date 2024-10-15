"use server";

import { z } from "zod";
import { actionClient } from "~/lib/safe-action";
import { prisma } from "../../server/db";
import { randomUUID } from "node:crypto";

export const submitWOA = actionClient
  .schema(
    z.object({
      toUser: z.string().min(1, {}),
      content: z.string().min(2, {}),
      sender: z.string(),
      anon: z.boolean(),
    }),
  )
  .action(async ({ parsedInput: { toUser, content, sender, anon } }) => {
    try {
      const WOA = await prisma.wOA.create({
        data: {
          id: randomUUID(),
          userId: toUser,
          content,
          sender,
          anon,
        },
      });
      return true;
    } catch (error) {
      console.log(error);
      throw new Error("Failed post WOA.");
    }
  });
