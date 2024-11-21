import express from "express";
import { createUser, getUsers } from "../controllers/userController.js";
import { authenticateToken } from "./../middleware/authentication.js"

const router = express.Router();

router.post("/", createUser);
router.get("/", authenticateToken, getUsers);

export default router;
