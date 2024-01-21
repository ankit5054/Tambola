import express from "express";
import { IsSignedIn } from "../Middleware/IsSignedIn";
import { generateTicket } from "../tambola_generator";
import { Tickets } from "../DB/entities/Tickets";
import { AppDataSource } from "../DB/Connection";
import { GetTickets } from "../Controller/GetTickets";
import { GenerateTickets } from "../Controller/CreateTickets";

export const tambolaRouter = express.Router();

tambolaRouter.get("/", IsSignedIn, GetTickets);

tambolaRouter.post("/generate", IsSignedIn, GenerateTickets);
