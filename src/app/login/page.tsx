import { getServerAuthSession } from "~/server/auth";
import Login from "~/app/login/login";

export default async function Page() {
  const session = await getServerAuthSession();

  return (
    <Login session={session} />
  );
}