const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
const path = require('path')
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});

//set up login
app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname,'/client/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client','build','index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res.send('API RUNNING')
  })
}