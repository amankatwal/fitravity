
// USERS QUERY
export const getUsers = "SELECT * FROM users WHERE user_id = $1"
export const userCheck = "SELECT * FROM users WHERE email = $1"

export const postUser = "INSERT INTO users (email, name, password) VALUES ($1, $2, $3)"
export const loginUser = "SELECT (email, password)"
export const plans = "SELECT * FROM plans ORDER BY price ASC "
export const trainerAssign = "UPDATE users SET trainer_id =$1 where email = $2";
// TRAINERS QUERY

export const postTrainer= "INSERT INTO trainer (name, email,phone_number, password ) values($1, $2, $3, $4)";
export const TrainerCheck = "SELECT * FROM trainer WHERE EMAIL =$1";
export const postPlan = "UPDATE users SET plan = $1 WHERE email = $2"
export const promotionCheck = "SELECT * FROM trainer where promotion = $1"
export const trainerTotal = "SELECT * FROM trainer ORDER BY id ASC";
export const userVerify = "SELECT 1 FROM users WHERE user_id = $1 AND  trainer_id = $2"
export const scheduleTraining = "INSERT INTO training_schedule(trainer_id, user_id, schedule_name, created_at) VALUES($1, $2, $3, NOW()) RETURNING schedule_id";
export const trainingDays = "INSERT INTO training_days(schedule_id, day_number) VALUES($1, $2) RETURNING day_id";
export const scheduleExercise = "INSERT INTO exercises(name, description, is_time_based, default_duration, default_sets, default_reps, rest_time) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING exercise_id";
export const exerciseDay = "INSERT INTO day_exercises(day_id, exercise_id, order_number) VALUES($1,$2,$3)";

//trianer Tracker

export const trainerTracker = "SELECT last_assigned_trainer_id FROM trainer_tracker WHERE id=1";
export const updateTracker = "UPDATE trainer_tracker SET last_assigned_trainer_id = $1 WHERE id =1";
export const getClients = "SELECT user_id, name, plan FROM users WHERE trainer_id = $1 AND plan IS NOT NULL";
// Plans table query

export const planTracker = "SELECT name,dashboard, blogspot_access, training_schedule, progress_tracking, chat_access, diet_instructions, training_videos FROM plans WHERE plan_id = $1"