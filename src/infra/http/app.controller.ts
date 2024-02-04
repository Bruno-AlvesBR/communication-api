import { Controller, Post, Req } from '@nestjs/common';
import { AccessAnalyticsRepository } from '../../database/mongodb/access-analytics/index.repository';
import { Request } from 'express';

@Controller('/api/access-analytics')
export class AppController {
  constructor(
    private readonly accessAnalyticsRepository: AccessAnalyticsRepository,
  ) {}

  @Post('/create-access')
  async createAccessAnalytics(@Req() request: Request): Promise<void> {
    console.log(request.headers);
    await this.accessAnalyticsRepository.createAccess(request.body);
  }
}
