const MOCK_MODE = true;

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  return null;
}

export function isMockMode() {
  return MOCK_MODE;
}

export default connectDB;
