import joi from "joi";

export const userSchema = joi.object({
  name: joi.string().required().min(3).max(50),
  email: joi.string().email().required(),
  password: joi.string().required(),
  confirmPassword: joi.string().required(),
});
