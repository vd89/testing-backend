import { connect } from 'mongoose';
import config from '../../config/config';

const mongoOpt = {
 keepAlive: true,
 useNewUrlParser: true,
 useUnifiedTopology: true,
 useCreateIndex: true,
 useFindAndModify: false,
 serverSelectionTimeoutMS: 50000,
 socketTimeoutMS: 50000,
};

const dbController = async () => {
 try {
  await connect(config.mongoUri, mongoOpt);
  console.info('Connected to Mongo Server');
 } catch (err) {
  console.error(err.message);
 }
};

export default dbController;
