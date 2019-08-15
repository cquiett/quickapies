//================================
//         DEPENDENCIES
//================================
const express = require('express');
const router = express.Router();
const session = require('express-session');
//================================
//         DATA
//================================
const Recipes = require('../models/recipes.js')
//================================
//         ROUTES
//================================
/////////  INDEX ROUTE ///////////
router.get('/', (req, res) => {
  Recipes.find({}, (error, foundRecipes) => {
    res.json(foundRecipes)
  })
})
//////// DELETE ROUTE ////////////
router.delete('/:id', (req, res) => {
  Recipes.findByIdAndRemove(req.params.id, (error, deletedRecipe) => {
    res.json(deletedRecipe)
  })
})
/////////// UPDATE ROUTE ////////////
router.put('/:id', (req, res) => {
  Recipes.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedRecipe) => {
    res.json(updatedRecipe)
  })
})
////////// CREATE ROUTE ////////////
router.post('/', (req, res) => {
  Recipes.create(req.body, (error, createdRecipe) => {
    res.json(createdRecipe)
  })
})
module.exports = router;
