import express from "express";
import * as userController from "../controllers/user.controller";

const userRouter: express.Router=express.Router();

userRouter.post("/register", userController.Register);
userRouter.get("/profile/:username", userController.FetchProfile);
userRouter.put("/update", userController.UpdateProfile);
userRouter.delete("/:id", userController.Delete);

userRouter.get("/",userController.FetchAll);
userRouter.post("/login", userController.Login);

userRouter.post("/change-password", userController.ChangePassword);
userRouter.post("/forgot-password", userController.ForgotPassword);
userRouter.post("/reset-password", userController.ResetPassword);

export default userRouter;