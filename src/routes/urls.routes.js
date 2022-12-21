import { Router } from "express";
import { postUrl } from "../controllers/urls.controllers.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { urlMiddleware } from "../middlewares/urls.middleware.js";
const router = Router();

router.post("/urls/shorten", authMiddleware, urlMiddleware, postUrl);

export default router;
