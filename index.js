// index.js

/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");
const puplib = require('./src/libs/puppeteer');

/**
 * App Variables
 */

 const app = express();
 const port = process.env.PORT || "8081";

/**
 *  App Configuration
 */

 app.set("views", path.join(__dirname, "views"));
 app.set("view engine", "pug");


/**
 * Routes Definitions
 */


 app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
 });

app.get('/start_pup', function (req, res) {
    // Prepare output in JSON format
    console.log("GET start pup");
    puplib.GetPage();
})


/**
 * Server Activation
 */

 app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });