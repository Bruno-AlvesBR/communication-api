import { connect } from 'mongoose';

connect(process.env.MONGODB_URL).then(() => console.log('MongoDB connected!'));
