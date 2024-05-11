const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false // Pour éviter que le mot de passe soit renvoyé lors de la lecture des données utilisateur
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

// Vous pouvez ajouter des méthodes personnalisées ou des hooks ici, par exemple, pour le cryptage du mot de passe.

const User = mongoose.model('User', userSchema);

module.exports = User;
