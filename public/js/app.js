const app = angular.module("QuickapieApp", []);

app.controller('AuthController', ['$http', function($http){
    const controller =this;

    this.createUser = () => {
      $http({
              method: 'POST',
              url: '/users',
              data: {
                      username: this.createdUsername,
                      password: this.createdPassword
              }
      }).then((response) => {
        console.log(response.data);
        console.log(controller.createdUsername, controller.createdPassword);
      }, (error) => {
        console.log(error);
      })
    }

    this.logIn = () => {
      $http({
              method: "POST",
              url: '/sessions',
              data: {
                      username: this.username,
                      password: this.password
              }
      }).then((response) => {
          controller.username = null;
          controller.password = null;
      }, (error) => {
          console.log(error);
      });
    }
    
}]);

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
