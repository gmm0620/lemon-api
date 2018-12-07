var express = require('express');
var router = express.Router();

var query = require('../mysql');
var sql = require('../mysql/sql');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;