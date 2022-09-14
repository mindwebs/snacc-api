import mongoose from "mongoose";
import { userInterface } from "../interfaces/user.interface";

const userSchema: mongoose.Schema<userInterface> = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    room: {
        type: Number,
        required: true,
    },
    whatsapp: {
        type: String,
        required: true,
    },
    collegeId: {
        type: Number,
        required: true,
    },
});

const User: mongoose.Model<userInterface> = mongoose.model("User", userSchema);

export default User;
