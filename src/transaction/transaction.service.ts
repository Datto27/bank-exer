import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { v4 as uuid } from "uuid";
import { accounts, transactions } from 'src/data';
import { TransactionI } from 'src/dataTypes';


@Injectable()
export class TransactionService {


  createTransaction({senderId, senderAccountId, reciverId, reciverAccountId, amount}) {
    const senderIndex = accounts.findIndex((acc) => acc.id===senderAccountId && acc.userId===senderId);
    // console.log(senderIndex);
    if(senderIndex === -1) throw new HttpException("account not found", HttpStatus.I_AM_A_TEAPOT);
    if(accounts[senderIndex].balance < amount) throw new HttpException("you don't have enough money on the account", HttpStatus.I_AM_A_TEAPOT);

    // find and check if reciver account exists
    const reciverIndex = accounts.findIndex((acc) => acc.id===reciverAccountId && acc.userId===reciverId);
    if(reciverIndex === -1) throw new HttpException("reciver account not found", HttpStatus.I_AM_A_TEAPOT);

    // if everything is okey update sender and reciver accounts
    accounts[senderIndex].balance -= amount;
    accounts[reciverIndex].balance += amount;

    const newTransaction = {
      id: uuid(),
      senderId, senderAccountId,
      reciverId, reciverAccountId,
      amount,
      date: new Date()
    }

    // add new transaction to db
    transactions.push(newTransaction);

    return newTransaction;
  }

  getAllTransactions() {
    return transactions;
  }

  findTransactionById(id:string) {
    return transactions.find((tr) => tr.id === id);
  }

  filterByDate(minDate:string, maxDate:string) {
    // console.log(new Date(minDate).getTime());
    let filteredTransactions: TransactionI[];

    if(minDate && maxDate) { // if we get min and max together
      filteredTransactions = transactions.filter((tr) => {
        const trDate = new Date(tr.date).getTime()
        // return transaction item if its date is greater than minDate and less than maxDate
        if(trDate > new Date(minDate).getTime() && trDate < new Date(maxDate).getTime()) return tr
      })
    } else if(minDate) { // if we only get minDate
      filteredTransactions = transactions.filter((tr) => {
        const trDate = new Date(tr.date).getTime()
        // return transaction item if its date is greater than minDate and less than maxDate
        if(trDate > new Date(minDate).getTime()) return tr
      })
    }

    return filteredTransactions;
  }

  removeTransaction(operatorId:string, transactionId:string) {
    return transactions.filter((tr) => tr.id!==transactionId)
  }

}
