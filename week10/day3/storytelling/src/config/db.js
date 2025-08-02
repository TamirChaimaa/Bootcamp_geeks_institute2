import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (retries = 5) => {
  while (retries) {
    try {
      const conn = await mongoose.connect(
        process.env.MONGODB_URI || "mongodb://localhost:27017/form-backend",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      );
      console.log(`MongoDB Connected: ${conn.connection.host}`);
      return;
    } catch (error) {
      console.error(`Connection error: ${error.message}`);
      retries -= 1;
      if (retries === 0) {
        console.error("Failed to connect to MongoDB after multiple retries");
        process.exit(1);
      }
      console.log(`Retrying connection... ${retries} attempts remaining`);
      // Wait for 5 seconds before retrying
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }
};

export default connectDB;
