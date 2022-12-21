import { urlSchema } from "../models/urls.model.js";

export function urlMiddleware(req, res, next) {
  const { error } = urlSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }
  next();
}
