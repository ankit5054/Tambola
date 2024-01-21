import express from "express";
import { Signin } from "../Controller/Signin";
import { Signup } from "../Controller/Signup";
var bodyParser = require("body-parser");

var jsonParser = bodyParser.json();
export const userRouter = express.Router();

userRouter.post("/signup", jsonParser, Signup);
userRouter.post("/signin", jsonParser, Signin);
