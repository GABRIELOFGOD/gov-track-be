import { dataSource } from "../configs/datasource";
import { Project } from "../entities/project.entity";
import { Repository } from "typeorm";

export const ProjectRepository: Repository<Project> = dataSource.getRepository(Project);
