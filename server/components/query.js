
// USERS QUERY
export const getUsers = "SELECT * FROM users"
export const userCheck = "SELECT * FROM users WHERE email = $1"
export const postUser = "INSERT INTO users (email, name, password) VALUES ($1, $2, $3)"
export const loginUser = "SELECT (email, password)"
export const plans = "SELECT * FROM plans ORDER BY price ASC "
// TRAINERS QUERY

export const postTrainer= "INSERT INTO trainer (name, email,phone_number, password ) values($1, $2, $3, $4)";
export const TrainerCheck = "SELECT * FROM trainer WHERE EMAIL =$1";
export const postPlan = "UPDATE users SET plan = $1 WHERE email = $2"

