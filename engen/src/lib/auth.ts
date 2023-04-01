import { signIn, signOut } from "next-auth/react";

export const login = async (provider: string) => {
  await signIn(provider, {
    callbackUrl: "/",
    redirect: true,
  });
};

export const logout = async () =>
  signOut({
    callbackUrl: "/login",
  });
