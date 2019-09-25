const mongo = require('mongoose');
const configDb = require('../settings/connection');
mongo.Promise = global.Promise;

module.exports.db = mongo.connect(configDb.connection,{
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false}).then(
  () => {
    console.log('Database is connected!')
  },
  err => {
    console.log('Can not connect to the database' + err)
  }
);
