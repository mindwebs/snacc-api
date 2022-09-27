import mongoose from "mongoose";
import { CreateUserInterface } from "../interfaces/user.interface";
import { UpdateUserInterface } from "../interfaces/user.interface";
import User from "../models/user.model";

export const _createUser = async (user_dto: CreateUserInterface) => {
    return await User.create(user_dto);
};

export const _fetchUser = async (user_id: mongoose.Types.ObjectId) => {
    return await User.findOne({ _id: user_id });
};

export const _fetchUserByEmail = async (email: string) => {
    return await User.findOne({ email });
};

export const _updateUser = async (
    id: mongoose.Types.ObjectId,
    dto: UpdateUserInterface
) => {
    return await User.findOneAndUpdate({ _id: id }, dto);
};

export const _deleteUser = async (user_id: mongoose.Types.ObjectId) => {
    return await User.deleteOne(user_id);
};
export const _fetchAllUser = async () => {
    return await User.find({});
};

export const _changePassword= async(email: mongoose.Schema.Types.String, password: mongoose.Schema.Types.String)=>{
    return await User.findOneAndUpdate({email:email},password);
};

export const _resetPassword= async(id: mongoose.Types.ObjectId, password: mongoose.Schema.Types.String)=>{
    return await User.findOneAndUpdate({_id: id},password);
};