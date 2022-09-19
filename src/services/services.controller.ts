import { Controller, Post, Get, Delete, Param, Body, HttpException, HttpStatus } from '@nestjs/common';
import { CreateServiceDto, DeleteServiceDto } from './services.dto';
import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post("/:uid")
  createService(
    @Param("uid") uid: string,
    @Body() body: CreateServiceDto
  ) {
    return this.servicesService.createService(body.name, body.type);
  }

  @Get("/all")
  getAllServices() {
    return this.servicesService.allServices();
  }

  @Delete("/:userId")
  removeService(
    @Param("userId") uid: string,
    @Body() body: DeleteServiceDto
  ) {
    return this.servicesService.removeService(body.serviceId);
  }
}
