import { Router } from "express";
import { authenticateTrainer, authenticateUser, getPlans, newTrainer, newUser } from "./controller.js";
import passport from "passport";

const router = Router();


router.post("/signup", newUser);
router.post("/login", passport.authenticate("local-user"), (req, res) => {
    res.status(200).send("Login successful");
});
router.get("/secret", authenticateUser);
router.get("/api/plans", getPlans);
// Trainer routes

router.post("/trainer/signup", newTrainer);
router.post("/trainer/login", passport.authenticate("local-trainer"), (req,res) =>{
    res.status(200).send("Login Successfull");
})
router.get("/trainer/secret", authenticateTrainer);

export default router;
