import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { CreateProjectDto } from "src/dtos/project";
import { ProjectRepository } from "src/lib/repositories";
import catchAsync from "src/middleware/catchAsync.middleware";
import { AppError } from "src/middleware/errorHandler";
import { StatusCode } from "src/types/error";

export const createProject = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

  // =================== VALIDATING USER INPUTS ================= //
  const createProjectDto = plainToInstance(CreateProjectDto, req.body, { excludeExtraneousValues: true });

  const errors = await validate(createProjectDto);
  if (errors.length > 0) return next(new AppError(errors.map(err => Object.values(err.constraints || {})).join(", "), StatusCode.BAD_REQUEST));

  // ================ CHECKING IF PROJECT EXISTS IN THE DATABASE ===================== //
  const project = await ProjectRepository.findOne({
    where: { name: createProjectDto.name, description: createProjectDto.description }
  });

  if (project) throw new AppError("Project already exists", StatusCode.CONFLICT);

  
  
});

