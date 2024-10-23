"use server";

import { z } from "zod";
import { actionClient } from "~/lib/safe-action";
import { prisma } from "~/server/db";

export const submitWOA = actionClient
  .schema(
    z.object({
      targetName: z.string().min(1, {}),
      targetNIM: z.string().min(1, {}),
      targetMajor: z.string().min(1, {}),
      content: z.string().min(2, {}),
      sender: z.string(),

    }),
  )
  .action(async ({ parsedInput: { targetName, targetMajor, targetNIM, content, sender } }) => {
    try {
      const WOA = await prisma.woA.create({
        data: {
          targetName,
          targetMajor,
          targetNIM,
          content,
          sender,
        },
      })

      if (!WOA) {
        throw new Error("Failed to post WOA.");
      }

      return WOA;
    } catch (error) {
      console.log(error);
      throw new Error("Failed post WOA.");
    }
  });
