import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const TrainerDashboard = () => {
  const navigate = useNavigate();
  const [trainer, setTrainer] = useState("");
  const api = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});

useEffect(()=>{
  const checkauth = async() =>{
    try {
      const res = await api.get("/trainer/secret");
      setTrainer(res.data.trainer);
      
      } catch (err) {
      navigate("/trainer/login")
    } 
    
  }
  checkauth();
}, [])
  return (

    <div>
      Hello {trainer.name}
    </div>
    
  );
};

export default TrainerDashboard;