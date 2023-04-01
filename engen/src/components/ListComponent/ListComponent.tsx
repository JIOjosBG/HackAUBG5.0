"use client";

const ListComponent = () => {
    const games = [
        {
            'title':"Title",
            'description':"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolorem maxime id ratione vitae neque voluptatibus odit? Numquam, ex ipsam?"
        },
        {
            'title':"Title",
            'description':"Description"
        },
        {
            'title':"Title",
            'description':"Description"
        }
    ]
    return (
    <main className="fixed top-48 left-48 w-5/6">

    {/* <main className="w-screen  max-h-full h-screen flex flex-col justify-center items-center "> */}
        {games.map((game, index) => (
            <GameCard key={index} game={game} />
        ))}
        
    </main>
  );
};


const GameCard = (props:any) => {
    return (
    <div className="hover:scale-125 hover:bg-yellow-500 duration-200 m-3 p-3 rounded-md bg-gray-400 w-1/3">
        <div className="px-1 w-full  flex text-4xl">
            <div className="w-1/12">
                -
            </div>
            <div className="w-9/12">
                {props.game.title}
            </div>
        </div>
        <hr/>
        <div className="  flex text-l truncate-text">
            <div className="w-1/12">
                -
            </div>
            <div className="w-9/12 truncate-text">
                {props.game.description}
            </div>
        </div>
        
    </div>
    );
};

export default ListComponent;
