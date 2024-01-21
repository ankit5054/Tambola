import { AppDataSource } from "../DB/Connection";
import { User } from "../DB/entities/User";
import { cryptr } from "../Encrypt";
var jwt = require("jsonwebtoken");

export async function Signin(req: any, res: any) {
  const UserDB = new User();

  if (!req?.body?.email) {
    res.status(400).send({
      staus: "Error",
      code: "TAMB-U-SI-001",
      message: "Email is required",
    });
    return;
  }
  if (!req?.body?.password) {
    res.status(400).send({
      staus: "Error",
      code: "TAMB-U-SI-002",
      message: "Password is required",
    });
    return;
  }

  UserDB.email = req?.body?.email;
  UserDB.password = cryptr.encrypt(req.body.password);

  let rwes = await AppDataSource.getRepository(User).findOne({
    where: {
      email: req?.body?.email,
      // password: cryptr.encrypt(req.body.password),
    },
  });

  if (rwes) {
    let key = jwt.sign(
      {
        email: req?.body?.email,
        password: cryptr.encrypt(req.body.password),
      },
      "mySecret",
      { expiresIn: 60 * 60 }
    );
    res.status(200).send({
      staus: "Success",
      message: "Signin Successfull, key valid for 1 hour only.",
      key,
    });
    return;
  } else {
    res.status(400).send({
      staus: "Error",
      code: "TAMB-U-SI-002",
      message: "Failed to SignIn. Email does not exist or wrong creds.",
    });
    return;
  }
}
