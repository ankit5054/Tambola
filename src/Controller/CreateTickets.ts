import { AppDataSource } from "../DB/Connection";
import { Tickets } from "../DB/entities/Tickets";
import { generateTicket } from "../tambola_generator";

export async function GenerateTickets(req: any, res: any) {
  try {
    if (!req?.query?.set) {
      res.status(400).send({
        staus: "Error",
        code: "TAMB-C-I-001",
        message: "No value found for set in query variable",
      });
      return;
    }
    if (isNaN(parseInt("" + req.query.set))) {
      res.status(400).send({
        staus: "Error",
        code: "TAMB-C-I-002",
        message: "Please input a number for set",
      });
      return;
    }
    const set = parseInt("" + req.query.set);
    let tickets: any = {};
    for (let i = 0; i < 6 * set; i++) {
      let ticket = generateTicket();
      let DBTicket = new Tickets();
      DBTicket.ticket = ticket;
      let res = await AppDataSource.manager.save(DBTicket);
      // console.log(res.identifier);

      tickets[res.identifier!] = ticket;
    }
    res.status(200).send({ tickets });
    return;
  } catch (error) {
    console.log(error);
    res.status(400).send({
      staus: "Error",
      code: "TAMB-C-I-002",
      message: "Unexpected Error occurred.",
    });
  }
}
