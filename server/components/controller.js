
import bcrypt from "bcrypt";
import pool from "./db.js";
import { plans, planTracker, postTrainer, postUser, TrainerCheck, userCheck } from "./query.js";
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
export const authenticateUser = async(req, res) => {
    if (req.isAuthenticated() && req.user.plan !== null && req.user.role === "user") {
         const features = await pool.query(planTracker, [req.user.plan]);
         const row = features.rows[0]

         const featureList = {
            type : row.name, 
        blogspot: row.blogspot_access,
        training_snippets: row.training_schedule,
        progress_timeline: row.progress_tracking,
        videos: row.training_videos,
        chat: row.chat_access,
        diet: row.diet_instructions,
      };

        res.status(200).json({ user: req.user, featureList, message: "200" });
    } else if(req.isAuthenticated() && req.user.plan === null && req.user.role === "user") {
        res.status(200).json({user: req.user, message: "403"});
    }else {
        res.status(401).send("User not logged in");
    }
}
passport.use('local-user',new Strategy({ usernameField: "email", passwordField: "password" }, async function verify(email, password, cb) {
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
        return cb(null, {...user, role:'user'} );
    } catch (error) {
        cb(error);
    }
}));

passport.serializeUser((user, cb) => {
    cb(null, {email: user.email, role: user.role });
});
passport.deserializeUser(async(data, cb) => {
    if (data.role === 'user'){
        const res = await pool.query(userCheck, [data.email]);
       return cb(null, {...res.rows[0], role: "user"})
    }else if (data.role === 'trainer'){
        const res = await pool.query(TrainerCheck, [data.email]);
       return cb(null, {...res.rows[0], role: "trainer"});
    }
});
// PLANS CONTROLLER.
export const getPlans = async (req, res) => {
    const result = await pool.query(plans);
    try {
        res.json(result.rows);
    } catch (err) {
        console.error(err);
    }
};

// TRAINER CONTROLLER.

export const newTrainer = async (req, res) => {
    const { name, email, phone_number, password } = req.body;
    try {


        const checkTrainer = await pool.query(TrainerCheck, [email]);
        if (checkTrainer.rows.length > 0) {
            return res.status(409).send("trainer already exist");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const makeTrainer = await pool.query(postTrainer, [name, email, phone_number, hashedPassword]);
        res.status(200).send("trainer account created")
    } catch (err) {
        console.error(err);
    }
}

export const authenticateTrainer = (req, res) => {
    if (req.isAuthenticated() && req.user.role === "trainer") {
        res.status(200).json({ trainer: req.user });
    } else {
        res.status(401).send("Trainer unauthorized");
    }
}

passport.use('local-trainer', new Strategy({ usernameField: "email", passwordField: "password" }, async function verify(email, password, cb) {
    try {
        const checkTrainer = await pool.query(TrainerCheck, [email]);

        if (checkTrainer.rows.length === 0) {
          return  cb(null, false);
        }
        const trainer = checkTrainer.rows[0];
        const hashedPassword = trainer.password;

        const match = await bcrypt.compare(password, hashedPassword);

        if (!match) {
          return  cb(null, false);
        } else {
    return cb(null, {...trainer, role : 'trainer'})
        }
    
    } catch (err) {
  return cb(err);
    }

}));