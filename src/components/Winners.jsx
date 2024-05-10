import React from "react";
import { Link } from "react-router-dom";
import winner from "../../public/images/winner.jpg";
import Winnersdetails from "./winnerData";

function Winners() {
  return (
    <div className="winner w-full min-h-screen bg bg-white ">
      <div
        id="winner"
        className="winner w-full h-16 shadow-lg shadow-gray-600 "
      >
        <h1 className='text-3xl text-yellow-400 font-extrabold tracking-tight text-center font-["Montserrat"] captiliaze pt-4'>
          Our Recent Winners
        </h1>
      </div>

      <div className="winners min-w-full py-8 px-3 flex flex-wrap items-center justify-center gap-5  ">
        {Winnersdetails.map((elem) => {
          const { id, image, winningAmount, winnerName, gameName } = elem;

          return (
            <div className="w-[85vw] h-[65vw] bg-slate-200 overflow-hidden py-4 shadow-lg shadow-zinc-800 rounded-xl flex flex-col item-center xl:w-[23vw] xl:h-[25vw]  xl:gap-3 ">
              <div className="h-36 flex justify-center item-center xl:w-full">
                <img
                  className="rounded-full w-36 h-36 bg-cover "
                  src={image}
                  alt="winners"
                />
              </div>
              <div className="content mt-3 flex items-center justify-center gap-4 flex-col">
                <h1 className="font['gilroy'] text-zinc-800 font-bold text-4xl">
                  {winningAmount}
                </h1>
                <p className="font['gilroy'] text-xl font-semibold text-black">
                  <span className="text-cyan-600">{winnerName}</span> from 
                     {gameName}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center mt-5" >
        <button className="px-12 py-3 font['gilroy'] hover:bg-zinc-400 border-2 border-solid border-black rounded-full uppercase font-medium text-xl" ><Link to="/Winners" >See All Winners</Link></button>
      </div>
   
    
    </div>
  );
}

export default Winners;
