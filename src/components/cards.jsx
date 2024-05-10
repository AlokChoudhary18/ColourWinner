import React from "react";
import gamedetails from "./Details";

function cards() {
  return (
    <div>
      <div className="container w-full flex flex-col gap-8  items-center justify-center xl:flex-wrap xl:flex-row ">
        {gamedetails.map((elem) => {
          const { id, image, winnigPrice, paragraph, buttonText } = elem;

          return (
            
            <div className="card w-[85vw] h-[30vw] bg-sky-400 rounded-lg flex gap-4 overflow-hidden px-1 py-1 shadow-lg shadow-zinc-700 xl:w-[23vw] xl:h-[25vw] xl:flex-col ">
              <div className="w-40 h-full flex justify-center items-center mb-2 xl:w-full xl:h-32">
                <img className="w-32 xl:w-52" src={image} alt="" />
              </div>
              <div className="flex items-center justify-center flex-col  xl:gap-4 ">
                <h1 className="text-center text-2xl font-bold text[#111111]">
                  {winnigPrice}
                </h1>
                <p className='text-zinc-900 text-sm font-semibold text-center font["gilroy"]'>
                  {paragraph}
                </p>
                <button className='bg-transparent hover:bg-sky-600 px-4 py-1 rounded-full  border-solid border-2 border-black font-semibold font["gilroy"] '>
                  {buttonText}
                </button>
              </div>
            </div>
            
          );
        })}
    </div>
    </div>
  );
}

export default cards;
