"use server";

import { z } from "zod";
import { actionClient } from "~/lib/safe-action";
import { prisma } from "../../server/db";
import { revalidatePath } from "next/cache";
import { randomUUID } from "node:crypto";

export const submitWOA = actionClient
  .schema(
    z.object({
      toUser: z.string().min(1),
      content: z.string().min(1),
    }),
  )
  .action(async ({ parsedInput: { toUser, content } }) => {
    try {
      const WOA = await prisma.wOA.create({
        data: {
          id: randomUUID(),
          to: toUser,
          content,
        },
      });
      return true;
    } catch (error) {
      console.log(error);
      throw new Error("Failed post WOA.");
    }
  });
