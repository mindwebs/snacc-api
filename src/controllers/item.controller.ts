import express from "express";
import { copyFileSync } from "fs";
import mongoose from "mongoose";
import { CreateItemInterface } from "../interfaces/item.interface"
import { UpdateItemInterface } from "../interfaces/item.interface"
import * as itemService from "../services/item.service";
export const RegisterNewItem=async(request: express.Request, reponse: express.Response)=>{
    try{
        const item_dto:CreateItemInterface={...request.body}
        const item=await itemService._createItem(item_dto)
        reponse.status(200).json({
            "message": "creation success",
            item,
        })


    }catch(err:unknown){
        reponse.status(500).json({
            "message":"Internal Server Error",
            "error": err,
        });
    }
};

export const FetchItem=async(request: express.Request, reponse: express.Response)=>{
    try{
        const item_id:mongoose.Types.ObjectId=new mongoose.Types.ObjectId(request.body.item_id)
        const item=await itemService._fetchItem(item_id)
        reponse.status(200).json({
            "message": "Fetch success",
            item,
        })
    }catch(err:unknown){
        reponse.status(500).json({
            "message":"Internal Server Error",
            "error": err,
        });
    }
};

export const UpdateItem=async(request: express.Request, reponse: express.Response)=>{
    try{
        const item_id:mongoose.Types.ObjectId= new mongoose.Types.ObjectId(request.body.item_id)
        const item_dto:UpdateItemInterface={...request.body}
        const item=await itemService._updateItem(item_id, item_dto)
        reponse.status(200).json({
            "message": "Update success",
            item,
        })

    }catch(err:unknown){
        reponse.status(500).json({
            "message":"Internal Server Error",
            "error": err,
        });
    }
};
export const DeleteItem=async(request: express.Request, reponse: express.Response)=>{
    try{
        const item_id:mongoose.Types.ObjectId=new mongoose.Types.ObjectId(request.body.item_id)
        const item=await itemService._deleteItem(item_id)
        reponse.status(200).json({
            "message": "delete success",
            item,
        })

    }catch(err:unknown){
        reponse.status(500).json({
            "message":"Internal Server Error",
            "error": err,
        });
    }
};
