import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoUri = process.env.MONGO_URI;

console.log("Testing MongoDB Connection...");
console.log("Connection String:", mongoUri);

if (!mongoUri) {
  console.error("ERROR: MONGO_URI is not set in .env file");
  process.exit(1);
}

async function testConnection() {
  try {
    console.log("Attempting to connect...");
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 5000,
    });
    console.log("✅ MongoDB Connected Successfully!");
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("❌ Connection Failed:");
    console.error("Error Code:", error.code);
    console.error("Error Message:", error.message);
    console.error("Full Error:", JSON.stringify(error, null, 2));
    process.exit(1);
  }
}

testConnection();
