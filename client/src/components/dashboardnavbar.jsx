import React, { useState } from 'react';
import logo from "../../public/logo.png"
import { TbLayoutSidebarRightExpandFilled } from "react-icons/tb";
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";
import { Link, NavLink } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { BsStack } from "react-icons/bs";
import { GiProgression } from "react-icons/gi";
import { BsChatLeftFill } from "react-icons/bs";
import { BiSolidVideos } from "react-icons/bi";
import { FaFileWaveform } from "react-icons/fa6";
import { RiLogoutBoxFill } from "react-icons/ri";
import { MdAccountBox } from "react-icons/md";

const Dashboardnavbar = ({feature}) => {
  const [isOpen, setIsOpen] = useState(false)
const allTabs = [
  {name: "DASHBOARD", icon: <MdDashboard className='text-3xl text-[#42ff09] hover:text-black'/>, key: "dashboard", path: "/dashboard"},
  {name: "TRAINING", icon: <BsStack className='text-3xl text-[#42ff09] hover:text-black'/>, key: "training_snippets", path: "/dashboard/training"},
  {name: "PROGRESS", icon: <GiProgression className='text-3xl text-[#42ff09] hover:text-black'/>, key: "progress_timeline", path: "/dashboard/progress"},
  {name: "CHAT", icon: <BsChatLeftFill className='text-3xl text-[#42ff09] hover:text-black'/>, key: "chat", path: "/dashboard/chat"},
  {name: "VIDEOS", icon: <BiSolidVideos className='text-3xl text-[#42ff09] hover:text-black'/>, key: "videos", path: "/dashboard/videos"},
  {name: "BLOGSPOT", icon: <FaFileWaveform className='text-3xl text-[#42ff09] hover:text-black'/>, key: "blogspot", path: "/dashboard/blogspot"}
]

const tabs = allTabs.filter(tab => feature.includes(tab.key))
  return (
    <nav className=''>
      {isOpen ? <div className='flex flex-col justify-around bg-[#1f1f1f]  max-w-[40vh] min-w-[40vh] min-h-[100vh] '>
      
        <div className='flex justify-center items-center text-4xl font-bold'><img src={logo} width={55} />
        <div className='flex'>
        <p className='text-[#6BC84B]'>FIT</p>
        <p className='text-white'>RAVITY</p>
        </div>
        
        </div>
        <div className=''>
        <ul className='text-white flex flex-col gap-5 font-bold py-o px-15 text-l uppercase'> 
        {tabs.map(tab =>
            <li key = {tab.key}><NavLink to={tab.path} className="text-[#42f301] font-medium px-2 py-2 flex gap-3 hover:bg-white hover:text-black transition duration-300 hover:scale-110 rounded-xs ">{tab.icon}{tab.name}</NavLink></li>
           )}
          
          </ul>
          <hr className='mx-5 my-5'/>
          
          </div>
          <div className=''>
            <div className='flex justify-center mb-8'>
          <h1 className='flex font-bold text-2xl items-center text-blue-500'><MdAccountBox />Account</h1></div>
          <div className=' flex justify-between ml-5 mr-1'>
            <ul className='text-white gap-5 font-bold text-l uppercase'>
            <li className='text-white font-medium bg-[#464444] rounded-3xl flex items-center px-4 py-4 hover:bg-lime-50 hover:text-black transition duration-300'>
           <Link className='flex gap-3' to="/login"> <RiLogoutBoxFill className='text-3xl'/>LOG-OUT</Link>
           </li>
          </ul>
        <button onClick={()=>setIsOpen(!isOpen)} className='text-lime-700 text-5xl block transition duration-300 active:scale-90 active:rotate-12 bg-white rounded-2xl'>{isOpen? <TbLayoutSidebarRightExpandFilled />
 : <TbLayoutSidebarRightCollapseFilled /> }</button>
        </div>
          </div>
          
          </div> : 
          
          <div className='flex flex-col justify-around bg-[#1f1f1f] min-w-[12vh]  max-w-[12vh] min-h-[100vh] '>
      
        <div className='flex flex-col items-center text-4xl font-bold'><img src={logo} width={55} />
        
        
        </div>
        <div className='bg-[#6d6c6c] mx-2 rounded-4xl pt-4 pb-4'>
        <ul className='text-[#42ff09] flex flex-col items-center gap-5 font-bold '> 
         
          {tabs.map(tab =>
            <li key = {tab.key}><NavLink to= {tab.path} className="font-medium px-2 py-2 flex gap-3 hover:bg-white hover:text-black transition duration-300 hover:scale-110 rounded-xs ">{tab.icon}</NavLink></li>
           )}
          </ul>
          </div>
          <div className='ml-5 items-center'>
        <button onClick={()=>setIsOpen(!isOpen)} className='text-lime-700 text-5xl block transition duration-300 active:scale-90 active:rotate-12 bg-white rounded-2xl'>{isOpen? <TbLayoutSidebarRightExpandFilled />
 : <TbLayoutSidebarRightCollapseFilled /> }</button>
        </div>
          </div>}</nav>

        
  )
}

export default Dashboardnavbar;