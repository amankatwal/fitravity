import pool from "./db.js";
import { postPlan, promotionCheck, trainerAssign, trainerTotal, trainerTracker, updateTracker, userCheck } from "./query.js";



export const purchasePlan = async(req, res, next) =>{
    try {
         const user_email = req.user.email;
    const {plan} = req.body;

    if (!user_email || !plan){
       return res.status(400).send("No user or plan selected")
    }
    const updatePlan = await pool.query(postPlan, [plan, user_email]);
    res.status(200).send("plan Purchased");
     const email = req.user.email;
    const {promotion} = req.body;
    const userRes = await pool.query(userCheck, [email]);
       

    if(userRes.rows[0].trainer_id) {
        if (userRes.rows.length > 0 && userRes.rows[0].trainer_id){
         userRes.status.send("trainer Already assigned");
    }}
   let trainer_id;
   if (promotion){
    const result = await pool.query(promotionCheck, [promotion]);
    if (result.rows.length > 0){
      trainer_id = result.rows[0].id;
    }
   }
   if(!trainer_id){
    const lastTrainer = await pool.query(trainerTracker);
    let lastTrainerID = lastTrainer.rows[0].last_assigned_trainer_id;
    const totalTrainer = await pool.query(trainerTotal);
    const total = totalTrainer.rows.length;

    let newTrainer = (lastTrainerID +1) % total;
     trainer_id = totalTrainer.rows[newTrainer].id;
    await pool.query(updateTracker, [newTrainer]);

   }

   await pool.query(trainerAssign, [trainer_id, email]);
    } catch (err) {
        console.error(err);
    }
   
}
