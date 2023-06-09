"use client";
//import { LoginButton } from "@/components";
import { useEffect, useState } from "react";
import { setTokenSourceMapRange } from "typescript";

const CreateGameComponent = (props: any) => {
  const [step, setStep] = useState(1);
  const [genre, setGenre] = useState("");
  const [items, setItems] = useState({
    cards: false,
    volleyball: false,
    chess: false,
    sticks: false,
    basketball: false,
    badminton: false,
    football: false,
  });
  let count = 0;

  const handleClickNum = (c: number) => {
    count++;
    setStep(step + 1);
  };
  const handleClickItem = (i: string) => {
    let tmpItems = items;
    switch (i) {
      case "volleyball":
        tmpItems.volleyball = !items.volleyball;
        break;
      case "chess":
        tmpItems.chess = !items.chess;
        break;
      case "sticks":
        tmpItems.sticks = !items.sticks;
        break;
      case "cards":
        tmpItems.cards = !items.cards;
        break;
    }
    setItems(tmpItems);
  };

  const sendToAPI = async () => {
    console.log("SENDING TO API");
    let listOfItems = [];
    if (items.cards) listOfItems.push("playing cards");
    if (items.chess) listOfItems.push("chess board");
    if (items.volleyball) listOfItems.push("valleyball");
    if (items.basketball) listOfItems.push("basketball");
    if (items.badminton) listOfItems.push("badminton");
    if (items.sticks) listOfItems.push("sticks");
    let stringForItems = "";
    if (listOfItems.length == 0) return;
    if (listOfItems.length == 1) stringForItems = listOfItems[0];
    if (listOfItems.length > 1)
      stringForItems = `${listOfItems[0]} and ${listOfItems[1]}`;

    const prompt = `Generate rules for a game with ${count} players with ${stringForItems}`;
    console.log(prompt);
    const userId = props.userId;

    //TODO
    return fetch(`${process.env.NEXT_URL}` + "api/games", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt,
        userId: userId,
      }),
    });
  };

  const handleGenreClick = (g: string) => {
    setGenre(g);
    setStep(step + 1);
  };

  return (
    <main className="fixed top-48 left-48 w-5/6">
      {step == 1 ? (
        <div className="flex flex-wrap justify-center items-center">
          <PlayerCountCard onClick={() => handleClickNum(2)} text="2 Players" />
          <PlayerCountCard onClick={() => handleClickNum(3)} text="3 Players" />
          <PlayerCountCard onClick={() => handleClickNum(4)} text="4 Players" />
          <PlayerCountCard onClick={() => handleClickNum(5)} text="5 & more" />
        </div>
      ) : (
        <></>
      )}

      {step == 2 ? (
        <div className="flex flex-wrap justify-center items-center">
          <GenreCard
            onClick={() => handleGenreClick("strategy")}
            text="Strategy"
          />
          <GenreCard onClick={() => handleGenreClick("party")} text="Party" />
          <GenreCard
            onClick={() => handleGenreClick("abstract")}
            text="Abstract"
          />
        </div>
      ) : (
        <></>
      )}

      {step == 3 ? (
        <>
          <div className="flex flex-wrap justify-center items-center">
            <ItemCard
              onClick={() => handleClickItem("cards")}
              active={items.cards}
              text="Cards"
            />
            <ItemCard
              onClick={() => handleClickItem("chess")}
              active={items.chess}
              text="Chess"
            />
            <ItemCard
              onClick={() => handleClickItem("sticks")}
              active={items.sticks}
              text="Sticks"
            />
            <ItemCard
              onClick={() => handleClickItem("volleyball")}
              active={items.volleyball}
              text="volleyball"
            />
            <ItemCard
              onClick={() => handleClickItem("basketball")}
              active={items.basketball}
              text="Basketball"
            />
            <ItemCard
              onClick={() => handleClickItem("badminton")}
              active={items.badminton}
              text="Badminton"
            />
            <ItemCard
              onClick={() => handleClickItem("football")}
              active={items.football}
              text="Football"
            />
          </div>
          <div className="flex flex-wrap justify-center items-center">
            <div
              onClick={sendToAPI}
              className={` m-3 py-9 rounded-md  px-2 flex text-6xl bg-blue-600`}
            >
              Generate
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </main>
  );
};

const PlayerCountCard = (props: any) => {
  return (
    <div
      onClick={props.onClick}
      className="bg-transparent border  border-slate-200 hover:bg-amber-400 hover:te m-3 py-9 rounded-md w-1/5 px-2 flex text-4xl"
    >
      {props.text}
    </div>
  );
};

const GenreCard = (props: any) => {
  return (
    <div
      onClick={props.onClick}
      className=" justify-center bg-transparent border  border-slate-200 hover:bg-red-500 hover:te m-3 py-9 rounded-md w-1/5 px-2 flex text-4xl"
    >
      {props.text}
    </div>
  );
};

const ItemCard = (props: any) => {
  const [isActive, setIsActive] = useState(props.active);

  useEffect(() => {
    setIsActive(props.active);
  }, [props.active]);

  const handleClick = () => {
    setIsActive(!isActive);
    props.onClick();
  };

  let selectedCount = 0;
  return (
    <div
      onClick={handleClick}
      className={` border justify-center m-3 py-9 rounded-md w-1/5 px-2 flex text-4xl ${
        isActive ? "bg-green-800" : "bg-transparent"
      }`}
    >
      {props.text}
    </div>
  );
};

export default CreateGameComponent;
