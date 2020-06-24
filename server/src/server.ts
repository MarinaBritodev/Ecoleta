import express from 'express';
import routes from './routes';
import cros from 'cors';
import path from 'path';
import { errors } from 'celebrate';

const app = express();

app.use(express.json());

app.use(cros());

app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(errors());
app.listen(3333);