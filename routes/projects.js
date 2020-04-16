var express = require('express');
var router = express.Router();
var db = require('../database');

/* GET projects listing. */
router.get('/projects', function(req, res, next) {
  db.connect();
  
  db.createQuery('SELECT * FROM ­­­­projects', function(err, results, fields) {
    if (!err) {
      console.log(results);
    }
    else {
      console.log(err);
    }
  });
  
  db.end();
  
});

module.exports = router;

