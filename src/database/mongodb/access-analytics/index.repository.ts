import { Injectable } from '@nestjs/common';

import { AccessAnalyticsModel } from './index.model';
import {
  IAccessAnalyticsRepository,
  ICreateAccessAnalytics,
} from '@/domain/access-analytics/data/index.data';

@Injectable()
export class AccessAnalyticsRepository implements IAccessAnalyticsRepository {
  async createAccess({
    navigator,
    user,
  }: ICreateAccessAnalytics.PARAMS): Promise<void> {
    const oldAccess = await AccessAnalyticsModel.findOne({
      user: { email: user?.email },
    });

    await AccessAnalyticsModel.updateOne(
      { user: { email: user?.email } },
      { user, navigators: [...(oldAccess?.navigators || []), navigator] },
      { upsert: true },
    );
  }
}
