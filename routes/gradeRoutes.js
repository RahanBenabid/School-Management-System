import express from "express";
import { createGrade } from "./../controllers/gradeController.js";
const router = express.Router();

router.post("/", createGrade)

export default router;