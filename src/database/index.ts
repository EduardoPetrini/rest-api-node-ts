import mongoose from 'mongoose';
import log from '../logger';

function connect() {
  const dbUri = process.env.DB_CONNECTION as string;

  return mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    log.info('Database Connected');
  }).catch(error => {
    log.error(`Database Connection ERROR: ${error.message}`, error);
    process.exit(1);
  })
};

export default connect;