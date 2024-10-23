import {actionClient} from "~/lib/safe-action";
import {getServerAuthSession} from "~/server/auth";

export const getSession = actionClient.action(async () => {
  return await getServerAuthSession();
} )