import pool from "./db.js";
import { exerciseDay, getUsers, scheduleExercise, scheduleTraining, trainingDays, userVerify } from "./query.js";
export const userDetails = async(req, res) =>{
     if (req.isAuthenticated() && req.user.role === "trainer"){
    const {id} = req.params;
    const userdetails = await pool.query(getUsers, [id]);
    res.status(200).json(userdetails.rows[0]);
}
else res.status(401).send("trainer is not authorized")};

export const postSchedule =  async (req,res) =>{
       const trainer_id = req.user.id;
    if (req.user.role !== "trainer"){
        res.status(401).json({message : "Unauthorized user"});
        }
        const user_id= parseInt(req.params.id);
        const {schedule, days} = req.body;
    try {
     
        const verify = await pool.query(userVerify, [user_id, trainer_id]);
        if (verify.rowCount === 0){
            res.status(403).json({message: "User not assigned to the trainer"});
        }
        await pool.query("BEGIN");
        const scheduleRes = await pool.query(scheduleTraining, [trainer_id, user_id, schedule]);
        const scheduleId = scheduleRes.rows[0].schedule_id

        for (const day of days){
            const dayRes = await pool.query(trainingDays, [scheduleId, day.day_number]);
            const dayId = dayRes.rows[0].day_id;
            let order = 1;
            for (const ex of day.exercises){
                const exerciseRes = await pool.query(scheduleExercise, [ex.name, ex.description, ex.is_time_based, ex.default_duration, ex.sets, ex.reps, ex.rest]);
                const exercise = exerciseRes.rows[0].exercise_id;

                await pool.query(exerciseDay, [dayId, exercise, order++]);
            }
        }
         res.status(201).json({ message: "Schedule created", schedule_id: scheduleId });
        await pool.query("COMMIT");
    } catch (err) {
        await pool.query('ROLLBACK');
        console.error(err)
        res.status(500).json({message : "Not able to schedule"})
    }
    
}
