import { v4 as uuidv4 } from "uuid";

export let users = [];

export const createUser = (req, res) => {
  const { username, gender, age, email, phoneNumber } = req.body;
  users.push({ username, gender, age, email, phoneNumber, id: uuidv4() });

  res.send({ sucess: true, message: "done" });
};

export const getAllUsers = (_, res) => {
  res.send(users);
};

export const getUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => {
    return user.id === id;
  });

  res.send(user);
};

export const deleteUserById = (req, res) => {
  const { id } = req.body;
  users = users.filter((user) => {
    return user.id !== id;
  });

  res.send({
    success: true,
    message: "deleted succesfully",
  });
};

export const updateUserById = (req, res) => {
  const { id, username, gender, age, email } = req.body;
  users.map((value, _) => {
    if (value.id === id) {
      (value.username = username),
        (value.gender = gender),
        (value.age = age),
        (value.email = email);
    } else {
      return value;
    }
  });

  res.send({
    success: true,
    message: "updated",
  });
};
