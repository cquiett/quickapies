const app = angular.module("QuickapieApp", []);

app.controller("MainController", ["$http", function($http) {
  const controller = this;

  this.getRecipes = function () {
    $http({
      method: "GET",
      url: "/recipes"
    }).then(function(response) {
      controller.recipes = response.data;
    }, function(error) {
      console.log(error);
    });
  };

  this.createRecipe = function () {
    $http({
      method: "POST",
      url: "/recipes",
      data: {
        name: this.name,
        image: this.image,
        ingredients: this.ingredients,
        cookTime: this.cookTime,
        numOfServ: this.numOfServ,
        instructions: this.instructions,
        tags: this.tags
      }
    }).then(function(response) {
      controller.getRecipes();
    }, function(error) {
      console.log(error);
    });
  };

  this.editRecipe = function (recipe) {
    $http({
      method: "PUT",
      url: "/recipes/" + recipe._id,
      data: {
        name: this.updatedName,
        image: this.updatedImage,
        ingredients: this.updatedIngredients,
        cookTime: this.updatedCookTime,
        numOfServ: this.updatedNumOfServ,
        instructions: this.updatedInstructions,
        tags: this.updatedTags
      }
    }).then(function(response) {
      console.log(response.data);
      controller.getRecipes();
    }, function(error) {
      console.log(error);
    });
  };

  this.deleteRecipe = function (recipe) {
    $http({
      method: "DELETE",
      url: "/recipes/" + recipe._id
    }).then(function(response) {
      controller.getRecipes();
    }, function(error) {
      console.log(error);
    });
  };

}]);
