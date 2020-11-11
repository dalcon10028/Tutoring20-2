var express = require('express');
var router = express.Router();
const getConnection = require('../my_modules/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  getConnection((conn) => {
    conn.query('select * from yeon', (err, result, fields)=>{
      res.send(result);
    });
    conn.release();
  });
});

router.post('/', function(req, res, next) {
  getConnection((conn) => {
    conn.query('insert into yeon(todo) values (?)', [req.body.todo],(err, result, fields)=>{
      res.send(true);
    });
    conn.release();
  });
});

router.put('/', function(req, res, next) {
  console.log(req.body)
  getConnection((conn) => {
    conn.query('update yeon set todo = ? where id = ?', [req.body.todo, req.body.id],(err, result, fields)=>{
      res.send(true);
    });
    conn.release();
  });
});

router.delete('/:id', function(req, res, next) {
  res.send('delete '+req.params.id);
});

module.exports = router;
