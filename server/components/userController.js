import pool from "./db.js";
import { postPlan } from "./query.js";

export const purchasePlan = async(req, res) =>{
    try {
         const user_id = req.user.user_id;
    const {plan} = req.body;

    if (user_id === null || plan === null){
        res.status(500).send("No user or plan selected")
    }
    const updatePlan = await pool.query(postPlan, [plan, user_id]);
    res.status(200).send("plan Purchased");
    } catch (err) {
        console.error(err);
    }
   
}