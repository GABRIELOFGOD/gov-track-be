import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./env";
import { Project } from "../entities/project.entity";

export const dataSource = new DataSource({
  type: "postgres",
  host: DB_HOST || 'localhost',
  port: Number(DB_PORT) || 5432,
  username: DB_USER || 'postgres',
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [Project],
  synchronize: true,
});

export const initializeDatasource = () => {
  dataSource.initialize()
    .then(() => {console.log("Data source initialized successfully.")})
    .catch((error) => {console.log("Datasource initialization failed", error)});
};
