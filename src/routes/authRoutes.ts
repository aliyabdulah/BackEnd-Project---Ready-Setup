import { Router } from "express";
import multer from "multer";
import { register, login } from "../controllers/authController";

const router = Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".jpg");
  },
});

const upload = multer({ storage: storage });

// POST /api/auth/register - User registration with image
router.post("/register", upload.single("image"), register);

// POST /api/auth/login - User login
router.post("/login", login);

export default router;