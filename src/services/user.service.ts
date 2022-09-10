import mongoose from "mongoose";
import { CreateUserInterface } from "../interfaces/user.interface";
import { UpdateUserInterface } from "../interfaces/user.interface";
import User from "../models/user.model";

export const _createUser = async (user_dto: CreateUserInterface) => {
    return await User.create(user_dto);
    
}

export const _fetchUser = async (user_id: mongoose.Types.ObjectId) => {
    return await User.findOne(user_id);
    
}
export const _updateUser = async (id: mongoose.Types.ObjectId,dto: UpdateUserInterface) => {
    return await User.findOneAndUpdate({ _id: id }, dto);
};


export const _deleteUser = async (user_id: mongoose.Types.ObjectId) => {
    return await User.deleteOne(user_id);
    
}