import { IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Category } from "src/types";

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(Category)
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  lga: string;

  @IsOptional()
  @IsString()
  budget: string;

  @IsOptional()
  @IsString()
  others: string;

  @IsDateString()
  @IsNotEmpty()
  start_date: Date;

  @IsDateString()
  @IsNotEmpty()
  end_date: Date;

  @IsString()
  @IsNotEmpty()
  contractorName: string;

}