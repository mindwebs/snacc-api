import express from "express";
import * as itemController from "../controllers/item.controller";

const itemRouter: express.Router=express.Router();
itemRouter.post("/register", itemController.RegisterNewItem);
itemRouter.get("/profile/:itemname", itemController.FetchItem);
itemRouter.put("/update", itemController.UpdateItem);
itemRouter.delete("/:id", itemController.DeleteItem);
itemRouter.get("/available", itemController.AvailableItems);

export default itemRouter;