import { Document, Types } from "mongoose";

export interface userInterface extends Document {
    name: string;
    email: string;
    password: string;
    room: number;
    whatsapp: string;
    collegeId: number;
}

export interface CreateUserInterface {
    name: string;
    email: string;
    password: string;
    room: number;
    whatsapp: string;
    collegeId: number;
}

export interface UpdateUserInterface {
    name?: string;
    email?: string;
    password?: string;
    room?: number;
    whatsapp?: string;
}

export interface JWTPayload {
    _id: Types.ObjectId,
    name: string,
    email: string
}