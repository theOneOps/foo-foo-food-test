const mongoose = require("mongoose");
const Users = require('../models/users');

class userController {
  // Récupérer tous les utilisateurs
  static async getAllUsers(req, res) {
    try {
      const allUsers = await Users.find()
      return res.status(200).json(allUsers);
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  // Ajouter un nouvel utilisateur
  static async postUser(req, res) {
    const { name, email } = req.body;
    try {
      let newUser;
      if (req.body.activities)
        newUser = new Users({ name, email, activities: req.body.activities});
      else
        newUser = new Users({ name, email });
      await newUser.save();
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(400).json({ message: 'Error creating user', error: error.message });
    }
  }

  // Supprimer un utilisateur par nom
  static async deleteUserByName(req, res) {
    const { name } = req.params;
    try {
      const user = await Users.findOne({ name });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      await Users.deleteOne({ name });
      return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  }

  // Récupérer un utilisateur par nom
  static async getUserByName(req, res) {
    const { name } = req.params;  // Utilise req.params pour accéder aux paramètres d'URL
    try {
      const user = await Users.findOne({ name });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  }
  

  // Ajouter une activité à un utilisateur
  static async addActivityToUser(req, res)
  {
    const {name, activity} = req.body
    try {
      const theUser = await Users.findOne({name})
      if (!theUser)
        return res.status(404).json({ message: 'User not found' })
      theUser.activities.push(activity)
      await theUser.save()
      return res.status(200).json({ message: 'Activity added successfully', user: theUser });
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  }
}

module.exports = userController;
