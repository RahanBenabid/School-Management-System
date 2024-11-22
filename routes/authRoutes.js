import express from "express";
import { registerUser, signInUser } from "./../controllers/authController.js";

const router = express.Router();

router.post("/sign-up", registerUser);
router.post("/sign-in", signInUser);

export default router;