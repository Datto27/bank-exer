import { Controller, Param, Response, Body, Post, Get, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { Response as ResponseT } from 'express';
import { TransactionI } from 'src/dataTypes';
import { CreateTransactionDto } from './transaction.dto';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService:TransactionService) {}

  @Post("")
  createTransaction(
    // @Response() res: ResponseT, // ? bug, returns works only res."..."
    @Body() body: CreateTransactionDto,
  ) {
    // if(body.amount === 0) return res.status(400).json({error: "you can't transfer 0$"});
    if(body.amount === 0) throw new HttpException("you can't transfer 0$", HttpStatus.I_AM_A_TEAPOT);
    return this.transactionService.createTransaction(body);
  }

  @Get("/all")
  getAllTransactions() {
    return this.transactionService.getAllTransactions();
  }

  @Get("/by-id/:id")
  getOneTransaction(
    @Param("id") id:string
  ) {
    return this.transactionService.findTransactionById(id);
  }

  @Get("/by-date")
  getTransactionsByDate(
    @Body() {minDate, maxDate}:{minDate:string, maxDate?:string}
  ) {
    return this.transactionService.filterByDate(minDate, maxDate);
  }

  @Delete("/:operatorId")
  removeTransaction(
    @Param("operatorId") operatorId: string,
    @Body() {transactionId}: {transactionId:string}
  ) {
    return this.transactionService.removeTransaction(operatorId, transactionId)
  }
}
