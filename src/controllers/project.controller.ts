import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { CreateProjectDto } from "../dtos/project";
import { ProjectRepository } from "../lib/repositories";
import catchAsync from "../middleware/catchAsync.middleware";
import { AppError } from "../middleware/errorHandler";
import { StatusCode } from "../types/error";

export const createProject = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

  // =================== VALIDATING USER INPUTS ================= //
  const createProjectDto = plainToInstance(CreateProjectDto, req.body);

  const errors = await validate(createProjectDto);
  if (errors.length > 0) return next(new AppError(errors.map(err => Object.values(err.constraints || {})).join(", "), StatusCode.BAD_REQUEST));

  // ================ CHECKING IF PROJECT EXISTS IN THE DATABASE ===================== //
  const project = await ProjectRepository.findOne({
    where: { name: createProjectDto.name }
  });

  console.log("Project found", project);

  if (project) return next(new AppError("Project already exists", StatusCode.CONFLICT));

  const newProject = ProjectRepository.create({
    ...createProjectDto,
    budget: Number(createProjectDto.budget)
  });

  await ProjectRepository.save(newProject);

  res.json({
    message: "Project created successfully",
    status: StatusCode.CREATED
  });
    
});

export const getProjects = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const projects = await ProjectRepository.find();
  res.status(StatusCode.OK).json(projects);
});
