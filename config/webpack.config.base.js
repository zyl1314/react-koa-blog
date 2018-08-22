// set alias
const alias = {};
const path = require('path');
const fs = require('fs');
const { appSrc } = require('./paths');
const resolve = (relativePath) => {
  return path.resolve(appSrc, relativePath);
}
const dirs = fs.readdirSync(appSrc);
dirs.forEach(d => {
  const state = fs.statSync(resolve(d));
  if (state.isDirectory()) {
    alias[`@${d}`] = resolve(d);
  }
})

module.exports = {
  resolve: {
    alias
  }
}