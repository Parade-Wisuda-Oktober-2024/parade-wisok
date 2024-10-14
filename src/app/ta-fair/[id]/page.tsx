
import { prisma } from "~/server/db";
import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

const TADetailPage: NextPage<{ params: {id:string} }> = async ({params}) => {
    const { id } = params;

    const ta = await prisma.tA.findUnique({
        where: {id: id},
        include: {
            wisudawan: {
              include: {
                profile: {
                    include:{
                        user:true
                    }
                } // Ini memastikan profile juga diambil
              },
            },
            _count: {
                select: {
                  likes: true,
                },
              },
          },
          
    });
    if(!ta) {
        return <div>Tidak ditemukan</div>
    }
    return (
        <>
            <main className="text-center my-5">
                <Link href="/ta-fair">
                    Back
                </Link>
                <h1>{ta.title}</h1>
                <p>{ta.wisudawan?.profile?.name ?? "Tidak ada data"}</p>
                <p>{ta.wisudawan?.profile?.user?.nim ?? "Tidak ada data"}</p>
                <p>{ta.wisudawan?.profile?.faculty ?? "Tidak ada data"}</p>
                <p>{ta.description}</p>
                <p>Likes: {ta._count.likes}</p>
            </main>
        </>
    );
}
export default TADetailPage;
