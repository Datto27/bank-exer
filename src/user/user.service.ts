import { Injectable } from '@nestjs/common';
import { accounts, users } from 'src/data';
import { v4 as uuid } from "uuid";

@Injectable()
export class UserService {

  createUser(body: {name:string, password:string, pid:string}) {
    const newUser = {
      id: uuid(),
      name: body.name,
      password: body.password,
      pid: body.pid,
      accounts: [],
      transactions: [],
      servicePayments: []
    }
    users.push(newUser);
    return newUser;
  }

  getAllUsers() {
    return users;
  }

  getUser(uid:string) {
    return users.find(user => user.id===uid);
  }

  getUserAccounts(uid:string) {
    return accounts.filter((acc) => {
      if(acc.userId===uid) return acc
    });
  }
}
