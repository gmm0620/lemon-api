module.exports = {
    //创建用户
    'ADD_USER': 'insert into userlist (uid,nick_name) values(?,?)',
    //查询图标列表
    'SELECT_ICON_LIST': 'select * from iconlist',
    //添加分类图标
    'ADD_CLASSIFY': 'insert into classify (cid,c_icon,c_name,type,uid) values(?,?,?,?,?)',
    //查询分类是否存在
    'ISHAS_CLASSIFY': 'select * from classify where (uid="*" or uid=?) and c_name=? and type=?',
    //查询所有分类
    'SELECT_ALL_C': 'select * from classify where (uid="*" or uid=?)',
    //添加账单
    'ADD_BILL': 'insert into bill_list (lid,uid,timer,cid,money) values(?,?,?,?,?)',
    //按年查询账单
    'SELECT_YEAR_BILL': 'select b.*,c.c_icon,c_name,type from bill_list b,classify c,userlist u where b.uid=? and b.cid=c.cid and b.uid=u.uid and date_format(b.timer,"%Y")=?',
    //按月查询账单
    'SELECT_MONTH_BILL': 'select b.*,c.c_icon,c_name,type from bill_list b,classify c,userlist u where b.uid=? and b.cid=c.cid and b.uid=u.uid and date_format(b.timer,"%Y-%m")=?',
    //按年+分类查询
    'SELECT_YEAR_CBILL': 'select b.*,c.c_icon,c_name,type from bill_list b,classify c,userlist u where b.uid=? and b.cid=c.cid and b.uid=u.uid and date_format(b.timer,"%Y")=? and c.c_name in (?)',
    //按月+分类查询
    'SELECT_MONTH_CBILL': 'select b.*,c.c_icon,c_name,type from bill_list b,classify c,userlist u where b.uid=? and b.cid=c.cid and b.uid=u.uid and date_format(b.timer,"%Y-%m")=? and c.c_name in (?)',
    //删除账单
    'DELETE_BILL': 'delete from bill_list where lid=?'
}