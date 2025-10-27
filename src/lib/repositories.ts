import { dataSource } from "src/configs/datasource";
import { Project } from "src/entities/projejct.entity";
import { Repository } from "typeorm";

export const ProjectRepository: Repository<Project> = dataSource.getRepository(Project);