import express from "express";
import userRoutes from './routes/user.route';
import authRoutes from './routes/auth.route';
import cors from 'cors';
import { errorHandler } from "./middleware/errorHandler";
import { initializeDatasource } from "./configs/datasource";
import { config } from "dotenv";

const app = express();
config();

initializeDatasource();

app.use(cors());
app.use(express.json());

app.use("/health", (req, res) => {
  res.status(200).send("OK");
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler);

app.listen(8000, () => {
  console.log("Server is running on port 5000");
});