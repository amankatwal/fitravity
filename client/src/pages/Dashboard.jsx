import React, { useEffect, useState } from 'react'
import Dashboardnavbar from '@/components/dashboardnavbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Dashboard =  () => {
  const [loading, setLoading] = useState(true);
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
      setFeature(res.data.featureList);
    } catch (error) {
      navigate("/login")
    } finally {
      setLoading(false);
    }
    
  }
  checkauth();
}, [])
  return (
<>
 {loading ? (<div className="flex justify-center items-center min-h-screen bg-black"><img src="/exercise.gif" /> </div>) : 
   ( <div>
      <Dashboardnavbar />
      <div className='bg-amber-500 min-h-[50vh] '>Hello {user.name?.split(' ')[0]}, Thanks for being {feature.type} user</div>
    </div>)}
    </>
  )
}

export default Dashboard;