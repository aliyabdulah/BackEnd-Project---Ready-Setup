import { Router } from "express";
import { register, login } from "../controllers/authController";

const router = Router();

// POST /api/auth/register - User registration
router.post("/register", register);

// POST /api/auth/login - User login
router.post("/login", login);

export default router;