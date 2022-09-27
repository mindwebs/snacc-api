import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import * as mealService from "../services/meal.service";


export const MealCountIncrement = async (
    req: Request,
    res: Response
) => {
    try {
        const user_id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.body.user_id);
        const user_dto: mongoose.Types.Decimal128 =  req.body.meal_count ;
        const user = await mealService._updateUser(user_id,user_dto);
        res.status(200).json({
            message: "Meal count Updated successfully",
            user,
        });
    } catch (err: unknown) {
        res.status(500).json({
            message: "Internal Server Error",
            error: err,
        });
    }
};

export const MealCounter = async (
    req: Request,
    res: Response
) => {
    try{
        const meal_count_no=await mealService._mealcounter();
        res.status(200).json({
            message:"Meal Counted Successfully",
            meal_count_no,
        })
    } catch(err:unknown){
        res.status(500).json({
            message: "Internal Server Error",
            error: err,
        })

    }
};