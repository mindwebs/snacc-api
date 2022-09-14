import express from "express";
import { copyFileSync } from "fs";
import mongoose from "mongoose";
import { CreateUserInterface } from "../interfaces/user.interface";
import { UpdateUserInterface } from "../interfaces/user.interface";
import * as userService from "../services/user.service";
export const Register = async (
    request: express.Request,
    reponse: express.Response
) => {
    try {
        const user_dto: CreateUserInterface = { ...request.body };
        const user = await userService._createUser(user_dto);
        reponse.status(200).json({
            message: "creation success",
            user,
        });
    } catch (err: unknown) {
        reponse.status(500).json({
            message: "Internal Server Error",
            error: err,
        });
    }
};

export const FetchProfile = async (
    request: express.Request,
    reponse: express.Response
) => {
    try {
        const user_id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(
            request.body.user_id
        );
        const user = await userService._fetchUser(user_id);
        reponse.status(200).json({
            message: "Fetch success",
            user,
        });
    } catch (err: unknown) {
        reponse.status(500).json({
            message: "Internal Server Error",
            error: err,
        });
    }
};

export const UpdateProfile = async (
    request: express.Request,
    reponse: express.Response
) => {
    try {
        const user_id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(
            request.body.user_id
        );
        const user_dto: UpdateUserInterface = { ...request.body };
        const user = await userService._updateUser(user_id, user_dto);
        reponse.status(200).json({
            message: "Update success",
            user,
        });
    } catch (err: unknown) {
        reponse.status(500).json({
            message: "Internal Server Error",
            error: err,
        });
    }
};

export const Delete = async (
    request: express.Request,
    reponse: express.Response
) => {
    try {
        const user_id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(
            request.body.user_id
        );
        const user = await userService._deleteUser(user_id);
        reponse.status(200).json({
            message: "delete success",
            user,
        });
    } catch (err: unknown) {
        reponse.status(500).json({
            message: "Internal Server Error",
            error: err,
        });
    }
};

export const FetchAll = async (
    request: express.Request,
    reponse: express.Response
) => {
    try {
        const user = await userService._fetchAllUser();
        reponse.status(200).json({
            message: "delete success",
            user,
        });
    } catch (err: unknown) {
        reponse.status(500).json({
            message: "Internal Server Error",
            error: err,
        });
    }
};

export const Login = async (
    request: express.Request,
    reponse: express.Response
) => {
    try {
        // input id
    } catch (err: unknown) {
        reponse.status(500).json({
            message: "Internal Server Error",
            error: err,
        });
    }
};

export const ChangePassword = async (
    request: express.Request,
    reponse: express.Response
) => {
    try {
    } catch (err: unknown) {
        reponse.status(500).json({
            message: "Internal Server Error",
            error: err,
        });
    }
};

export const ForgotPassword = async (
    request: express.Request,
    reponse: express.Response
) => {
    try {
    } catch (err: unknown) {
        reponse.status(500).json({
            message: "Internal Server Error",
            error: err,
        });
    }
};

export const ResetPassword = async (
    request: express.Request,
    reponse: express.Response
) => {
    try {
    } catch (err: unknown) {
        reponse.status(500).json({
            message: "Internal Server Error",
            error: err,
        });
    }
};
