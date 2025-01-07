import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => console.log("Connected to MongoDB"));
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connection;
