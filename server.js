const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");

const http = require("http");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  name: "h4K3",
  secret: "Super secret secret",
  cookie: {
    // Stored in milliseconds (86400 === 1 day)
    maxAge: 86400,
    sameSite: "strict",
    // secure: true,
    httpOnly: true,
  },
  resave: false,
  // here saveUninitialized was set to true
  saveUninitialized: false,
  //'express-session'  monitors the expiration of the sessions living on the DB every 15mins, and if they expire then it removes them automatizally from the DB
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const httpServer = http.createServer(app);

// Set up sessions
app.use(session(sess));
// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Inform Express.js on which template engine to use
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
