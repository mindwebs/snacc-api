import mongoose from "mongoose";
const connectDB = mongoose.connect(
    String(process.env.CONNECT_URL || "mongodb+srv://mango:mommy@cluster0.dxijt7v.mongodb.net/?retryWrites=true&w=majority"),
    {},
    (err: mongoose.CallbackError) => {
        if (err) console.log("Error occurred while connecting to DB", err);
        else console.log("Database connection Successfully established");
    }
);
export default connectDB;
