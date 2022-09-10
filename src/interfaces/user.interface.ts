import { Document } from "mongoose";

export interface userInterface extends Document {
    name: string,
    email: string,
    password: string,
    room: number,
    whatsapp: string,
    collegeId: number,
    
}

export interface CreateUserInterface {
    name: string,
    email: string,
    password: string,
    room: number,
    whatsapp: string,
    collegeId: number,
    
}

export interface UpdateUserInterface {
    name: string,
    email: string,
    password: string,
    room: number,
    whatsapp: string,
    
}
