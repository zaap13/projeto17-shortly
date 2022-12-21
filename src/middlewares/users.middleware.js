import { userSchema } from "../models/users.model.js";

export function userMiddleware(req, res, next) {
  const { error } = userSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).send(errors);
  }
  next();
}
