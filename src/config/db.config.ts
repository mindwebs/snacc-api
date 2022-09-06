import mongoose from "mongoose";
const connectDB=mongoose.connect(
    env.process.CONNECT_URL,
    {},
    (err:mongoose.CallbackError)=>{
    if(err)
    console.log("Error occurred while connecting to DB", err)
    else
    console.log("Database connection Successfully established");
    }
);
export default connectDB;