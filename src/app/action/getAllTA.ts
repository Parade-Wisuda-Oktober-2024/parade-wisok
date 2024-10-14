
"use server";

import { z } from "zod";
import { prisma } from "~/server/db";



export default async function getAllTA(page = 1) {
  try {
    const limit = 6;
    const totalData = await prisma.tA.count()
    const maxPage = Math.ceil(totalData/limit)
    const paginationSchema = z.object({
      page: z
      .number()
      .int()
      .positive()
      .min(1, { message: "Page must be at least 1" })
      .max(maxPage, { message:  "Page must be less than or equal to ${maxPage}"})
      .optional() 
      .default(1),
    });
    const validPage =paginationSchema.safeParse({page:page}).success ? paginationSchema.parse({page:page}) : {page:1}
 
    const offset = (validPage.page - 1) * limit;
    
    const data = await prisma.tA.findMany({
      skip: offset,
      take: limit,
      select: {
        id: true,
        title: true,
        description: true,
        wisudawan: {
          select: {
            id: true,
            profile: {
              select: {
                name: true,
                faculty: true,
              },
            } ,
          },
        },
        _count: {
          select: {
            likes: true,
          },
        },
      },
    });


    const formattedData = data.map((ta) => ({
      ...ta,
      likesCount: ta._count.likes,
    }));

    return formattedData;
  } catch (error) {
   if (error instanceof z.ZodError) {
    
      console.error('Validation Error:', error.errors);
      throw new Error('Invalid page parameter');
    }


    console.error('Database Error:', error);
    throw new Error('Failed to fetch all TA.');
  }
}
