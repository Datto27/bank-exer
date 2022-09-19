import { Controller, Post, Body, Param, Get, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService:UserService) {}

  @Post()
  createUser(
    @Body() body: CreateUserDto
  ) {
    return this.userService.createUser(body);
  }

  @Get("/all")
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get("/:uid")
  getUser(
    @Param("uid", ParseIntPipe) uid:string
  ) {
    return this.userService.getUser(Number(uid));
  }
}
