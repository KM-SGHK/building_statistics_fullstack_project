import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan"

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// api logging
app.use(morgan("combined"))

// routes
import { buildingsRoutes } from "./routes/buildings.js";
import { authRoutes } from "./routes/auth.js";
app.use("/api/v1/buildings", buildingsRoutes);
app.use("/api/v1/auth", authRoutes);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening to ${PORT} port.`);
});
