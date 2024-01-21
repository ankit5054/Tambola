import { AppDataSource } from "../DB/Connection";
import { Tickets } from "../DB/entities/Tickets";

export async function GetTickets(req: any, res: any) {
  try {
    if (req?.query?.limit && isNaN(parseInt("" + req?.query?.limit))) {
      res.status(400).send({
        staus: "Error",
        code: "TAMB-C-F-001",
        message: "Please input a number for limit in query",
      });
      return;
    }
    if (req?.query?.page && isNaN(parseInt("" + req?.query?.page))) {
      res.status(400).send({
        staus: "Error",
        code: "TAMB-C-F-002",
        message: "Please input a number for page",
      });
      return;
    }

    let limit = parseInt("" + req?.query?.limit) || 50;
    let page: number = parseInt("" + req?.query?.page) || 1;
    let offset: number = (page - 1) * limit;

    let tickets = await AppDataSource.getRepository(Tickets).find({
      skip: offset,
      take: limit,
    });

    let finalTicket: any = {};
    tickets.map((ticket) => {
      let key = ticket.identifier + "";
      return (finalTicket[key] = ticket.ticket);
    });

    if (tickets) {
      res.send({ tickets: finalTicket, count: tickets.length }).status(200);
      return;
    } else {
      res.status(400).send({
        staus: "Error",
        code: "TAMB-C-F-003",
        message: "No records found",
      });
      return;
    }
  } catch (error) {
    res.status(400).send({
      staus: "Error",
      code: "TAMB-C-F-004",
      message: "Unexpected error occurred",
    });
  }
}
