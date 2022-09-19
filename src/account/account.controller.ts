import { Controller, Body, Get, Post, Param } from '@nestjs/common';
import { AccountService } from './account.service';


@Controller('account')
export class AccountController {
  constructor(private readonly acccountService:AccountService) {}

  @Post("/:userId")
  createAccount(
    @Param("userId") userId: string,
    @Body("cardCode") cardCode: string
  ) {
    // console.log(userId);
    return this.acccountService.createAccount(userId, cardCode);
  }

  @Get("/all")
  getAllAccounts() {
    return this.acccountService.allAccounts();
  }

  @Get("/:accountId")
  getOneAccount(
    @Param("accountId") accountId: string
  ) {
    return this.acccountService.findAccountById(accountId);
  }

  @Get("/by-pid/:personalId")
  getAccountByPersonalId(
    @Param("personalId") personalId: string,
  ) {
    // console.log(personalId);
    return this.acccountService.findAccountByPersonalId(personalId);
  }

}
