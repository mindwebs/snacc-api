import mongoose from "mongoose";
import { CreateItemInterface } from "../interfaces/item.interface";
import { UpdateItemInterface } from "../interfaces/item.interface";
import Item from "../models/item.model";


export const _createItem = async (item_dto: CreateItemInterface) => {
    return await Item.create(item_dto);
    
}

export const _fetchItem = async (item_id: mongoose.Types.ObjectId) => {
    return await Item.findOne(item_id);
    
}
export const _updateItem = async (id: mongoose.Types.ObjectId,dto: UpdateItemInterface) => {
    return await Item.findOneAndUpdate({ item_id: id }, dto);
};

export const _deleteItem = async (item_id: mongoose.Types.ObjectId) => {
    return await Item.deleteOne(item_id);
    
}