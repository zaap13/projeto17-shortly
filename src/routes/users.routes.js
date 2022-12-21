import { Router } from "express";
import {
  getRanking,
  getUser,
  logIn,
  postUser,
} from "../controllers/users.controllers.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { userMiddleware } from "../middlewares/users.middleware.js";
const router = Router();

router.post("/signup", userMiddleware, postUser);
router.post("/signin", logIn);
router.get("/users/me", authMiddleware, getUser);
router.get("/ranking", getRanking);

export default router;
