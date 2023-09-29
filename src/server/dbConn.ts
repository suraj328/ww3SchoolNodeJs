// getStudent
import mongoose from 'mongoose';
import variable from './variable';
//creating connection
const dbUrl:string = variable.dbUrl;
mongoose.connect(dbUrl);
// Check if the connection was successful
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
export default db;