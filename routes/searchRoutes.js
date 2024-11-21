import express from "express";
import { getGrades } from "./../controllers/search.js";

const router = express.Router();

router.get("/user/grades", getGrades);

export default router;