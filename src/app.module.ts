import { Module } from '@nestjs/common';
import { AppController } from './infra/http/app.controller';
import { AccessAnalyticsRepository } from './database/mongodb/access-analytics/index.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AccessAnalyticsRepository],
})
export class AppModule {
  constructor() {}
}
