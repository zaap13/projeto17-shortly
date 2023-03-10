import express from "express";
import cors from "cors";
import usersRouter from "./routes/users.routes.js";
import urlsRouter from "./routes/urls.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(usersRouter);
app.use(urlsRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running in port: ${port}`);
});
