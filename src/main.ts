import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from "@nestjs/common";
import { AppModule } from './app.module';
import { DBService } from './db.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  const dbService: DBService = app.get(DBService);
  dbService.enableShutdownHooks(app)
  await app.listen(4000);
}
bootstrap();
