import {IsString, IsNotEmpty, Length, MinLength, } from "class-validator"


export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  pid: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
  
}
