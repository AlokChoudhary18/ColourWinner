import React from "react";
import box from "../assets/boxes.png";
import money from "../assets/money.png";
import lottery from "../assets/lottery.png";
import Cards from "./cards";

function Game() {
  return (
    <div className="w-full min-h-screen bg-white">
      <h2 className='text-zinc-900 text-4xl tracking-tighter font-extrabold font-["inter"] px-8 mt-7 '>
        All Games
      </h2>
      <div
        id="banner"
        className=" banner w-full h-40  mt-6 overflow-hidden relative shadow-xl shadow-slate-400 "
      >
        <img className="absolute left-0  top-12   w-28" src={lottery} alt="" />
        <h1 className="text-center  text-5xl antialiased tracking-tight text-yellow-400 capitalize font-extrabold pt-7">
          Enter To Win
        </h1>
        <h3 className="text-slate-200 uppercase text-center  font-bold mt-2">
          TAKE A SHOT AT CATCHING A WIN
        </h3>
        <img className="absolute w-32 z-10 bottom-0 right-2" src={box} alt="" />
        <img
          className="absolute -bottom-[1.5vw] -right-8 w-32"
          src={money}
          alt=""
        />
      </div>

      <div className="w-full px-10 py-14" >
        <Cards />
      </div>
    </div>
  );
}

export default Game;
