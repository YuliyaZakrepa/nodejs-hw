import mongoose from 'mongoose';

const connectMongoDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;
    await mongoose.connect(mongoUrl);
    console.log('✅ MongoDB connection established successfully');
  } catch (error) {
    console.log('Failed connect database', error.message);
    throw error;
  }
};
export default connectMongoDB;
