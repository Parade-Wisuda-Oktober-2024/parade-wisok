import {getServerAuthSession} from "~/server/auth";
import Profile from "~/app/profile/profile";
import {redirect} from "next/navigation";

export default async function Page() {
  const session = await getServerAuthSession();
  if (!session) {
    redirect("/login");
  }

  return (
    <Profile/>
  );
}