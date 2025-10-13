import "reflect-metadata";
import "./config/tsyringe";
import express from "express";
import cors from "cors";
import { env } from "./config";
import { CustomError } from "./errors";
import { errorHandler } from "./middlewares";
import aadhaarRoutes from "./routes/aadhaar";
import { HttpResCode, HttpResMsg } from "./constants";

const app = express();

app.use(cors({ origin: env.CLIENT_ORIGIN, credentials: true }));
app.use(express.json());

app.use("/api/parse", aadhaarRoutes);

app.use((_req, _res, next) => {
  next(new CustomError(HttpResMsg.ROUTE_NOT_FOUND, HttpResCode.NOT_FOUND));
});

app.use(errorHandler);

app.listen(env.PORT, () => {
  console.log(HttpResMsg.SERVER_CONNECTION);
});
