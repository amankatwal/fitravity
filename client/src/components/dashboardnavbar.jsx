import React, { useState } from 'react';
import logo from "../../public/logo.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';


const Dashboardnavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className=''>
    <div className='flex items-center justify-between bg-black  py-7 px-15'>
        <div className='flex items-center text-4xl font-bold'><img src={logo} width={55} />
        <p className='text-lime-400'>FIT</p>
        <p className='text-white'>RAVITY</p>
        </div>
        <div className='hidden xl:block'>
        <ul className='text-lime-400 flex gap-10 font-bold py-o px-15 text-l '> 
         <li> DASHBOARD</li>
          <li>WORKOUT</li>
          <li>FITRAV-MEDIA</li>
          <li>LEARNING</li>
          </ul>
          </div>
          <button className="cursor-pointer rounded-xs text-xl border border-lime-400 text-lime-400 px-4 py-1 font-semibold hover:text-black-400 hover:bg-lime-500 hover:text-black transition duration-300 hover:scale-110">
           <Link to="/login"> LOG-OUT</Link>
          </button>
          <button onClick={()=>setIsOpen(!isOpen)} className='text-lime-400 text-3xl block xl:hidden transition duration-300 active:scale-90 active:rotate-12'>{isOpen? <RxCross1 /> : <RxHamburgerMenu />}</button>
          </div>
          <div className={`${isOpen ?'min-h-[60vh] opacity-100' : 'max-h-[0] opacity-0'} xl:hidden bg-[#000000]  content-evenly pt-20 transition-all duration-600 ease-in-out overflow-hidden`}>
        <ul className='text-lime-400 font-bold text-2xl grid text-center h-[60vh]'> 
          <li> DASHBOARD</li>
          <li>WORKOUT</li>
          <li>FITRAV-MEDIA</li>
          <li>LEARNING</li>
          </ul>
          
</div>
          
        </nav>
  )
}

export default Dashboardnavbar;