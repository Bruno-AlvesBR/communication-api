import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';
config();

import '@/database/mongodb/connection';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
}

bootstrap();
