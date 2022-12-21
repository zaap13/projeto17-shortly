import jwt from "jsonwebtoken";

export const generateToken = (id) =>
  jwt.sign({ id: id }, process.env.SECRET_JWT);
