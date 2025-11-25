import express from "express";
import mongoose from "mongoose";
import { Recipe } from "../models/recipe.js";



const router = express.Router();


<<<<<<< HEAD
const getRecipe = router.get("/api/GetRecipe" ,async (req,res)=>{
=======
const getRecipe = router.get("/api/getRecipe" ,async (req,res)=>{
>>>>>>> 1b1efe1 (initial commit)
    try{

        const recipe = await Recipe.find();
        return res.json({success:true, data:recipe});
    }catch(err){
        console.log("ERROR OCCURED IN RETRIEVING RECIPIES.....", err);
        return res.status(500).json({success:false, message:"server error"});

    }
});


<<<<<<< HEAD
const getRecipeId = router.get("/api/GetrecipeId", async (req,res)=>{
=======
const getRecipeId = router.get("/api/getRecipeId", async (req,res)=>{
>>>>>>> 1b1efe1 (initial commit)
    const id = req.query.id;
    const findRecipe = await Recipe.findById(id);
    return res.json({success:true, data:findRecipe})


})

const deleteRecipe = router.delete("/api/deleteRecipe/:id" , async ( req,res)=>{
    const {id} = req.params;
    const deleteRecipe = await Recipe.findByIdAndDelete(id);

    if (!deleteRecipe) return res.json({success:false, message:"recipe not found"})
    
    return res.json({success:true, message:"recipe deleted"});

})


const updateRecipe = router.put("/api/updateRecipe/:id", async (req,res)=>{
    try{
        const {id} =req.params;
        const updateData = req.body;
<<<<<<< HEAD

        const updateRecipe = await Recipe.findByIdAndUpdate(id, updateData, {new:true})
        if (!updateRecipe) return res.status(404).json({ success: false, message: "Recipe not found" });
        res.json({ success: true, data: updatedRecipe });
=======
        

        const updateRecipe = await Recipe.findByIdAndUpdate(id, updateData, {new:true})
        if (!updateRecipe) return res.status(404).json({ success: false, message: "Recipe not found" });
        res.json({ success: true, data: updateRecipe });
>>>>>>> 1b1efe1 (initial commit)
    } catch (err) {
        console.error("Error updating recipe:", err);
        res.status(500).json({ success: false, message: "Server error" });
    }



})

    

export {getRecipe , getRecipeId,deleteRecipe,updateRecipe};