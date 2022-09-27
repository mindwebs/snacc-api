import { Document,Types } from "mongoose";

export interface itemInterface extends Document {
    name: string;
    quantity: number;
    cost: number;
}

export interface CreateItemInterface {
    name: string;
    quantity: number;
    cost: number;
}

export interface UpdateItemInterface {
    quantity?: number;
    cost?: number;
}

export default itemInterface;
