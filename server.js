// =========================
// Dependencies
// =========================

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

require("dotenv").config();

const app = express();

// =========================
// Configurations
// =========================

<<<<<<< HEAD
const port = process.env.PORT || 3005;

const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
=======
const port = 3005;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
>>>>>>> 05599922772a8d3e0058d743ba99367c1433070e
mongoose.connection.once("open", () => {
  console.log("Connected to Mongoose.");
});

// ==========================
// Fix Deprecation Warnings
// ==========================

<<<<<<< HEAD
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
=======
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
>>>>>>> 05599922772a8d3e0058d743ba99367c1433070e

// ==========================
// Middleware
// ==========================

app.use(express.static("public"));
app.use(express.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
  }));

<<<<<<< HEAD
// ==========================
=======
  // ==========================
>>>>>>> 05599922772a8d3e0058d743ba99367c1433070e
// Listener
// ==========================

app.listen(port, () => {
  console.log("I'm totes listenin' on port: " + port);
});
