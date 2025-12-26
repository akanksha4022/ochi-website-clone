import { motion } from 'framer-motion';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const Landing = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
        <div className="textStructure mt-40 px-20">
          {["we create","eye opening","presentations"].map((item, index)=>{
            return (<div className="masker text-amber-50">
                    <div className='w-fit flex overflow-hidden transition-transform duration-[600ms] ease-in-out'>
                      {index=== 1 && (<motion.div initial={{width:0}} 
                        animate={{width: "9vw"}} 
                        transition={{ease: [0.45, 0, 0.55, 1], duration:0.6}} 
                        className=" mr-[1vw] w-[9vw] h-[5.1vw] rounded-md relative top-[10px] bg-cover bg-[url('https://images.pexels.com/photos/207891/pexels-photo-207891.jpeg')]"></motion.div> )}
                    <h1 className="mb-[0.7vw] uppercase text-[8.5vw] leading-[.65] font-[Founders]">{item}</h1>
                    </div>                    
                   </div>)
          })}            
        </div>
        <div className="border-t-1 border-zinc-700 mt-20 px-20 py-5 flex items-center justify-between  ">
          {["For public and private companies", "From the first pitch to IPO"].map((item, index)=>{
           return <p className='text-amber-50 leading-none font-[NeueMontreal] text-md'>{item}</p>
          })}
          <div className="start flex items-center gap-5">
            <div className="uppercase border-1 text-sm text-amber-50 rounded-[50px] px-4 py-1 font-[NeueMontreal] font-light">Start the Project</div>
            <div className="w-8 h-8 border-1 text-lg cursor-pointer rounded-full text-amber-50 flex items-center justify-center">
              <MdArrowOutward />
            </div>
          </div>

        </div>
      
    </div>
  )
}

export default Landing
