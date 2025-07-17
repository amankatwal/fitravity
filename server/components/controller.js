
import bcrypt from "bcrypt";
import pool from "./db.js";
import { plans, postTrainer, postUser, TrainerCheck, userCheck } from "./query.js";
import passport from "passport";
import { Strategy } from "passport-local";
// SIGNUP AND LOGIN CONTROLLES FOR USERS
export const newUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const checkUser = await pool.query(userCheck, [email]);
        if (checkUser.rows.length > 0) {
            return res.status(400).send("USER ALREADY EXISTS");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const makeUser = await pool.query(postUser, [email, name, hashedPassword]);
        return res.status(200).send("User Signed up")
    } catch (error) {
        res.status(500).send("server error");
    }
}
export const authenticateUser = (req, res) => {
    if (req.isAuthenticated()) {
        res.status(200).json({ user: req.user });
    } else {
        res.status(401).send("not logged in");
    }
}
passport.use(new Strategy({ usernameField: "email", passwordField: "password" }, async function verify(email, password, cb) {
    try {

        const checkUser = await pool.query(userCheck, [email]);

        if (checkUser.rows.length === 0) {
            return cb(null, false)
        }
        const user = checkUser.rows[0];
        const hashedPassword = user.password;
        const match = await bcrypt.compare(password, hashedPassword);
        if (!match) {
            return cb(null, false);
        }
        return cb(null, user);
    } catch (error) {
        cb(error);
    }
}));

passport.serializeUser((user, cb) => {
    cb(null, user);
});
passport.deserializeUser((user, cb) => {
    cb(null, user);
});
// PLANS CONTROLLER.
export const getPlans = async (req,res) =>{
    const result = await pool.query(plans);
    try {
        res.json(result.rows);
    } catch (err) {
        console.error(err);
    }
};

// TRAINER CONTROLLER.

export const newTrainer = async (req,res) =>{
    const {name, email, phone_number, password } = req.body;
    try {
        
    
    const checkTrainer = await pool.query(TrainerCheck, [email]);
    if (checkTrainer.rows.length > 0 ){
        return res.status(409).send("trainer already exist");
    } 
    const hashedPassword= await bcrypt.hash(password, 10);
    const makeTrainer = await pool.query(postTrainer, [name, email, phone_number, hashedPassword]);
    res.status(200).send("trainer account created")} catch (err) {
        console.error(err);
    }
}