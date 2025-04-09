import express from "express";
import { getorder, orderCreate } from "../controller/order.js";

export const orderRouter = express.Router();

orderRouter.post("/", orderCreate).get("/", getorder);
