import React from "react";
import { CreateWOA } from "~/components/WOA/CreateForm";
import { prisma } from "~/server/db";
import { getServerAuthSession } from "~/server/auth";

const createWOA = async () => {
  const session = await getServerAuthSession();
  console.log(session?.user.id);
  const users = await prisma.user.findMany({
    select: {
      id: true,
      nim: true,
      profile: {
        select: {
          name: true,
          faculty: true,
          major: true,
        },
      },
    },
  });
  return (
    <div className="w-1/2 p-10">
      <CreateWOA users={users} senderId={session?.user.id}></CreateWOA>
    </div>
  );
};

export default createWOA;
