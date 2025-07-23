import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-100 flex items-center px-18 gap-5'>
      <div className='cardcontainer h-[60vh] w-1/2'>
        <div className=' relative card rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute px-4 py-1 border-2 text-[#CDEA68] border-[#CDEA68] rounded-full left-8 bottom-6'>&copy;2019-2025</button>
        </div>
      </div>
      <div className='cardcontainer flex gap-5 h-[60vh] w-1/2'>
        <div className='relative flex items-center justify-center card rounded-xl w-1/2 h-full bg-[#161e1d]'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className='absolute px-4 py-1 border-2 text-[#b1b1b1] border-[#b4b4b4] rounded-full left-8 bottom-6 uppercase leading-tighter'>Rating 5.5 on clutch</button>
        </div>
             
        <div className=' relative flex items-center justify-center card rounded-xl w-1/2 h-full bg-[#161e1d]'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className='absolute px-4 py-1 border-2 text-[#b1b1b1] border-[#a4a4a4] rounded-full left-8 bottom-6 uppercase leading-tighter'>business bootcamp alumni</button>
        </div>
             
      </div>
    </div>
  )
}

export default Cards
