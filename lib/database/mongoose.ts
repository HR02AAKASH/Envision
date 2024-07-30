import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  con: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    con: null,
    promise: null,
  };
}

export const connectToDatabase = async () => {
  if (cached.con) return cached.con;
  if (!MONGODB_URL) throw new Error("miss Mongoose DB url is not defined");
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "Envision",
      bufferCommands: false,
    });
  cached.con = await cached.promise;
  return cached.con;
};
