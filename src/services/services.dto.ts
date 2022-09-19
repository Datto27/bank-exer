import { IsNotEmpty, IsString } from "class-validator";


export class CreateServiceDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  type: string;
}

export class DeleteServiceDto {
  @IsNotEmpty()
  @IsString()
  serviceId: string;
}