const express = require('express');
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser')


// app using
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


// routes
const projectsRoute = require('./routes/projects');
app.use('/api/projects', projectsRoute);


db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on: http://localhost:${PORT}`);
  });
});