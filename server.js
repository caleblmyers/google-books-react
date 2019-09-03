const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors")
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(cors())

// Define API routes here
app.use(require("./routes"))

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://cmyers5108:Erebor4online@ds215988.mlab.com:15988/heroku_g336cdt7"
mongoose.connect(MONGODB_URI)

// Send every other request to the React app
// Define any API routes before this runs
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
