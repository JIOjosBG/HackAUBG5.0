import SideBar from "@/components/SideBar";
import "./globals.css";
import SessionProvider from "@/app/sessionProvider";
import ReactQueryWrapper from "./QueryClientWrapper";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SessionProvider>
          <SideBar />
          <ReactQueryWrapper> {children}</ReactQueryWrapper>
        </SessionProvider>
      </body>
    </html>
  );
}
