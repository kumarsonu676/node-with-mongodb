import 'reflect-metadata';

import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import routes from './routes';
import connectDB from './db';

const dotenv = require('dotenv');
dotenv.config();
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();

// Connect to MongoDB
connectDB();

const port = process.env.PORT || 3000;

// Use path.join to create an absolute path to the 'public' directory
const publicPath = path.join(__dirname, '../public');

// Serve static files from the 'public' directory
app.use(express.static(publicPath));

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
});
