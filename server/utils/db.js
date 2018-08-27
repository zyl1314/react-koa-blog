const dbConfig = require('../config').db;
const MongoClient = require('mongodb').MongoClient;
const url = dbConfig.url;
const dbname = dbConfig.dbname;

async function connect() {
  const client = await new Promise(resolve => {
    MongoClient.connect(url, (err, client) => {
      if(err) throw err;
      resolve(client);
    })
  })
  return client;
}

async function findOne(db, collectionName, query) {
  const collection = db.collection(collectionName);
  const result = await new Promise(resolve => {
    collection.findOne(query, (err, doc) => {
      if(err) throw err;
      resolve(doc);
    });
  })
  return result;
}

async function find(db, collectionName, query, skip, limit) {
  const collection = db.collection(collectionName);
  const result = await new Promise(resolve => {
    collection.find(query).skip(skip).limit(limit).toArray((err, docs) => {
      if(err) throw err;
      resolve(docs);
    })
  })
  return result;
}

async function queryLen(db, collectionName, query) {
  const collection = db.collection(collectionName);
  const result = await new Promise(resolve => {
    collection.count(query, (err, len) => {
      if(err) throw err;
      resolve(len);
    });
  })
  return result;
}

const wrap = (action) => {
  return async function(...arguments) {
    const client = await connect();
    const db = client.db(dbname);
    const result = await action(db, ...arguments);
    client.close();
    return result;
  }
}

module.exports = {
  findOne: wrap(findOne)
}