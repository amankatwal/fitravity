import pool from "./db.js";
import { postPlan } from "./query.js";



export const purchasePlan = async(req, res) =>{
    try {
         const user_email = req.user.email;
    const {plan} = req.body;

    if (!user_email || !plan){
       return res.status(400).send("No user or plan selected")
    }
    const updatePlan = await pool.query(postPlan, [plan, user_email]);
    res.status(200).send("plan Purchased");
    } catch (err) {
        console.error(err);
    }
   
}