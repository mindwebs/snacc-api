import { Document } from "mongoose";

export interface itemInterface extends Document {
    name: string;
    quantity: number;
    cost: number;
    itemId: number;
}

export interface CreateItemInterface {
    name: string;
    quantity: number;
    cost: number;
    itemId: number;
}

export interface UpdateItemInterface {
    quantity: number;
    cost: number;
}

export default itemInterface;
