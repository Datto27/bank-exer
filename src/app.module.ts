import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TransactionModule } from './transaction/transaction.module';
import { AccountController } from './account/account.controller';
import { AccountModule } from './account/account.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [UserModule, TransactionModule, AccountModule, ServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
