import http from 'http';
import app from './app.js';
import * as config from './utils/config.js';
import { info } from './utils/logger.js';

const server = http.createServer(app);

server.listen(config.PORT, info(`listening on ${config.PORT}`));
