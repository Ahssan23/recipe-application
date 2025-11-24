import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import recipeRoute from "./routes/recipe.js";
import getRecipe from "./routes/recipe.js";
import { getRecipeId , updateRecipe,deleteRecipe} from "./routes/getRecipe.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/recipe", recipeRoute)
app.use("/recipe" , getRecipe);
app.use("/recipe", getRecipeId);
app.use("/recipe",updateRecipe);
app.use("/recipe", deleteRecipe);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
