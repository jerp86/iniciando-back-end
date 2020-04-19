import 'reflect-metadata';

import express from 'express';

import routes from './routes';
import uploadConfig from './config/uploads';
import './database';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.diretory));
app.use(routes);

app.listen(3333, () => {
  console.log('\n🚀️ Server started on port 3333!\n');
});
