// =========================
// Dependencies
// =========================

const bcypt = require("bcyrpt");
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

require("dotenv").config();

const app = express();

// =========================
// Configurations
// =========================

const port = 3005;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.once("open", () => {
  console.log("Connected to Mongoose.");
});

// ==========================
// Fix Deprecation Warnings
// ==========================

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

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

  // ==========================
// Listener
// ==========================

app.listen(port, () => {
  console.log("I'm totes listenin' on port: " + port);
});
