import { v4 as uuidv4 } from "uuid";
import { users } from "./user.js";

let order = [];

export const orderCreate = (req, res) => {
  console.log(users);
  const { totalPrice, foodOrderItems } = req.body;
  order.push({
    _id: uuidv4(),
    userId: users[0].id,
    phoneNumber: users[0].phoneNumber,
    totalPrice,
    foodOrderItems,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  res.send({
    success: true,
    message: "ordered successfully",
  });
  console.log(order);
};

export const getorder = (_, res) => {
  res.send(order);
};
