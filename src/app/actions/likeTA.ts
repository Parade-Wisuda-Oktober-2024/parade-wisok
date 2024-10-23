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
    const userCookie =
      cookie.get("next-auth.session-token")?.value ??
      cookie.get("__Secure-next-auth.session-token")?.value;

    console.log("User Cookie: ", userCookie);
    try {
      if (likeCookie) {
        await prisma.like.deleteMany({
          where: {
            userId: userCookie,
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

      const user = await prisma.user.findFirst({
        where: {
          id: userCookie,
        },
      });

      if (!user) {
        await prisma.user.create({
          data: {
            id: userCookie ?? randomUUID(),
            nim: "00024000",
            passwordHash: "hashedPassword123",
            role: "USER",
          },
        });
      }

      await prisma.like.create({
        data: {
          taId: taId,
          userId: userCookie ?? randomUUID(),
        },
      });

      cookie.set(`liked_${taId}`, "true", {
        maxAge: env.SESSION_MAXAGE,
        path: "/",
      });

      const likeCount = await prisma.like.count({
        where: {
          taId: taId,
        },
      });

      const data = {
        message: "Berhasil menyukai TA",
        updatedLikes: likeCount,
      };

      return data;
    } catch (error) {
      console.log(error);
      throw new Error("500: Internal Server Error");
    }
  });