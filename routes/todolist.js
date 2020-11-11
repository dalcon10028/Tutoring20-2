var express = require('express');
var router = express.Router();
const getConnection = require('../my_modules/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  getConnection((conn) => {
    conn.query('select * from yeon', (err, result, fields)=>{
      console.log(result);
    });
    conn.release();
  });  
  res.send([
    {id: 1, todo: "asdb"},
    {id: 2, todo: "asdb"}
  ]);
});

router.post('/', function(req, res, next) {
  res.send('post '+ req.body.todo);
});

router.put('/', function(req, res, next) {
  res.send('put');
});

router.delete('/:id', function(req, res, next) {
  res.send('delete '+req.params.id);
});

module.exports = router;
