import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import { usersRouter } from "./routes/users.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORES_ORIGIN,
    credentials: true,
  }),
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/api/v1/users", usersRouter);

export { app };
