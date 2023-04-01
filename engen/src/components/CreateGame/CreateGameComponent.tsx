"use client";
//import { LoginButton } from "@/components";
import {useEffect, useState} from 'react';
import { setTokenSourceMapRange } from 'typescript';

const CreateGameComponent = () => {

  const [step, setStep] = useState(1);
  const [items,setItems] = useState({cards:false,ball:false,chess:false,sticks:false})
  let count=0;
  
  const handleClickNum = (c:number) => {
    count++;
    setStep(step+1);
  }
  const handleClickItem = (i:string) => {
    let tmpItems=items;
    switch(i) {
      case "ball":
        tmpItems.ball=!items.ball;
        break;
      case "chess":
        tmpItems.chess=!items.chess;
        break;
      case "sticks":
        tmpItems.sticks=!items.sticks;
        break;
      case "cards":
        tmpItems.cards=!items.cards;
        break;
    }
    setItems(tmpItems);
  }
  return (
    <main className="w-screen h-screen flex flex-wrap justify-center items-center ">
      {
        step==1?<>
          <PlayerCountCard onClick={()=>handleClickNum(2)} text="2 Players"/>
          <PlayerCountCard onClick={()=>handleClickNum(3)} text="3 Players"/>
          <PlayerCountCard onClick={()=>handleClickNum(4)} text="4 Players"/>
          <PlayerCountCard onClick={()=>handleClickNum(5)} text="5 & more"/>
        </>
        :<></>
      }

      {
        step==2?<>
          <ItemCard onClick={()=>handleClickItem("cards")} active={items.cards} text="Cards"/>
          <ItemCard onClick={()=>handleClickItem("chess")} active={items.chess} text="Chess"/>
          <ItemCard onClick={()=>handleClickItem("sticks")} active={items.sticks} text="Sticks"/>
          <ItemCard onClick={()=>handleClickItem("ball")} active={items.ball} text="Ball"/>
        </>
        :<></>
      }

    </main>
  );
};

const PlayerCountCard = (props:any) => {
  return (
      <div onClick={props.onClick} className="bg-yellow-500 hover:bg-yellow-400 m-3 py-9 rounded-md w-1/5 px-2 flex text-6xl">
      {props.text}
    </div>
  );
};

const ItemCard = (props:any) => {
  const [isActive, setIsActive] = useState(props.active);

  useEffect(() => {
    setIsActive(props.active);
  }, [props.active])

  const handleClick = () => {
    setIsActive(!isActive);
    props.onClick();
  }

  return (
    <div onClick={handleClick} className={`m-3 py-9 rounded-md w-1/5 px-2 flex text-6xl ${isActive ? 'bg-green-400' : 'bg-green-800'}`}>
      {props.text}
    </div>
  );
};


export default CreateGameComponent;
