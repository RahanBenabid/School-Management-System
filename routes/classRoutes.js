import express from "express";
import { createClass, getClasses } from "./../controllers/classController.js";

const router = express.Router();

router.post("/", createClass);
router.get("/", getClasses);

export default router;
