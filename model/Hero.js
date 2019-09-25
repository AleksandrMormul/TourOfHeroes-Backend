const mongo = require('mongoose');
const Schema = mongo.Schema;

//configDb.hz;

/*mongo.Promise = global.Promise;

mongo.connect(configDb.connection,{useUnifiedTopology: true, useNewUrlParser: true}).then(
  () => {
    console.log('Database is connected!')
  },
  err => {
    console.log('Can not connect to the database' + err)
  }
);*/

let Hero = new Schema({
  name: {
    type: String
  }
},
  {
    collection: 'heroes'
  });

module.exports = mongo.model('Hero', Hero);




