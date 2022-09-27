import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { genSaltSync, hashSync } from "bcryptjs";
import { CreateUserInterface, JWTPayload } from "../interfaces/user.interface";
import { UpdateUserInterface } from "../interfaces/user.interface";
import * as userService from "../services/user.service";

export const Register = async (
    req: Request,
    res: Response
) => {
    try {
        const user_dto: CreateUserInterface = { ...req.body };
        const existingUser = await userService._fetchUserByEmail(req.body.email);
        if (existingUser) {
            res.status(400).json({
                message: "Email already exists",
            });
        }
        const user = await userService._createUser(user_dto);
        res.status(200).json({
            message: "User created successfully",
            user,
        });
    } catch (err: unknown) {
        res.status(500).json({
            message: "Internal Server Error",
            error: err,
        });
    }
};

export const FetchProfile = async (
    req: Request,
    res: Response
) => {
    try {
        const user_id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(
            req.body.user._id
        );
        const user = await userService._fetchUser(user_id);
        res.status(200).json({
            message: "Profile Fetched successfully",
            user,
        });
    } catch (err: unknown) {
        res.status(500).json({
            message: "Internal Server Error",
            error: err,
        });
    }
};

export const UpdateProfile = async (
    req: Request,
    res: Response
) => {
    try {
        const user_id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(
            req.body.user._id
        );
        const user_dto: UpdateUserInterface = { ...req.body };
        const user = await userService._updateUser(user_id, user_dto);
        res.status(200).json({
            message: "Update success",
            user,
        });
    } catch (err: unknown) {
        res.status(500).json({
            message: "Internal Server Error",
            error: err,
        });
    }
};

export const Delete = async (
    req: Request,
    res: Response
) => {
    try {
        const user_id :mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.id);
        
        const user = await userService._deleteUser(user_id);
        res.status(200).json({
            message: "delete success",
            user,
        });
    } catch (err: unknown) {
        res.status(500).json({
            message: "Internal Server Error",
            error: err,
        });
    }
};

export const FetchAll = async (
    req: Request,
    res: Response
) => {
    try {
        const user = await userService._fetchAllUser();
        res.status(200).json({
            message: "delete success",
            user,
        });
    } catch (err: unknown) {
        res.status(500).json({
            message: "Internal Server Error",
            error: err,
        });
    }
};

export const Login = async (
    req: Request,
    res: Response
) => {
    try {
        const { email, password } = req.body;

        // fetch user by email
        const user = await userService._fetchUserByEmail(email);

        if (!user) return res.status(400).json({ "message": "Invalid email"});

        // compare passwords
        const passwordMatched = await bcrypt.compare(password, user.password);

        // if password is incorrect
        if (!passwordMatched) return res.status(400).json({ "message": "Invalid password"});

        // generate and return jwt token

        // step 1 - create payload data and token creation options
        const payload: JWTPayload = { ...user };
        const options = { expiresIn: '100d' };

        // step 2 - use jwt.sign() to create token. It takes three paramters - payload, jwt secret, token creation options
        const authToken = jwt.sign(payload, String(process.env.JWT_SECRET), options);

        // step 3 - return token to frontend
        return res.status(200).json({ "message": "User logged in successfully", authToken });


    } catch (err: unknown) {
        res.status(500).json({
            message: "Internal Server Error",
            error: err,
        });
    }
};

export const ChangePassword = async (
    req: Request,
    res: Response
) => {
    try {

        const { email, old_password, password } = req.body;
        const user = await userService._fetchUserByEmail(email);
        if (!user) return res.status(400).json({ "message": "Invalid email"})
        const passwordMatched = await bcrypt.compare(old_password, user.password);
        if (!passwordMatched) return res.status(400).json({ "message": "Invalid password"});
        const salt = genSaltSync(10);
        const new_password2 : mongoose.Schema.Types.String = new mongoose.Schema.Types.String(hashSync(password, salt));
        const user1 = await userService._changePassword(email, new_password2);
        res.status(200).json({
            message: "Update success",
            user1,
        });
    } catch (err: unknown) {
        res.status(500).json({
            message: "Internal Server Error",
            error: err,
        });
    }
};

export const ForgotPassword = async (
    req: Request,
    res: Response
) => {
    try {
        const { email } = req.body;
        const user = await userService._fetchUserByEmail(email);
        if (!user) return res.status(400).json({ "message": "Invalid email"})
        // nodemailer code goes here

    } catch (err: unknown) {
        res.status(500).json({
            message: "Internal Server Error",
            error: err,
        });
    }
};

export const ResetPassword = async (
    req: Request,
    res: Response
) => {
    try {
        const user_id :mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.id)
        const user = await userService._fetchUser(user_id);
        if (!user) return res.status(400).json({ "message": "Invalid ID"})
        const password = req.body.password;
        const salt = genSaltSync(10);
        const new_password2 : mongoose.Schema.Types.String = new mongoose.Schema.Types.String(hashSync(password, salt));
        const user1 = await userService._resetPassword(user_id, new_password2);
        res.status(200).json({
            message: "Update success",
            user1,
        });


    } catch (err: unknown) {
        res.status(500).json({
            message: "Internal Server Error",
            error: err,
        });
    }
};
