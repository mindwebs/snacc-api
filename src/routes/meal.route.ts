import express from "express";
import * as mealController from "../controllers/meal.controller";
import { Auth } from "../middlewares/authentication.middleware";
const mealRouter: express.Router = express.Router();

mealRouter.post("/add_meal_count", Auth, mealController.MealCountIncrement);
mealRouter.post("/meal_counter", mealController.MealCounter);

export default mealRouter;