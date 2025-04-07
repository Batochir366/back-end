import express, { json } from "express";

const port = 8000;
const app = express();
app.use(json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/user", (req, res) => {
  const { username, password } = req.body;

  if (username.length < 5) {
    res
      .status(400)
      .send({
        success: false,
        message: "username 5 deesh !!",
      })
      .end();
  }

  if (password.lengths < 8) {
    res
      .status(400)
      .send({
        success: false,
        message: "password 8 deesh baih ystoi !!",
      })
      .end();
  }

  res.send({ succes: true });
  console.log(req.body, "req");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
