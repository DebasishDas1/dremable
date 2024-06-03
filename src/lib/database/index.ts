import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is missing');
}

// Declare a global type to avoid TypeScript errors
declare global {
  var mongoose: {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Connection> | null;
  };
}

// Check if there is a cached connection in the global scope
let cached = global.mongoose || { conn: null, promise: null };

// Save the cached connection in the global scope for reuse
global.mongoose = cached;

export const connectToDatabase = async (): Promise<mongoose.Connection> => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: 'Dremable',
      bufferCommands: false,
    }).then(mongoose => mongoose.connection);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
