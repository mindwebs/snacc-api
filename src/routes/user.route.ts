import express from "express";
import * as userController from "../controllers/user.controller";
import { Auth } from "../middlewares/authentication.middleware";

const userRouter: express.Router = express.Router();

userRouter.post("/register", userController.Register);
userRouter.get("/profile", Auth, userController.FetchProfile);
userRouter.put("/update", Auth, userController.UpdateProfile);
userRouter.delete("/:id", userController.Delete);

userRouter.get("/", userController.FetchAll);
userRouter.post("/login", userController.Login);

userRouter.post("/change-password", Auth, userController.ChangePassword);
userRouter.post("/forgot-password",Auth, userController.ForgotPassword);
userRouter.get("/reset-password/:id", userController.ResetPassword)
export default userRouter;
