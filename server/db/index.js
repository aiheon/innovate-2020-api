const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "coveocommunitydb",
  connectionLimit: 10,
  port: '3306'
});

let coveocommunitydb = {};

coveocommunitydb.all = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM projects', (err, results) => {
      if(err){
        return reject(err);
      }
      return resolve(results);
    });
  });
};


module.exports = coveocommunitydb;