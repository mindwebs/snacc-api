import { Request, Response } from "express";
import mongoose from "mongoose";
import { CreateItemInterface } from "../interfaces/item.interface";
import { UpdateItemInterface } from "../interfaces/item.interface";
import * as itemService from "../services/item.service";
export const RegisterNewItem = async (
    req: Request,
    reponse: Response
) => {
    try {
        const item_dto: CreateItemInterface = { ...req.body };
        const item = await itemService._createItem(item_dto);
        reponse.status(200).json({
            message: "creation success",
            item,
        });
    } catch (err: unknown) {
        reponse.status(500).json({
            message: "Internal Server Error",
            error: err,
        });
    }
};

export const FetchItem = async (
    req: Request,
    reponse: Response
) => {
    try {
        const item_id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(
            req.body.item_id
        );
        const item = await itemService._fetchItem(item_id);
        reponse.status(200).json({
            message: "Fetch success",
            item,
        });
    } catch (err: unknown) {
        reponse.status(500).json({
            message: "Internal Server Error",
            error: err,
        });
    }
};

export const UpdateItem = async (
    req: Request,
    reponse: Response
) => {
    try {
        const item_id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(
            req.body.item_id
        );
        const item_dto: UpdateItemInterface = { ...req.body };
        const item = await itemService._updateItem(item_id, item_dto);
        reponse.status(200).json({
            message: "Update success",
            item,
        });
    } catch (err: unknown) {
        reponse.status(500).json({
            message: "Internal Server Error",
            error: err,
        });
    }
};
export const DeleteItem = async (
    req: Request,
    reponse: Response
) => {
    try {
        const item_id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(
            req.body.item_id
        );
        const item = await itemService._deleteItem(item_id);
        reponse.status(200).json({
            message: "delete success",
            item,
        });
    } catch (err: unknown) {
        reponse.status(500).json({
            message: "Internal Server Error",
            error: err,
        });
    }
};
export const AvailableItems = async (
    req: Request,
    reponse: Response
) => {
    try {
        const item = await itemService._availableItem();
        reponse.status(200).json({
            message: "available items successful",
            item,
        });
    } catch (err: unknown) {
        reponse.status(500).json({
            message: "Internal Server Error",
            error: err,
        });
    }
};
