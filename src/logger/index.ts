import logger from 'pino';
import { DateTime } from 'luxon';

const log = logger({
  prettyPrint: true,
  base: {
    pid: false
  },
  timestamp: () => `,"time":"${DateTime.local().toFormat('yyyy-LL-dd HH:mm:ss')}"`
});

export default log;