import jwt from "jsonwebtoken";
import { connection } from "../database/db.js";

export async function authMiddleware(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  let id = 0;
  let err;

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.SECRET_JWT, (error, decoded) => {
    if (error) {
      err = error;
    } else {
      id = decoded.id;
    }
  });
  if (err) {
    return res.status(401).send({ message: "Invalid Token!" });
  }
  try {
    const user = await connection.query(
      `SELECT * FROM users WHERE users.id = '${id}'`
    );
    if (!user.rows[0]) {
      return res.sendStatus(401);
    }
    delete user.rows[0].password;
    delete user.rows[0].confirmPassword;
    req.user = user.rows[0];
    next();
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
