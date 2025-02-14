import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

export const connectToDatabase = async (): Promise<void> => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "shambalink",
    });
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};
