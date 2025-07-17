import React, { useState } from 'react'
import SignupIcon from '../../public/Signup.png'
import { MdOutlineEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Trainersignup = () => {
  const navigate = useNavigate();
  const [step, setstep] = useState(1);
const [formData, setFormData] = useState({
  name : '',
  email : '', 
  phone_number: '',
  password : '',
  confirmPassword : ''
})

const nextStep = () => {
 if (!formData.name || !formData.email){
  alert('Please Fill All The Details..');
  return;
 }
 setstep(2);
}

const handleChange = (e) => {
setFormData({...formData, [e.target.name] : e.target.value});
}

const handleClick = async(e) =>{
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
  alert("Passwords do not match!");
  return;
}try {
  await axios.post("http://localhost:3000/trainer/signup", formData);
  setstep(1);
  setFormData("");
  navigate("/login")
} catch (err) {
   console.error(err.response?.data || err.message);
}
  
}
  return (
    <div className="flex flex-wrap justify-around items-center bg-[#0D0D0D] min-h-screen">
        <div>
        <img className="w-full h-auto max-w-[70vh]" src={SignupIcon} alt="" />
      </div>
    <div className="flex flex-col max-w-full gap-6 min-h-[70vh] bg-[#0D0D0D] rounded-md">
      <div className="flex pt-5 mx-auto">
     <h1 className="font-bold text-6xl text-white">SIGN -</h1>
      <h1 className="font-bold text-6xl text-lime-400 ml-1"> UP</h1></div>
      <AnimatePresence mode="wait">
      {step === 1 && (
        <motion.div className="flex flex-col w-full"
      key="step1"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.4 }}
    > 
      <div className="text-white mx-10 pt-8 flex flex-col">



        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="FULL NAME" className="bg-amber-50 h-9 p-7 text-black font-bold  mb-4"/>
        
        <input type="email" name= "email" value={formData.email} onChange={handleChange} placeholder="EMAIL" className="bg-amber-50 h-9 p-7 text-black font-bold mb-4"/>

        <input type="text" name= "phone_number" value={formData.phone_number} onChange={handleChange} placeholder="PHONE NUMBER" className="bg-amber-50 h-9 p-7 text-black font-bold "/>
        
      </div>
      
        <button onClick={nextStep} className="bg-lime-400 p-4 font-bold mx-auto w-max my-4 hover:bg-lime-500 cursor-pointer duration-300 rounded-sm flex justify-evenly"><MdOutlineEmail className="size-7"/> CONTINUE WITH E-MAIL</button>
      </motion.div>)}
      
{step === 2 && (
  <motion.div className="flex flex-col"
      key="step2"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
    >
      <div className="text-white mx-10 pt-8 flex flex-col">

<input type="password" name= "password" value={formData.password} onChange={handleChange} placeholder="SET PASSWORD" className="bg-amber-50 h-9 p-7 text-black font-bold  mb-4"/>
        
        <input type="password" name= "confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="CONFIRM PASSWORD" className="bg-amber-50 h-9 p-7 text-black font-bold "/>
        
      </div>
      
        <button className="bg-lime-400 p-4 font-bold mx-auto my-4 hover:bg-lime-500 cursor-pointer duration-300 rounded-sm flex justify-evenly w-max" onClick={handleClick}>COMPLETE SIGN-UP</button>
      </motion.div>)}
      </AnimatePresence>

 <div className="flex justify-between items-center p-7">
          <hr className="bg-amber-100 w-20"/><h3 className="text-amber-50">OTHER SIGN-UP OPTIONS</h3><hr className="bg-amber-100 w-20"/>
        </div>
        <div className="flex justify-evenly">
         
         <div className="border-3 rounded-full p-3 bg-amber-50 cursor-pointer"><FaFacebookF className="w-10 h-10"/></div>
         <div className="border-3 rounded-full p-3"><FcGoogle className="w-10 h-10"/></div>
         
        </div>
        
        <div className="bg-[#303030] flex justify-center p-7">
        <h3 className="text-amber-50">Already have an account? </h3> <Link to="/Login?" className="text-lime-400 underline-offset-auto ml-1">Log-in</Link>
        </div>
        
      </div>
    </div>
  )
}
export default Trainersignup;