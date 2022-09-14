import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
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
            message: "Fetch success",
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
        const user_id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(
            req.body.user_id
        );
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
    } catch (err: unknown) {
        res.status(500).json({
            message: "Internal Server Error",
            error: err,
        });
    }
};
