export namespace ICreateAccessAnalytics {
  export type PARAMS = {
    navigator: {
      platform: string;
      language: string;
      appCodeName: string;
      userAgent: string;
      origin: string;
      path: string;
    };
    user: {
      email: string;
      phone: string;
      firstName: string;
      lastName: string;
    };
  };
}

export interface IAccessAnalyticsRepository {
  createAccess(params: ICreateAccessAnalytics.PARAMS): Promise<void>;
}
