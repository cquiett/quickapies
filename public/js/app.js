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
              this.loggedInUserId = null;
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
            this.loggedInUserId = response.data._id
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
  this.indexOfEditForm = false;
  this.alreadyVoted = false;

  this.includePath = 'partials/app.html'

  this.changeInclude = (path) => {
    this.includePath = 'partials/' + path + '.html'
  }

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

  this.createRecipe = function (user) {
    $http({
      method: "POST",
      url: "/recipes",
      data: {
        name: this.name,
        image: this.image || '/images/placeholder.png',
        ingredients: this.ingredients,
        cookTime: this.cookTime,
        numOfServ: this.numOfServ,
        instructions: this.instructions,
        tags: this.tags,
        userId: user
      }
    }).then(function(response) {
      controller.name = null;
      controller.image = null;
      controller.ingredients = null;
      controller.cookTime = null;
      controller.numOfServ = null;
      controller.instructions = null;
      controller.tags = null;
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
      controller.indexOfEditForm = !controller.indexOfEditForm;
      controller.saveOne(response.data);
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
      controller.currentRecipeShow = false;
      controller.getRecipes();
    }, function(error) {
      console.log(error);
    });
  };

  this.saveOne = function (recipe, user) {
    this.currentRecipe = recipe;
    this.currentRecipeShow = true;
    this.indexOfEditForm = false;
    this.alreadyVoted = false;
    for (let i=0; i < this.currentRecipe.userVote.length; i++) {
      if (this.currentRecipe.userVote[i] === user) {
        this.alreadyVoted = true;

      }
    }
  }

  this.likeRecipe = function (recipe, user) {
    this.currentRecipe = recipe;
    if (this.currentRecipe.numOfLikes === undefined) {
      this.currentRecipe.numOfLikes = 1;
    } else {
      this.currentRecipe.numOfLikes += 1;
    }
    this.currentRecipe.userVote.push(user);
    this.saveOne(this.currentRecipe, user);
    this.alreadyVoted = true;
    $http({
      method: "PUT",
      url: "/recipes/" + recipe._id,
      data: this.currentRecipe
    }).then(function(response) {
      console.log(response.data);
    }, function(error) {
      console.log(error);
    });
  };

  this.dislikeRecipe = function (recipe, user) {
    this.currentRecipe = recipe;
    if (this.currentRecipe.numOfDislikes === undefined) {
        this.currentRecipe.numOfDislikes = -1;
      } else {
        this.currentRecipe.numOfDislikes -= 1;
      }
      this.currentRecipe.userVote.push(user);
      this.saveOne(this.currentRecipe, user);
      this.alreadyVoted = true;
      $http({
        method: "PUT",
        url: "/recipes/" + recipe._id,
        data: this.currentRecipe
      }).then(function(response) {
        console.log(response.data);
      }, function(error) {
        console.log(error);
      });

  };

  this.getRecipes();

}]);

  app.controller("SearchController",function($scope){
    $scope.searchBox = {}
    $scope.searchBy = '$'
  });
