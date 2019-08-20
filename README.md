# Quickapies
Search, create and sort through a collection of quick recipes!

Collaborators: Becka Catanzaro, Yulli Chong, Carramah Quiett


## Table Of Contents
* [Introduction](#introduction)
* [Technologies](#dependencies)
* [Illustration](#illustration)
* [Scope of Functionalities](#scope-of-functionalities)
* [Setup/Examples of Use](#setup/examples-of-use)
* [Project Status](#project-status)
* [Sources](#sources)


## Introduction
Quickapies is a recipe app which allows a user to search for recipes that take less than 30 minutes of total time to prepare.  As a group project for the Software Engineering Immersive course at General Assembly, we decided to develop Quickapies for those who want to eat homemade meal, but don’t’ have much time to cook or prepare a meal.

## Technologies
* JavaScript
* HTML
* CSS
* AngularJS
* Heroku
* GitHub
* MongoDB

## Dependencies
* Express - version 4.17.1
* Express-Session - version 1.16.2
* bcrypt - version 3.0.6
* Mongoose - version 5.6.9
* dotenv - version 8.0.0


## Illustration
![Example quickapies_app](./public/images/readme/quickapies_app.png)

## Scope of Functionalities
* Create User/Login/Password.
* Only users can add new recipes.
* Only the recipe creator can edit or delete their particular recipe(s).
* Anyone can see the list of recipes available in the app.
* Anyone can search through the recipes in the database and view the recipe card.
* Flexible design – mobile view vs browser view.
* Users can “Like” and “Dislike” the recipes.
* Each recipe provides: ingredients, instructions, image, cook/prep time, tags.


## Setup/Examples of Use
* Anyone can search for a recipe.
![Example add_search](./public/images/readme/anyone_search.png)

* If you don’t have an account, create a user – Click on “Create User” to enter a “username” and “password”.
![Example create_user](./public/images/readme/create_user.png)

* Log In – Click on “Log In” to enter your “username” and “password”.
![Example user_login](./public/images/readme/user_login.png)

* After logging in, Quickapies takes you to the “Welcome” screen where the logged in user can add, edit, and delete their particular a recipe.
![Example logged_in](./public/images/readme/adding_recipe.png)
![Example add_recipe](./public/images/readme/recipe_added.png)

* Another example of searching for a recipe.
![Example login_search](./public/images/readme/loggedin_search.png)

## Project Status
While working on this project:
* We tried to install a free recipe API. However, the free APIs we found did not include recipe instructions in their database.
* Attempted to install a "Like/Dislike" system.

After submitting this project we plan to:
* Improve on the login system.
* Improve our "Like/Dislike" system so we can control how many times a user like or dislike a recipe.
* Install a recipe API that provides recipe instructions to be displayed with the recipe on our app.

## Sources
* Plunker: http://plnkr.co/edit/XklvXtc1AZpndjLvXrh8?p=preview
- Used for searching the recipes
* Class Notes
* BULLDOGJOB: https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project
- Used for writing our README.md. 
