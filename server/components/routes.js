import { Router } from "express";
import { authenticateUser, getPlans, newTrainer, newUser } from "./controller.js";
import passport from "passport";

const router = Router();


router.post("/signup", newUser);
router.post("/login", passport.authenticate("local"), (req, res) => {
    res.status(200).send("Login successful");
});
router.get("/secret", authenticateUser);
router.get("/api/plans", getPlans);
// Trainer routes

router.post("/trainer/signup", newTrainer);

export default router;
