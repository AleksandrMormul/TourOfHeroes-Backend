const mongo = require('mongoose');
const configDb = require('./connection');
const Schema = mongo.Schema;

mongo.Promise = global.Promise;

mongo.connect(configDb.connection,{useUnifiedTopology: true, useNewUrlParser: true}).then(
  () => {
    console.log('Database is connected!')
  },
  err => {
    console.log('Can not connect to the database' + err)
  }
)



let Hero = new Schema({
  name: {
    type: String
  }
},
  {
    collection: 'heroes'
  });

module.exports = mongo.model('Hero', Hero);




