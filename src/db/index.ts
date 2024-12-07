import mongoose from 'mongoose';
import config from '../config';

const connectDB = async () => {
  try {
    const dbURI = `${config.db.url}/${config.db.name}`;

    await mongoose.connect(dbURI);

    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
