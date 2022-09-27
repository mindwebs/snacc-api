import mongoose from "mongoose";
import { UpdateUserInterface } from "../interfaces/user.interface";
import { UpdateItemInterface } from "../interfaces/item.interface";
import User from "../models/user.model";
import Item from "../models/item.model";



export const _updateUser = async (
    id: mongoose.Types.ObjectId,
    meal_count: mongoose.Types.Decimal128
) => {
    return await User.findOneAndUpdate({ _id: id }, meal_count);
};
export const _mealcounter= async()=>{
    return await User.find({ quantity: { $gt: 0 } }).count();
} ;

