var jwt = require("jsonwebtoken");

export async function IsSignedIn(req: any, res: any, next: any) {
  let key = req.header("Authorization")?.split(" ")[1];
  jwt.verify(key, "mySecret", function (err: any) {
    if (err) {
      res.status(401).send({
        staus: "Error",
        code: "TAMB-U-IS-001",
        message:
          "Failed to Authenticate, please pass a valid bearer token or token expired",
      });
      return;
    } else next();
  });
}
