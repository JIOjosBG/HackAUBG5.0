"use client";
//import { LoginButton } from "@/components";
import {useEffect, useState} from 'react';
import { setTokenSourceMapRange } from 'typescript';

const CreateGameComponent = () => {

  const [step, setStep] = useState(1);
  const [genre, setGenre] = useState("");
  const [items,setItems] = useState({cards:false,volleyballball:false,chess:false,sticks:false,basketball:false,badminton:false,football:false})
  let count=0;
  
  const handleClickNum = (c:number) => {
    count++;
    setStep(step+1);
  }
  const handleClickItem = (i:string) => {
    let tmpItems=items;
    switch(i) {
      case "volleyballball":
        tmpItems.volleyballball=!items.volleyballball;
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

  const sendToAPI = async () => {
    console.log("SENDING TO API")
    console.log(count)
    console.log(items)
    console.log(genre)
  }

  const handleGenreClick = (g:string) => {
    setGenre(g);
    setStep(step+1)
  }

  return (
    <main className="w-screen h-screen">
      {
        
        step==1
        ?<div className="flex flex-wrap justify-center items-center" >
          <PlayerCountCard onClick={()=>handleClickNum(2)} text="2 Players"/>
          <PlayerCountCard onClick={()=>handleClickNum(3)} text="3 Players"/>
          <PlayerCountCard onClick={()=>handleClickNum(4)} text="4 Players"/>
          <PlayerCountCard onClick={()=>handleClickNum(5)} text="5 & more"/>
        </div>
        :<></>
      }

      {   
        step==2
        ?<div className="flex flex-wrap justify-center items-center" >
          <GenreCard onClick={()=>handleGenreClick("strategy")} text="Strategy"/>
          <GenreCard onClick={()=>handleGenreClick("party")} text="Party"/>
          <GenreCard onClick={()=>handleGenreClick("abstract")} text="Abstract"/>
        </div>
        :<></>
      }


      {
        step==3
        ?
        <>
        <div className="flex flex-wrap justify-center items-center" >
          <ItemCard onClick={()=>handleClickItem("cards")} active={items.cards} text="Cards"/>
          <ItemCard onClick={()=>handleClickItem("chess")} active={items.chess} text="Chess"/>
          <ItemCard onClick={()=>handleClickItem("sticks")} active={items.sticks} text="Sticks"/>
          <ItemCard onClick={()=>handleClickItem("volleyball")} active={items.volleyballball} text="Volleyballball"/>
          <ItemCard onClick={()=>handleClickItem("basketball")} active={items.basketball} text="Basketball"/>
          <ItemCard onClick={()=>handleClickItem("badminton")} active={items.badminton} text="Badminton"/>
          <ItemCard onClick={()=>handleClickItem("football")} active={items.football} text="Football"/>

        </div>
        <div className="flex flex-wrap justify-center items-center" >
          <div onClick={sendToAPI} className={` m-3 py-9 rounded-md  px-2 flex text-6xl bg-blue-600`}>
            Generate
          </div>
        </div>
        </>
        
        :<></>
      }

    </main>
  );
};

const PlayerCountCard = (props:any) => {
  return (
      <div onClick={props.onClick} className=" justify-center bg-yellow-500 hover:bg-yellow-400 m-3 py-9 rounded-md w-1/5 px-2 flex text-6xl">
      {props.text}
    </div>
  );
};

const GenreCard = (props:any) => {
  return (
      <div onClick={props.onClick} className=" justify-center bg-red-500 hover:bg-red-400 m-3 py-9 rounded-md w-1/5 px-2 flex text-6xl">
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

  let selectedCount=0;
  return (
    <div onClick={handleClick} className={` justify-center m-3 py-9 rounded-md w-1/5 px-2 flex text-4xl ${isActive ? 'bg-green-400' : 'bg-green-800'}`}>
      {props.text}
    </div>
  );
};


export default CreateGameComponent;
