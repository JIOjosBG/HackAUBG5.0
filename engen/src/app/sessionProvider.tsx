"use client";

import { SessionProvider, useSession } from "next-auth/react";

export interface AuthContextProps {
  children: React.ReactNode;
}
export default function Providers({ children }: any) {
  return <SessionProvider>{children}</SessionProvider>;
}
