import express from "express";
import { Recipe } from "../models/recipe.js";
<<<<<<< HEAD



const router = express.Router()



router.post("/api/addRecipe", async(req , res)=>{
    try{
        const {name, desc, ingredients, steps ,rating,category,difficulty,cookingTime,servings} = req.body;

        if (!name || !desc){
            return res.status(400).json({message:"Missing field"})
        }
        const add_recipe = new Recipe({name,desc,ingredients,steps,rating,category,difficulty,cookingTime,servings});

        await add_recipe.save()
        res.status(201).json({message:"Recipe added"})


        


    }
    catch(err){
        console.log("ERROR IN RECIPE....", err)
}
})



export default router;
=======
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/api/addRecipe", async (req, res) => {
  try {
    const Cookie = req.cookies.auth;

    if (!Cookie) return res.status(401).json({ message: "No auth cookie found" });

    const parsed = JSON.parse(Cookie); // { token, email }

    if (!parsed.token) return res.status(401).json({ message: "No token in cookie" });

    // Decode the JWT token
    const decoded = jwt.verify(parsed.token, process.env.JWT_SECRET);
    const username = decoded.role;
    console.log("DECODED", decoded); // id, role, email

    const {
      name,
      desc,
      ingredients,
      steps,
      rating,
      category,
      difficulty,
      cookingTime,
      servings
    } = req.body;

    if (!name || !desc) {
      return res.status(400).json({ message: "Missing field" });
    }

    const add_recipe = new Recipe({
    username,
      name,
      desc,
      ingredients,
      steps,
      rating,
      category,
      difficulty,
      cookingTime,
      servings,
      createdBy: decoded.id // optional: track which user added it
    });

    await add_recipe.save();
    res.status(201).json({ message: "Recipe added" });

  } catch (err) {
    console.log("ERROR IN RECIPE....", err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
>>>>>>> 1b1efe1 (initial commit)
