import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const instance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DB_NAME}`
    );
    console.log(`\nMongoDB Connected !! DB HOST: ${instance.connection.host}`);
  } catch (error) {
    console.log("MongoDB Connection FAILED:", error);
  }
};

export default connectDB;
