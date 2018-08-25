const dbConfig = require('../config').db;
const MongoClient = require('mongodb').MongoClient;

const url = dbConfig.url;

async function connect() {
  const db = await new Promise(resolve => {
    MongoClient.connect(url, (err, db) => {
      if (err) throw err;
      resolve(db);
    })
  })
  return db;
}

async function findOne(db, collection, limit) {
  const result = db[collection].find(limit);
  return result;
}

const wrap = (action) => {
  return async function(...arguments) {
    const db = await connect();
    const result = await action(db, ...arguments);
    db.close();
    return result;
  }
}

module.exports = {
  findOne: wrap(findOne)
}