var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET projects listing. */
router.get('/', async (req, res, next) => {
  try{
    let results = await db.all();
    res.json(results);
  } catch(e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
