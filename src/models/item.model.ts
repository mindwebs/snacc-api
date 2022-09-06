import mongoose from "mongoose";
import itemInterface from "../interfaces/item.interface";

const itemSchema: mongoose.Schema<itemInterface>= new mongoose.Schema({

    name:{
          type: String,
          required: true 
    },

    quantity:{
           type: Number,
           required: true
    },
     
    itemId:{
           type: Number,
           required: true
    },
})