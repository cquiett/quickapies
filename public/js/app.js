const app = angular.module("QuickapieApp", []);

app.controller('AuthController', ['$http', function($http){
  const controller = this;
  this.showNewForm = false;
  this.showLogInForm = false;

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
        this.createdUsername = null;
        this.createdPassword = null;
        this.showNewForm = false;
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
          console.log(response.data);
          this.username = null;
          this.password = null;
          this.showLogInForm = false;
          this.isLoggedIn();
      }, (error) => {
          console.log(error);
          console.log(error.data);
          console.log(this.username, this.password);
      });
    }

    this.logOut = () => {
      $http({
              method: 'DELETE',
              url: '/sessions'
          }).then((response) => {
              console.log(response.data);
              this.loggedInUser = null;
          }, (error) => {
              console.log(error);
          })
    }

    this.isLoggedIn = () => {
      $http({
              method: 'GET',
              url: '/loggedin'
        }).then((response) => {
            this.loggedInUser = response.data.username
            console.log('GOT EDITING RIGHTS');
        }, (error) => {
            console.log(error.data);
        })
    }

}]);

app.controller("MainController", ["$http", function($http) {
  const controller = this;
  this.currentRecipe = null;
  this.currentRecipeShow = false;
  this.indexOfEditForm = null;

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
      controller.indexOfEditForm = null;
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

  this.saveOne = function (recipe) {
    this.currentRecipe = recipe;
    this.currentRecipeShow = true;
  }

  this.getRecipes();

}]);
