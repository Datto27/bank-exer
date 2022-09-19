import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { accounts, users } from 'src/data';
import { DBService } from 'src/db.service';
import { v4 as uuid } from "uuid";

@Injectable()
export class UserService {
  constructor(private dbService:DBService) {}

  createUser(body: {name:string, password:string, pid:string}) {
    const newUser = {
      name: body.name,
      password: body.password,
      pid: body.pid,
      accounts: [],
      transactions: [],
      servicePayments: []
    }
    // users.push(newUser);
    return this.dbService.user.create({data:body});
  }

  getAllUsers() {
    return this.dbService.user.findMany();
  }

  getUser(id: number): Promise<User> {
    // return users.find(user => user.id===uid);
    return this.dbService.user.findUnique({where: {id}})
  }
}
