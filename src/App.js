import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

//Routes
app.use("/api",routes);

export default app;
