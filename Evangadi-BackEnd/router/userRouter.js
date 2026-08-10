import express from "express";
import { createTable } from "../controller/createTable.js";
import { checkUser, login, register } from "../controller/userController.js";
import { authMiddleware } from "../authMiddleware/authMiddleware.js";
const userRoute = express.Router();

userRoute.get("/create-table", createTable);
userRoute.post("/register", register);
userRoute.post("/login", login);
userRoute.get("/check", authMiddleware, checkUser);

export default userRoute;
