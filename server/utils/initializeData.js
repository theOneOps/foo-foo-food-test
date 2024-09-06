const Users = require('../models/users'); // Assure-toi d'avoir le bon chemin pour le modèle

const initializeDatabase = async () => {
  try {
    const userCount = await Users.countDocuments();
    if (userCount === 0) {
      console.log('No users found. Adding initial data...');
      await Users.create([
        { name: 'John Doe', email: 'john.doe@example.com', activities: [] },
        { name: 'Jane Smith', email: 'jane.smith@example.com', activities: ['karate','boxe','computer Science'] },
      ]);
      console.log('Initial data added.');
    }
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

module.exports = initializeDatabase;
