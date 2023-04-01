"use client";
//import { LoginButton } from "@/components";
import { useState } from "react";
import { setTokenSourceMapRange } from "typescript";

const CreateGameComponent = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const handleClick = (c: number) => {
    console.log(step);
    setCount(c);
    setStep(step + 1);
  };
  return (
    <section className="  absolute ml-48 top-48 w-3/4 flex flex-row-reverse   justify-center items-center ">
      {step == 1 && (
        <>
          <PlayerCountCard onClick={() => handleClick(2)} text="2 Players" />
          <PlayerCountCard
            onClick={() => handleClick(3)}
            count={3}
            text="3 Players"
          />
          <PlayerCountCard
            onClick={() => handleClick(4)}
            count={4}
            text="4 Players"
          />
          <PlayerCountCard
            onClick={() => handleClick(5)}
            count={5}
            text="5 & more"
          />
        </>
      )}
    </section>
  );
};

const PlayerCountCard = (props: any) => {
  return (
    <div
      onClick={props.onClick}
      className="bg-transparent border  border-slate-200 hover:bg-amber-500 hover:te m-3 py-9 rounded-md w-1/5 px-2 flex text-4xl"
    >
      {props.text}
    </div>
  );
};

export default CreateGameComponent;
