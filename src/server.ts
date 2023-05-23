import express from 'express';
import DatabaseConnection  from './database/connection'; 

const app = express();
const databaseURL = 'mongodb://localhost:27017/genDb';

const dbConnection = new DatabaseConnection();

dbConnection.connect(databaseURL)
  .then(() => {
    app.listen(3000, () => {
      console.log('Server running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  });
