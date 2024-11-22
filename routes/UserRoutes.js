import express from "express";
import { createUser, getUsers } from "../controllers/userController.js";
import { authenticateToken } from "./../middleware/tokenMiddleware.js"

const router = express.Router();

// not protected
router.post("/", createUser);

// protected
router.get("/", authenticateToken, getUsers);

export default router;
