import Dashboardnavbar from './dashboardnavbar'
import { Outlet } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Dashboardlayout = () => {
  const [user, setUser] = useState("");
  const [feature, setFeature] = useState([]);
  const navigate = useNavigate();
const api = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});

useEffect(()=>{
  const checkauth = async() =>{
    try {
      const res = await api.get("/secret");
      if (res.data.message === "403"){
        navigate("/plans")
      }
      setUser(res.data.user);
      setFeature(Object.keys(res.data.featureList).filter(key => key !== "type" && res.data.featureList[key] === true));
    } catch (error) {
      navigate("/login")
    } 
    
  }
  checkauth();
}, [])
  return (
    <div className='flex'>
        <Dashboardnavbar feature={feature} />
        <div className='flex'>
         <Outlet />
        </div>
    </div>
  )
}

export default Dashboardlayout