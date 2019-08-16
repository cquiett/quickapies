const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: String,
  image: String,
  ingredients: String,
  cookTime: String,
  numOfServ: Number,
  instructions: String,
  tags: String
});

const Recipes = mongoose.model('Recipe', recipeSchema);

module.exports = Recipes;
