import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const MONGODB_URI = process.env.MONGODB_URI;

async function testDB() {
  if (!MONGODB_URI) {
    console.error("MongoDB URI is missing! Check your .env.local file.");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Successfully connected to MongoDB!");
    mongoose.connection.close(); // Close connection after test
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
}

testDB();
