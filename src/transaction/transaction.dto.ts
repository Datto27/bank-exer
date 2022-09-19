import { IsNotEmpty, IsNumber, IsPositive, IsString, IsUUID } from "class-validator";


export class CreateTransactionDto {
  @IsNotEmpty()
  @IsUUID()
  senderId: string;

  @IsNotEmpty()
  @IsUUID()
  senderAccountId: string;

  @IsNotEmpty()
  @IsUUID()
  reciverId: string;

  @IsNotEmpty()
  @IsUUID()
  reciverAccountId: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  amount: number;

}

export class FilterTransactionByDateDto {
  @IsString()
  @IsNotEmpty()
  minDate: string;

  @IsString()
  maxDate: string;
}