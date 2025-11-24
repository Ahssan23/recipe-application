import express from "express";
import { Recipe } from "../models/recipe.js";



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