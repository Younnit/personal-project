const express = require("express");
const massive = require("massive");
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const path = require("path");

const authCTRL = require("./controllers/authController");
const productsCTRL = require("./controllers/productsController");
const positionsCTRL = require("./controllers/positionController");
const emailCTRL = require("./controllers/emailController");

const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env;

const app = express();

// FIRST STEP TO GO ONLINE(LAST STEP AT THE BOTTOM)
app.use(express.static(__dirname + "/../build"));


app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
  })
);

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((db) => {
    app.set("db", db);
    console.log("Database Connected");
    app.listen(SERVER_PORT, () =>
      console.log(`Server running on port: ${SERVER_PORT}`)
    );
  })
  .catch((err) => console.log(err));

// AUTHORIZATION
app.post("/auth/register", authCTRL.register);
app.post("/auth/login", authCTRL.login);
app.get("/auth/logout", authCTRL.logout);

// PRODUCTS
app.get("/api/products", productsCTRL.getTheProducts);

// MARKERS
app.get("/api/positions", positionsCTRL.getPositions);
app.post("/api/create", positionsCTRL.createPosition);
app.delete("/api/delete/:position_id", positionsCTRL.deletePosition);

// EMAILS
app.post("/api/emails", emailCTRL.addEmail);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
app.use(cookieParser());

const { sendEmail } = require("./mailer");

app.post("/api/sendMail", (req, res) => {
  console.log(req.body);

  sendEmail(req.body.email, "hello");
});

// FINAL STEP TO GO ONLINE
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});
