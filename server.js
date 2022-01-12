require('dotenv').config()

const REACT_APP_OPENWEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ key : `${REACT_APP_OPENWEATHER_API_KEY}` });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});