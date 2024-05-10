import React from 'react'
import Games from './Games'
import Winners from './Winners'
import About from './About'


import car from '../assets/car.png'



function Home() {
  return (
    <>
    <div id='home' className='w-full h-[80vh] bg-cover bg-center flex  flex-col overflow-hidden xl:h-screen xl:flex-row' >
     <div className="w-full h-1/2 px-16 py-12 xl:py-28">
      <h1 className='text-3xl text-white font-["Gilroy"] font-bold uppercase text-left mb-4  w-72'>Let's Play And Win upto $5000 instant.</h1>
      <p className='text-base text-slate-300 font-["Montserrat"] tracking-tight mb-10 leading-6 ' >Welcome to <span className='text-yellow-400' > Colourwinner.fun</span>, where dreams come true and fortunes are won! We offer an exciting array of lottery games with amazing prizes waiting to be claimed by lucky winners like you.
      </p>
      <button className='px-8 py-2 rounded-full bg-sky-500 text-white font-["gilroy"] border border-solid border-blue-300 ' >Play Now</button>
     </div>
     <div className=" w-full h-1/2  ">
       <img  className='py-10 xl:py-44' src={car} alt="car" />
     </div>
    </div>
        <Games />
        <Winners />
        <About />
    
    </>
  )
}

export default Home