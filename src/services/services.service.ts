import { Injectable } from '@nestjs/common';
import { v4 as uuid } from "uuid";
import { services } from 'src/data';

@Injectable()
export class ServicesService {

  createService(name:string, type:string) {
    const newService = {
      id: uuid(),
      name, type
    };
    services.push(newService);
    return newService;
  }

  allServices() {
    return services;
  }

  removeService(id:string) {
    return services.filter((ser) => ser.id !== id);
  }
}
