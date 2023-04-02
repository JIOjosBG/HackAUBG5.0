"use client";
import { LoginButton } from "@/components";

const LoginComponent = () => {
  return (
    <main className="w-screen fixed top-72 align-center left-96 flex-row justify-center items-center ">
      <LoginButton content={"Sign in with Github"} provider={"github"} />
      <LoginButton content={"Sign in with Google"} provider={"google"} />
    </main>
  );
};

export default LoginComponent;
