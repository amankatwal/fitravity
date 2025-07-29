
// USERS QUERY
export const getUsers = "SELECT * FROM users"
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
export const trainerTotal = "SELECT * FROM trainer ORDER BY id ASC"

//trianer Tracker

export const trainerTracker = "SELECT last_assigned_trainer_id FROM trainer_tracker WHERE id=1";
export const updateTracker = "UPDATE trainer_tracker SET last_assigned_trainer_id = $1 WHERE id =1";
const test = "UPDATE users SET plan = null";
// Plans table query

export const planTracker = "SELECT name, blogspot_access, training_schedule, progress_tracking, chat_access, diet_instructions, training_videos FROM plans WHERE plan_id = $1"