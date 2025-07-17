import React from 'react'

const HomeHero = () => {
  return (
   <div className='flex justify-between bg-[#0d0d0d] m-0-auto flex-row'>
        <div className=' flex m-0 text-6xl bg-[#0d0d0d] text-white justify-center flex-col p-8'>
            <h1>Smart fitness. Personal coaching. </h1>
            <h1 className='text-lime-400'>Real results.</h1>
        </div>
        <div className = 'm-0 object-cover'><img className='h-[calc(100vh-150px)] w-full'src="../public/Frame 4.png" alt="" /></div>
    </div>
    
  )
}

export default HomeHero;