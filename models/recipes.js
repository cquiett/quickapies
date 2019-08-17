const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {type: String, require: true},
  image: String,
  ingredients: String,
  cookTime: String,
  numOfServ: Number,
  instructions: String,
  tags: String,
  userId: String
});

const Recipes = mongoose.model('Recipe', recipeSchema);

module.exports = Recipes;
