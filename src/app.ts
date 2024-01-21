import express from "express";
import { userRouter } from "./Router/User";
import { tambolaRouter } from "./Router/Tambola";

const app = express();
app.use("/user", userRouter);
app.use("/tambola", tambolaRouter);
app.get("/", (req, res) => {
  res.send("Hi ");
});

app.listen(3000, () => {
  console.log("Up & running ");
});
