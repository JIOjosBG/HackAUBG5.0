"use client";
import { LoginButton } from "@/components";

const LoginComponent = () => {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center ">
      <LoginButton content={"Sign in with Github"} provider={"github"} />
      <LoginButton content={"Sign in with Google"} provider={"google"} />
    </main>
  );
};

export default LoginComponent;
