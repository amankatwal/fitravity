import loginIcon from "../../public/Login Page.png";
import { MdOutlineEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

export const Login = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [details, setDetails] = useState({
    email : "",
    password : ""
  })
 const handleChange = (e)  =>{
setDetails({...details, [e.target.name]: e.target.value})
  }

  const changeStep = () =>{
    if (!details.email){
      alert("Please fill in your email")
    }
    else{
      setStep(2);
    }
  }

  const loginUser = async () =>{try {
    const res= await axios.post("http://localhost:3000/login", details, {withCredentials: true});
  if (res.status === 200){
    
  navigate("/dashboard");
  }
  else if (res.status !== 200){
    alert(res.status)
  }
  } catch (error) {
    alert(error.response?.data || "Login failed");
    console.error(error);
  }}
const api = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});
  useEffect(()=>{
  const checkauth = async() =>{
    try {
      const res = await api.get("/secret");
      navigate("/dashboard");
    } catch (error) {
      navigate("/login")
    } 
    
  }
  checkauth();
}, [])
  return (
    <div className="flex flex-wrap justify-around items-center bg-[#0D0D0D] min-h-screen">
      <div className="max-h-screen max-w-[80vh]">
        <img  src={loginIcon} alt="" />
      </div>
    <div className="flex flex-col w-full max-w-md gap-6 min-h-[70vh] bg-[#0D0D0D] rounded-md">
      <div className="flex pt-5 mx-auto">2
     <h1 className="font-bold text-6xl text-white">LOG - </h1>
      <h1 className="font-bold text-6xl text-lime-400"> IN</h1></div>
      
      <AnimatePresence mode="wait">
      {step === 1 &&
      <motion.div className="flex flex-col"
      key="step1"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.4 }}
    > 
    
      <div className="text-white mx-10 pt-8">
        
        <input type="email" placeholder="Email" name="email" value={details.email} onChange={handleChange} className="bg-amber-50 w-full h-9 p-7 text-black font-bold "/>
        
      </div>
      
        <button onClick= {changeStep} className="bg-lime-400 p-4 font-bold mx-10 my-4 hover:bg-lime-500 cursor-pointer duration-300 rounded-sm flex justify-evenly "><MdOutlineEmail className="size-7"/> CONTINUE WITH E-MAIL</button>
       
        </motion.div>}
        {step === 2 && 
        <motion.div className="flex flex-col"
      key="step1"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.4 }}
    > 
      <div className="text-white mx-10 pt-8">
        
        <input type="Password" placeholder="Password" name="password" value ={details.password} onChange={handleChange} className="bg-amber-50 w-full h-9 p-7 text-black font-bold "/>
        
      </div>
      
        <button onClick= {loginUser} className="bg-lime-400 p-4 font-bold mx-10 my-4 hover:bg-lime-500 cursor-pointer duration-300 rounded-sm flex justify-evenly "> LOG - IN</button>
        </motion.div>
        }
        </AnimatePresence>
        
        <div className="flex justify-between items-center p-7">
          <hr className="bg-amber-100 w-20"/><h3 className="text-amber-50">OTHER LOGIN OPTIONS</h3><hr className="bg-amber-100 w-20"/>
        </div>
        <div className="flex justify-evenly">
         
         <div className="border-1 rounded-md p-3 bg-amber-50 border-lime-400"><FaFacebookF className="w-10 h-10 transition-all duration-300 hover:scale-110"/></div>
         <div className="border-1 rounded-md p-3 border-lime-400"><FcGoogle className="w-10 h-10 transition-all duration-300 hover:scale-110"/></div>
         <div className="border-1 rounded-md p-3 bg-amber-50 border-lime-400"><FaApple className="w-10 h-10 transition-all duration-300 hover:scale-110"/></div>
        </div>
        
        <div className="bg-[#303030] flex justify-center p-7">
        <h3 className="text-amber-50">Don't have an account? </h3> <Link to="/Signup?" className="text-lime-400 underline-offset-auto ml-1">Sign up</Link>
        </div>
        
      </div>
      
    </div>
  )
}

export default Login;