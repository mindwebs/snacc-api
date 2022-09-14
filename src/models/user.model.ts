import { genSaltSync, hashSync } from "bcryptjs";
import mongoose from "mongoose";
import { userInterface } from "../interfaces/user.interface";

const userSchema: mongoose.Schema<userInterface> = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
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

userSchema.pre<userInterface>("save", function (next) {
    if (!this.isModified("password") || !this.isNew) {
        next();
    } else this.isModified("password");

    if (this.isModified("password") && this.password) {
        const salt = genSaltSync(10);
        this.password = hashSync(this.password, salt);
    }
    next();
});

const User: mongoose.Model<userInterface> = mongoose.model("User", userSchema);

export default User;
