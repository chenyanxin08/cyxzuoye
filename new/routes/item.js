var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '652508',
    database : 'new'
});



/* GET home page. */
router.get('/list', function(req, res, next) {
    connection.query('SELECT id,name FROM xinwen', function(err, rows, fields) {
        if (err) throw err;
        res.header("Access-Control-Allow-Origin","*");
        res.send(rows);
    });
});
router.post('/detail', function(req, res, next) {
    var abc=req.body.abc;
    res.header("Access-Control-Allow-Origin","*");
    connection.query('SELECT content FROM xinwen WHERE id='+abc, function(err, rows, fields) {
        res.send(rows);
    });
});
module.exports = router;