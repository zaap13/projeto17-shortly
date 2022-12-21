import { Router } from "express";
import {
  deleteUrl,
  getUrl,
  openUrl,
  postUrl,
} from "../controllers/urls.controllers.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { urlMiddleware } from "../middlewares/urls.middleware.js";
const router = Router();

router.post("/urls/shorten", authMiddleware, urlMiddleware, postUrl);
router.get("/urls/:id", getUrl);
router.get("/urls/open/:shortUrl", openUrl);
router.delete("/urls/:id", authMiddleware, deleteUrl);

export default router;
