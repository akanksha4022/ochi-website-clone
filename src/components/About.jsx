import React from 'react'

const About = () => {
  return (
    <div className='w-full h-[190vh] bg-[#CDEA68] rounded-t-4xl px-20'>
      <div className='toptext w-full h-[50vh]  border-b-[1.4px] border-b-[#3633334f]'>
        <h1 className='text-6xl leading-15 py-20  pr-40 tracking-tighter'>
            Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>         
      </div>  
      <div className=" middletext grid grid-cols-4 grid-rows-2 gap-4 font-[NeueMontreal] my-10 border-b-[1.4px] border-b-[#3633334f] ">
        <div className="col-span-2">What you can expect:</div>
        <div className="col-start-3">
          We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.</div>
        <div className="col-start-4"></div>
        <div className="col-span-2 row-start-2"></div>
        <div className="col-start-3 row-start-2">
        We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.
        We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</div>
        <div className="col-start-4 row-start-2 whitespace-wrap">
          S:
          Instagram
          Behance
          Facebook
          Linkedin
        </div>
      </div>  
      <div className="lasttext w-full h-[50vh] flex gap-10">
        <div className="textAndButton w-1/2">
          <h1 className='text-6xl  tracking-tighter'>Our Approach:</h1>
          <button className='text-amber-50 uppercase px-12 py-4.5 mt-10 bg-zinc-900 rounded-full flex gap-5 items-center'>Read More
            <div className='w-3 h-3 rounded-full bg-amber-50'></div>
          </button>
        </div>
        <div className="image w-1/2 h-[60vh] bg-[#9ab343] rounded-4xl"></div>

      </div> 
        
    </div>    
  
    
  )
}

export default About
