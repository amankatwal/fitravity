import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { NavLink, useNavigate } from 'react-router-dom';

const TrainerDashboard = () => {
  const navigate = useNavigate();
  const [trainer, setTrainer] = useState("");
  const [clients, setClient]= useState([""]);
  const api = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});

useEffect(()=>{
  const checkauth = async() =>{
    try {
      const res = await api.get("/trainer/secret");
      setTrainer(res.data.trainer);
      setClient(res.data.clients)
      } catch (err) {
      navigate("/trainer/login")
    } 
    
  }
  checkauth();
}, [])
  return (

    <div>
      Hello {trainer.name}
      <ul>
       {clients.map(client =>
        <li key = {client.user_id} ><NavLink to ={`/trainer/client/${client.user_id}`}>{client.name}</NavLink></li> 
       )}
      </ul>
    </div>
    
  );
};

export default TrainerDashboard;