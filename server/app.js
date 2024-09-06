const express = require('express')

const mongoose = require('mongoose')

require('dotenv').config()

const app = express()



//Cette ligne permet au serveur Express de traiter les corps de requêtes au format JSON. 
// Elle est importante pour les routes API qui reçoivent des données JSON, comme les requêtes POST.
app.use(express.json());

const connectDB = require('./config/db')

connectDB()

// importation des routes

const usersRoute = require('./routes/userRoute')

// Utilisation des routes
app.use('/api/users', usersRoute);  // API pour les users


// Lancement du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
