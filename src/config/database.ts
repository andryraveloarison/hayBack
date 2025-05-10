import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb+srv://andryraveloarison01:anielnananjy01@cluster0.lq6oqrv.mongodb.net/hay");
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};
