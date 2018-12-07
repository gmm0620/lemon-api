/*
 * @Author: 郭敏敏 
 * @Date: 2018-12-07 18:20:31 
 * @Last Modified by: 郭敏敏
 * @Last Modified time: 2018-12-07 20:12:29
 */

var mysql = require('mysql');

var pool = mysql.createPool({
    user: 'root',
    password: 'root',
    database: 'lemon',
    port: 3306,
    host: 'localhost',
    connectionLimit: 100
});

module.exports = function(sql, query, fn) {
    fn = fn ? fn : query;
    query = query || [];
    pool.getConnection(function(error, con) {
        if (error) {
            fn(error)
        } else {
            con.query(sql, query, function(err, results) {
                ck(err, results)
            });
        }

    })

    function ck(err, results) {
        if (error) {
            fn(error);
        } else {
            fn(null, results);
        }
    }
}