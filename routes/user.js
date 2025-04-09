import express from "express";
import {
  createUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUserById,
} from "../controller/user.js";

export const userRouter = express.Router();

userRouter
  .get("/", getAllUsers)
  .get("/:id", getUserById)
  .delete("/", deleteUserById)
  .post("/", createUser)
  .put("/", updateUserById);
