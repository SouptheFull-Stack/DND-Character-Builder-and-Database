const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");
const withAuth = require("./utils/auth");
const openai = require("openai");
client = new openai.OpenAI({
  apiKey: "dXi64eWezDx0qvUvMwMfT3BlbkFJhiZrn6aKcSp82MBRiMbt",
});
// sk - maprojectbot -

// add random number generator
const rn = require("random-number");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ withAuth, helpers });

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

// use the random number package???
app.get("/roll", (req, res) => {
  const sides = parseInt(req.query.sides);
  const result = rn({ min: 1, max: sides, integer: true });
  res.json({ result });
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log("Now listening at http://localhost:3001/")
  );
});
