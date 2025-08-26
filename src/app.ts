import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
import authRoutes from "./routes/authRoutes";

// Middleware - Order matters!
app.use(cors()); // Enable CORS for all routes
app.use(morgan("dev")); // Log HTTP requests for debugging
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use("/api/auth", authRoutes);

export default app;