import { Router } from "express";
import { authenticateTrainer, authenticateUser, getPlans, newTrainer, newUser } from "./controller.js";
import passport from "passport";
import {  purchasePlan } from "./userController.js";
import { postSchedule, userDetails } from "./trainercomponent.js";


const router = Router();


router.post("/signup", newUser);
router.post("/login", passport.authenticate("local-user"), (req, res) => {
    res.status(200).send("Login successful");
});
router.get("/secret", authenticateUser);
router.get("/api/plans", getPlans);
router.post("/plans", purchasePlan);
// Trainer routes
router.get("/trainer/client/:id", userDetails);
router.post("/trainer/signup", newTrainer);
router.post("/trainer/login", passport.authenticate("local-trainer"), (req,res) =>{
    res.status(200).send("Login Successfull");
})
router.get("/trainer/secret", authenticateTrainer);
router.post("/trainer/client/schedule/:id", postSchedule)

export default router;
