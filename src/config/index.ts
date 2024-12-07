const dotenv = require('dotenv');
dotenv.config();
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

export default {
  db: {
    url: process.env.MONGODB_URI || '',
    name: process.env.MONGODB_NAME || '',
  },
};
