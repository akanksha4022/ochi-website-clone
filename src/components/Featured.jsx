import { motion, useAnimate, useAnimation } from 'framer-motion'
import gsap from 'gsap'
import React from 'react'
import {Power4} from 'gsap';
import { useState } from 'react';

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index)=>{
    cards[index].start({y:"0"})
  }
  const handleHoverEnd = (index)=>{
    cards[index].start({y:"100%"})
  }
  
    
  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-1 border-zinc-700 pb-20'>
        <h1 className='text-7xl text-amber-50 font-[NeueMontreal] tracking-tight' >Featured Project</h1> 
      </div>
      <div className='px-20'> 
        <div className="cards w-full flex gap-5 mt-10">
        <motion.div 
        onHoverStart={()=>handleHover(0)}
        onHoverEnd = {()=>handleHoverEnd(0)}
         className="cardcontainer relative w-1/2 h-[75vh] cursor-pointer ">
            <h1 className='absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-9 text-8xl font-[Founders] leading-none'>
                {"SALIENCE LABS".split('').map((item, index)=> 
                    (<motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease:[0.22, 1, 0.36,1], delay: index*.02}} className='inline-block '>{item}</motion.span>) )}
            </h1>
            <div className=' card w-full h-full rounded-xl  overflow-hidden'>
                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" />
            </div>
        </motion.div>
        <motion.div
        onHoverStart={()=>handleHover(1)}
        onHoverEnd = {()=>handleHoverEnd(1)}
        className="cardcontainer relative w-1/2 h-[75vh] cursor-pointer ">
            <h1 className='absolute text-[#CDEA68] flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-9 text-8xl font-[Founders] leading-none'>
                {"CARDBOARD SPACESHIP".split('').map((item, index)=>
                     (<motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease:[0.22, 1, 0.36,1], delay: index*.02}} className='inline-block '>{item}</motion.span>) )}
            </h1>
            <div className='card w-full h-full rounded-xl  overflow-hidden'>
                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" />
            </div>

        </motion.div>
      </div>
      </div>
      
    </div>
  )
}

export default Featured
