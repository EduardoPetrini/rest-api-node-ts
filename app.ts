import dotenv from 'dotenv';

import { app } from './src/server';
import log from './src/logger';
import connect from './src/database';

dotenv.config();

const port = (process.env.PORT || 1337) as number;
const host = (process.env.HOST || 'localhost') as string;

app.listen(port, host, () => {
  log.info(`Server listing at http://${host}:${port}`);
  connect();
});
