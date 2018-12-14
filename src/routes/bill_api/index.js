var query = require('../../mysql');
var sql = require('../../mysql/sql');
var uuid = require('node-uuid');

var addBill = function(req, res, next) {

    var params = req.body,
        uid = params.uid,
        cid = params.cid,
        timer = params.timer,

        money = params.money;

    if (!uid || !cid || !timer || !money) {
        res.json({ code: 4, msg: '缺少参数' })
    } else {
        var lid = uuid.v1();
        query(sql.ADD_BILL, [lid, uid, timer, cid, money], function(err, results) {
            if (err) {
                res.json({ code: 0, msg: err })
            } else {
                res.json({ code: 1, msg: '添加成功' })
            }
        })
    }
}

var getBill = function(req, res, next) {
    var timer = req.query.timer,
        uid = req.query.uid,
        timer_type = req.query.timer_type;
    var classify = req.query.classify || '';

    var classifyArr = [];

    if (!timer || !uid) {
        res.json({ code: 4, msg: '缺失参数' })
    } else {
        var sqlStr;
        if (classifyArr) {
            classifyArr = JSON.parse(classify);
            classify.forEach(item => {
                classifyArr.push(decodeURI(item));
            });
            sqlStr = timer_type == 1 ? sql.SELECT_YEAR_CBILL : sql.SELECT_MONTH_CBILL;
        } else {
            sqlStr = timer_type == 1 ? sql.SELECT_YEAR_BILL : sql.SELECT_MONTH_BILL;
        }

        query(sql.SELECT_YEAR_CBILL, [uid, timer, classifyArr], function(err, results) {
            if (err) {
                res.json({ code: 0, msg: err })
            } else {
                res.json({ code: 1, data: results })
            }
        })
    }
}

var delBill = function(req, res, next) {
    var lid = req.query.lid;

    if (!lid) {
        res.json({ code: 4, msg: '缺少参数' })
    } else {
        query(sql.DELETE_BILL, [lid], function(err, results) {
            if (err) {
                res.json({ code: 0, msg: err })
            } else {
                res.json({ code: 1, msg: '删除成功' })
            }
        })
    }
}
module.exports = {
    addBill: addBill,
    getBill: getBill,
    delBill: delBill
}