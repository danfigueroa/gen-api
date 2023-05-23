import mongoose, { MongooseOptions } from 'mongoose'

class DatabaseConnection {
  private connectionOptions: MongooseOptions;

  constructor() {
    this.connectionOptions = {
      // TODO: Add connection options
    };
  }

  public async connect(databaseURL: string): Promise<void> {
    try {
      await mongoose.connect(databaseURL, this.connectionOptions);
      console.log('Connected to the database successfully!');
    } catch (error) {
      console.error('Error connecting to the database:', error);
      throw error;
    }
  }

  public disconnect(): Promise<void> {
    return mongoose.disconnect();
  }
}

export default DatabaseConnection;
