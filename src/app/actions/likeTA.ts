"use server";

import { z } from "zod";
import { env } from "~/env";
import { actionClient } from "~/lib/safe-action";
import { prisma } from "~/server/db";
import { cookies } from "next/headers";
import { randomUUID } from "node:crypto";

export const updateLikeTA = actionClient
  .schema(z.object({ taId: z.string() }))
  .action(async ({ parsedInput: { taId } }) => {
    const cookie = cookies();
    const likeCookie = cookie.get(`liked_${taId}`)?.value;

    try {
      const user_ = await prisma.tA.findUnique({
        where: {
          id: taId,
        },
        select: {
          wisudawanId: true,
        }
      })
      if (likeCookie) {
        await prisma.like.deleteMany({
          where: {
            userId: user_?.wisudawanId,
            taId: taId,
          },
        });

        cookie.set(`liked_${taId}`, "", {
          maxAge: 0,
          path: "/",
        });

        const likeCount = await prisma.like.count({
          where: {
            taId: taId,
          },
        });

        const data = {
          message: "Berhasil menghapus like",
          updatedLikes: likeCount,
        };

        return data;
      }

      await prisma.like.create({
        data: {
          taId: taId,
          userId: user_?.wisudawanId ?? randomUUID(),
        },
      });

      cookie.set(`liked_${taId}`, "true", {
        maxAge: env.SESSION_MAXAGE,
        path: "/",
      });

      const data = {
        message: "Berhasil menyukai TA",
      };

      return data;
    } catch (error) {
      console.log(error);
      throw new Error("500: Internal Server Error");
    }
  });