import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Plans = () => {
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);
  const [planPurchase, setPlanPurchased] = useState();
  const handleClick = async(planId) => {
    try {
       setPlanPurchased(planId);
    const res = await axios.post("http://localhost:3000/plans",{plan : planId}, {withCredentials : true });
     alert("plan Purchased");
    navigate("/dashboard")
    } catch (err) {
      console.error(err);
    }
   
  } 

  useEffect(()=>{
    const loadPlan = async() =>{
          const result = await axios.get("http://localhost:3000/api/plans");
      setPlans(result.data);
      }
    loadPlan();
  }, [])
  return (
    <div className='min-h-screen bg-[#353535] flex justify-center flex-col'>
      <h1 className='text-5xl font-bold text-lime-400 text-center mb-20'>CHOSE YOUR PLAN</h1>
      <div className='flex flex-wrap justify-center gap-8 '>
         {plans.map((plan) =>( 
           <div className=' pt-7 min-w-[50vh] max-w-[80vh] bg-[#1e1e1e] rounded-md max-h-[60vh] mb-10' key = {plan.plan_id}>
            <h1 className='text-center mb-5 font-bold text-2xl text-amber-50'>{plan.name}</h1>
           <p className='text-center text-3xl font-semibold mb-4 text-lime-400 '>₹{plan.price}/mo</p>
           <div className='bg-[#2b2b2b] w-full rounded-3xl  font-bold text-center pt-7 min-h-[50vh]'>
            {plan.blogspot_access === true || plan.blogspot_access === "true" ? (<p className='text-amber-50 mb-6'>BLOGSPOT ACCESS</p>): (<p className='text-[#8a8f98] mb-7 line-through font-light'>BLOGSPOT ACCESS</p>)}
            {plan.training_schedule === true || plan.training_schedule === "true" ? (<p className='text-amber-50 mb-7'>TRAINING SNIPPETS</p>): (<p className='text-[#8a8f98] mb-7 line-through font-light'>TRAINING SNIPPETS</p>)}
            {plan.progress_tracking === true || plan.progress_tracking === "true" ? (<p className='text-amber-50 mb-7'>PROGRESS TIMELINE</p>): (<p className='text-[#8a8f98] mb-7 line-through font-light'>PROGRESS TIMELINE</p>)}
            {plan.training_videos === true || plan.training_videos === "true" ? (<p className='text-amber-50 mb-7'>TRAINING VIDEOS</p>): (<p className='text-[#8a8f98] mb-7 line-through font-light'>TRAINING VIDEOS</p>)}
            {plan.chat_access === true || plan.chat_access === "true" ? (<p className='text-amber-50 mb-7'>PERSONALISED TRAINING WITH CHAT ACCESS</p>): (<p className='text-[#8a8f98] mb-7 line-through font-light'>PERSONALISED TRAINING WITH CHAT ACCESS</p>)}
            {plan.diet_instructions === true || plan.diet_instructions === "true" ? (<p className='text-amber-50 mb-7'>CUSTOMIZED DIET WITH CHAT ACCESS</p>): (<p className='text-[#8a8f98] mb-7 line-through font-light'>CUSTOMIZED DIET WITH CHAT ACCESS</p>)}
           <button onClick ={() =>handleClick(plan.plan_id)} className="cursor-pointer rounded-xs text-xl text-[#1e1e1e] bg-lime-400 px-4 py-1 font-semibold hover:text-black-400 hover:bg-lime-500 hover:text-black transition duration-300 hover:scale-103 hover:scale-3d">
            GET STARTED</button>
           </div>
           
           </div>
           )
         )}
        
      </div>
    </div>
  )
}

export default Plans