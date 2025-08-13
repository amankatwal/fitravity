import React, { useEffect, useState } from 'react'
import axios from "axios"; 
import {useParams} from "react-router-dom";
const Client = () => {
const {id} = useParams();
const [client, setClient] = useState("")

useEffect(() =>{
  const fetchData = async() =>{
    try {
      const res = await axios.get(`http://localhost:3000/trainer/client/${id}`, {withCredentials: true});
setClient(res.data)
    } catch (err) {
      console.error(err)
    }
  };
  fetchData();
}, [id])

  return (
    <div>Client name is {client.name}</div>
  )
}

export default Client