import {getServerAuthSession} from "~/server/auth";
import Navbar from "~/app/navbar";

export default async function WrappedNavbar() {
  const session = await getServerAuthSession();
  return (
    <Navbar session={session} />
  );
}