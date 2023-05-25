import { MongoClient } from 'mongodb';

const mongoURL = 'mongodb://localhost:27017/genDb';

async function connectToDatabase() {
  try {
    const client = await MongoClient.connect(mongoURL);
    const db = client.db(); 
    console.log('Connected to MongoDB');
    return db;
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
};

export default connectToDatabase;
