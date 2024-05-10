import React from 'react'
import lotterygame from '../assets/lotterygame.png'


function About() {
  return (
    <div className='w-full min-h-[80vh] bg-white flex gap-5 flex-col py-5 xl:h-screen xl:flex-row'>
      <div className="about w-full h-1/2 px-12 xl:w-1/2 xl:h-screen ">
        <h1 className='text-6xl text-neutral-900 font-extrabold font["gilroy"] text-center pt-14 xl:text-5xl ' >About Us</h1>
        <h4 className='text-zinc-900 text-2xl font-semibold font["gilroy"] leading-7 mt-6 w-auto xl:text-xl ' >At <span className='text-blue-700' >Colour winner</span>, we're passionate about providing an exciting and secure platform for lottery enthusiasts to play and win big. Our journey began with a simple idea: to create a lottery experience that's not only entertaining but also fair and transparent.</h4>
        {/* <button className='px-6 py-2 bg-blue-500 rounded-3xl border border-solid border-gray-400 text-white font-bold font-["gilroy"] mt-10 ml-44 '>Read More</button> */}
      </div>
      <div className="right w-full min-h-1/2 flex items-center justify-center xl:w-1/2 xl:h-screen ">
           <div className="image overflow-hidden  bg-blue-400 w-[70vw] h-[65vw] flex items-center justify-center rounded-2xl shadow-xl shadow-zinc-900 xl:w-[30vw] xl:h-[30vw] ">
             <img className='' src={lotterygame} alt="" />
           </div>
      </div>
      
    </div>
  )
}

export default About