import React from 'react'
import {motion} from "framer-motion";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 bg-[#004D43] rounded-t-4xl'>
      <div className='text border-y-1 border-y-[#4D837C] flex whitespace-nowrap overflow-hidden'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity ,repeatDelay:0, duration:10}} className='text-amber-50 uppercase text-[25vw] font-[Founders] leading-none -mt-14 -mb-6 pr-20 '>we are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity , repeatDelay:0,duration:10}} className='text-amber-50 uppercase text-[25vw] font-[Founders] leading-none -mt-14 -mb-6 pr-20'>we are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity , repeatDelay:0,duration:10}} className='text-amber-50 uppercase text-[25vw] font-[Founders] leading-none -mt-14 -mb-6 pr-20'>we are ochi</motion.h1>

      </div>
    </div>
  )
}

export default Marquee
