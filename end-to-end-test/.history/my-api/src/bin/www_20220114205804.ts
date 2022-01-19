import { debug } from 'debug';
import http from 'http';
import app from '../app';

const debugApp = debug('my-api');
const port = process.env.PORT || '3000';

app.set('port', port);

const server = http.createServer(app);
