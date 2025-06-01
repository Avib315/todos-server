const db = require("./DL/db.js")
require("dotenv").config();
const express = require("express")
CORS = require("cors"),
    PORT = 3001
const app = express()
db.getConnection().then(connection => {
    console.log('Database connected successfully');
    connection.release();
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });
app.use(CORS());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`\x1b[42m [index.js] server is runing in port ${PORT} \x1b[0m`);
})