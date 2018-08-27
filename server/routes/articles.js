const { find, queryLen } = require('../utils/db');

module.exports = async ctx => {
  const {owner, pageSize, pageNum} = ctx.query;
  const query = owner ? { owner } : null;
  const skip = (pageNum - 1) * pageSize;
  const limit = pageSize;
  await Promise.all([find('articles', query, skip, limit), queryLen('articles', query)]).then(rowData => {
    const [articles, total] = rowData;
    ctx.body = {
      respCode: '0',
      respData: {
        total,
        articles
      }
    }
  }).catch(err => {
    ctx.body = {
      respCode: '-1',
      errMsg: 'internal error'
    }
  })
}