import { AppDataSource } from "../DB/Connection";
import { User } from "../DB/entities/User";
const Cryptr = require("cryptr");

const cryptr = new Cryptr("mySecret");
export async function Signup(req: any, res: any) {
  const UserDB = new User();

  if (!req?.body?.email) {
    res.status(400).send({
      staus: "Error",
      code: "TAMB-U-SU-001",
      message: "Email is required",
    });
    return
  }
  if (!req?.body?.password) {
    res.status(400).send({
      staus: "Error",
      code: "TAMB-U-SU-002",
      message: "Password is required",
    });
    return
  }

  UserDB.email = req?.body?.email;
  UserDB.password = cryptr.encrypt(req.body.password);

  await AppDataSource.manager
    .save(UserDB)
    .then((result) => {
        // console.log(result);
        
      res.status(200).send({
        staus: "Success",
        message: "Signup Successfull",
      });
    })
    .catch((err) => {
      console.log(err);

      res.status(400).send({
        staus: "Error",
        code: "TAMB-U-SU-002",
        message: "Failed to Signup",
      });
    });
}
