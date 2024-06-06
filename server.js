// importing the needed packages/modules
const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const sequelize = require("./config/connection");
// add pg as well ? ^ any others i'm missing

// setting up express methods
const app = express();
// setting up PORT number for server
const PORT = process.env.PORT || 3001;

// setting up the handlebars template engine for use
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// setting up the middleware for working with json data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// serve static files from the 'public' folder to the user
app.use(express.static(path.join(__dirname, "public")));

// ???
app.use(routes);

// Setting up sequelize module to listen for server requests nad link to the models
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
