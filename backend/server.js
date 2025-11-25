import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import recipeRoute from "./routes/recipe.js";
<<<<<<< HEAD
import getRecipe from "./routes/recipe.js";
import { getRecipeId , updateRecipe,deleteRecipe} from "./routes/getRecipe.js";

=======
import cookieParser from "cookie-parser";
import {getRecipe, getRecipeId, updateRecipe, deleteRecipe } from "./routes/getRecipe.js";
>>>>>>> 1b1efe1 (initial commit)

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "http://localhost:5173",  // your frontend origin
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());  
// Routes
app.use("/auth", authRoute);
app.use("/user", userRoute);
<<<<<<< HEAD
app.use("/recipe", recipeRoute)
app.use("/recipe" , getRecipe);
app.use("/recipe", getRecipeId);
app.use("/recipe",updateRecipe);
app.use("/recipe", deleteRecipe);
=======
app.use("/recipe", recipeRoute);
app.use("/recipe", getRecipe);

// Routes for specific recipe actions
app.get("/recipe/:id", getRecipeId);
app.put("/recipe/:id", updateRecipe);
app.delete("/recipe/:id", deleteRecipe);
>>>>>>> 1b1efe1 (initial commit)

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
