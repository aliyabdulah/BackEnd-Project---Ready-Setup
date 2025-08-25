import express from "express";

const app = express();
import authRoutes from "./routes/authRoutes"; // Add this line


app.use(express.json());

app.use("/api/auth", authRoutes);

// Future route mounting examples:
// app.use("/api/users", userRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/authors", authorRoutes);
// app.use("/api/categories", categoryRoutes);


export default app;
