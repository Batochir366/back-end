import express, { json } from "express";
import { v4 as uuidv4 } from "uuid";
const port = 8000;
const app = express();
app.use(json());

let users = [];
app.post("/user/create", (req, res) => {
  const { username, gender, age, email } = req.body;
  users.push({ username, gender, age, email, id: uuidv4() });

  res.send({ sucess: true, message: "done" });
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/user", (req, res) => {
  const { id } = req.body;
  const user = users.find((user) => {
    return user.id === id;
  });

  res.send(user);
});

app.delete("/user/delete", (req, res) => {
  const { id } = req.body;
  users = users.filter((user) => {
    return user.id !== id;
  });

  res.send({
    success: true,
    message: "deleted succesfully",
  });
});

app.put("/user/update", (req, res) => {
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
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
