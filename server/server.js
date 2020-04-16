const express = require('express');

// routes
const projectsRoute = require('./routes/projects');


// app using
const app = express();
app.use(express.json());


// use routes
app.use('/api/projects', projectsRoute);




 // listening to port 3000
app.listen(process.env.PORT || '3000', () => {
  console.log(`Server is runnig on port: ${process.env.PORT || '3000'}`);
});