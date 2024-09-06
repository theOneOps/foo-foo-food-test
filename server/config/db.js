const mongoose = require('mongoose');
const initializeDatabase = require('../utils/initializeData')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI).then(console.log("mongodb connected"))
    await initializeDatabase()
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);  // Arrête l'application si la connexion échoue
  }
};

module.exports = connectDB;