import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { accounts, users } from 'src/data';
import {v4 as uuid} from "uuid";

@Injectable()
export class AccountService {

  createAccount(userId:string, cardCode:string) {
    // find user if exists
    const userIndex = users.findIndex((user) => user.id===userId);
    if(userIndex===-1) throw new HttpException("user not exists", HttpStatus.NOT_FOUND);

    const newAccount = {
      id: uuid(),
      pid: users[userIndex].pid,
      userId, cardCode,
      accountNumber: uuid(),
      balance: 500
    }
    // add new account to accounts list
    accounts.push(newAccount);
    // add created owner(user)'s accounts ids list
    users[userIndex].accounts.push(newAccount.id);
    
    return newAccount;
  }

  allAccounts() {
    return accounts;
  }

  findAccountById(id:string) {
    return accounts.find((acc) => acc.id === id);
  }

  findAccountByPersonalId (pid:string) {
    return accounts.filter((acc) => acc.pid===pid);
  }

}
