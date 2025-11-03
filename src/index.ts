import "module-alias/register";
import express, { NextFunction, Request, Response } from "express";
import projectRoutes from "./routes/project.route";
import cors from "cors";
import { AppError, errorHandler } from "./middleware/errorHandler";
import { initializeDatasource } from "./configs/datasource";
import { config } from "dotenv";
import dbConfig from "./configs/database.config";

const app = express();
dbConfig();
config();

initializeDatasource();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.all("/health", (req, res) => {
  res.status(200).send("OK");
});

app.use("/api/projects", projectRoutes);

// app.all("*", (req: Request, res: Response, next: NextFunction) =>
//   next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
// );
app.use(errorHandler);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
