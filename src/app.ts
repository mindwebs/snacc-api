// importing modules
import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.route";
import itemRouter from "./routes/item.route";
import connectDB from "./config/db.config";

// environment variables
dotenv.config();
const port: number = Number(process.env.PORT);

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);
app.use("/item", itemRouter);

app.listen(port, () => {
    console.log("server started on port", port);
    connectDB;
});
