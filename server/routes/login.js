const { findOne } = require('../utils/db');

module.exports = async ctx => {
  const { username, password } = ctx.request.body;
  await findOne('user', { username }).then(rowData => {
    const { username: _username, password: _password } = rowData || {};
    if(!_username) {
      ctx.body = {
        respCode: '-1',
        errMsg: '用户名不存在'
      }
      return;
    }

    if(password !== _password) {
      ctx.body = {
        respCode: '-1',
        errMsg: '密码错误'
      }
      return;
    } 

    ctx.body = {
      respCode: '0',
      respData: {
        user: rowData
      }
    }
  }).catch(err => {
    ctx.body = {
      respCode: '-1',
      errMsg: 'internal error'
    }
  })
}