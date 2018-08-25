const dbUtils = require('../utils/db');

module.exports = {
  async detail(uid) {
    try {
      const result = await dbUtils.findOne('user', { uid });
      return {
        code: '0',
        respData: result
      }
    } catch (err) {
      return {
        code: '-1',
        errMsg: 'somthing error'
      }
    }
  }
}