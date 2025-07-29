import React, { useState } from 'react';
import logo from "../../public/logo.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';


const Dashboardnavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className=''>
    <div className='flex flex-col justify-between bg-black  py-7 px-15 max-w-[50vh]'>
        <div className='flex items-center text-4xl font-bold'><img src={logo} width={55} />
        <p className='text-lime-400'>FIT</p>
        <p className='text-white'>RAVITY</p>
        </div>
        <div className='hidden xl:block'>
        <ul className='text-lime-400 flex flex-col gap-5 font-bold py-o px-15 text-l uppercase'> 
         <li className="text-lime-400 font-medium px-2 py-2 hover:bg-lime-400 hover:text-black transition duration-300 hover:scale-110 rounded-xs "> DASHBOARD</li>
          <li className="text-lime-400 font-medium px-2 py-2 hover:bg-lime-400 hover:text-black transition duration-300 hover:scale-110 rounded-xs ">training</li>
          <li className="text-lime-400 font-medium px-2 py-2 hover:bg-lime-400 hover:text-black transition duration-300 hover:scale-110 rounded-xs ">Progress</li>
          <li className="text-lime-400 font-medium px-2 py-2 hover:bg-lime-400 hover:text-black transition duration-300 hover:scale-110 rounded-xs ">Chat</li>
          <li className="text-lime-400 font-medium px-2 py-2 hover:bg-lime-400 hover:text-black transition duration-300 hover:scale-110 rounded-xs ">Videos</li>
          <li className="text-lime-400 font-medium px-2 py-2 hover:bg-lime-400 hover:text-black transition duration-300 hover:scale-110 rounded-xs ">Blogspot</li>
          </ul>
          </div>
          <button className="cursor-pointer rounded-xs text-xl border border-lime-400 text-lime-400 px-4 py-1 font-semibold hover:text-black-400 hover:bg-lime-500 hover:text-black transition duration-300 hover:scale-110">
           <Link to="/login"> LOG-OUT</Link>
          </button>
          <button onClick={()=>setIsOpen(!isOpen)} className='text-lime-400 text-3xl block xl:hidden transition duration-300 active:scale-90 active:rotate-12'>{isOpen? <RxCross1 /> : <RxHamburgerMenu />}</button>
          </div>
          <div className={`${isOpen ?'min-h-[60vh] opacity-100' : 'max-h-[0] opacity-0'} xl:hidden bg-[#000000]  content-evenly pt-20 transition-all duration-600 ease-in-out overflow-hidden`}>
        <ul className='text-lime-400 font-bold text-2xl grid text-center h-[60vh]'> 
          <li className="text-lime-400 font-medium px-2 py-2 hover:bg-lime-400 hover:text-black transition duration-300 hover:scale-110 rounded-xs "> DASHBOARD</li>
          <li className="text-lime-400 font-medium px-2 py-2 hover:bg-lime-400 hover:text-black transition duration-300 hover:scale-110 rounded-xs ">training</li>
          <li className="text-lime-400 font-medium px-2 py-2 hover:bg-lime-400 hover:text-black transition duration-300 hover:scale-110 rounded-xs ">Progress</li>
          <li className="text-lime-400 font-medium px-2 py-2 hover:bg-lime-400 hover:text-black transition duration-300 hover:scale-110 rounded-xs ">Chat</li>
          <li className="text-lime-400 font-medium px-2 py-2 hover:bg-lime-400 hover:text-black transition duration-300 hover:scale-110 rounded-xs ">Videos</li>
          <li className="text-lime-400 font-medium px-2 py-2 hover:bg-lime-400 hover:text-black transition duration-300 hover:scale-110 rounded-xs ">Blogspot</li>
          </ul>
          
</div>
          
        </nav>
  )
}

export default Dashboardnavbar;