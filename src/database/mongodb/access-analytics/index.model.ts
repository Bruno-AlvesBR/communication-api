import { Schema, connection } from 'mongoose';

const communicationDatabase = connection.useDb('communication');

const accessAnalyticsSchema = new Schema(
  {
    navigators: [
      {
        platform: { type: String, required: true },
        language: { type: String, required: true },
        appCodeName: { type: String, required: true },
        userAgent: { type: String, required: true },
        origin: { type: String, required: true },
        path: { type: String, required: true },
      },
    ],
    user: {
      email: { type: String },
      phone: { type: String },
      firstName: { type: String },
      lastName: { type: String },
    },
  },
  { timestamps: true },
);

export const AccessAnalyticsModel = communicationDatabase.model(
  'accessanalytics',
  accessAnalyticsSchema,
);
