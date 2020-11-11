const mysql = require('mysql');
const config = require('./db_config.json');

const pool = mysql.createPool(config);

function getConnection(callback) {
  pool.getConnection(function (err, conn) {
    if(!err) {
      callback(conn);
    }
  });
}

module.exports = getConnection;

/*
const getConnection = require('./db');

getConnection((conn) => {
  conn.query(
    ...
  );
  conn.release();
});
*/