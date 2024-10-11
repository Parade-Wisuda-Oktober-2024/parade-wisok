"use server";

import { z } from "zod";
import { actionClient } from "../safe-action";
import { prisma } from "~/server/db";

const schema = z.object({
    id: z.string().uuid(),
});

export const getGraduateData = actionClient.schema(schema).action(
    async ({ parsedInput: { id } }) => {
        const data = await prisma.user.findUnique({
            where: {
                id,
            },
            select: {
                profile: {
                    select: {
                        name: true,
                        major: true,
                    },
                },
                TA: {
                    select: {
                        id: true,
                        title: true,
                        description: true,
                        createdAt: true,
                        updatedAt: true,
                    },
                },
            },
        });

        return data;
    }
);
