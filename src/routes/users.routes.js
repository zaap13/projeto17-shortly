import { Router } from "express";
import { postUser } from "../controllers/users.controllers.js";
import { userMiddleware } from "../middlewares/users.middleware.js";
const router = Router();

router.post("/users", userMiddleware, postUser);

export default router;
