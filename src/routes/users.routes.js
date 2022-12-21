import { Router } from "express";
import { logIn, postUser } from "../controllers/users.controllers.js";
import { userMiddleware } from "../middlewares/users.middleware.js";
const router = Router();

router.post("/signup", userMiddleware, postUser);
router.post("/signin", logIn);

export default router;
