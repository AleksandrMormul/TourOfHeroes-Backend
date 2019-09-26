const mongo = require('mongoose');
const Schema = mongo.Schema;

let Hero = new Schema({
  name: {
    type: String
  }
},
  {
    collection: 'heroes'
  });

module.exports = mongo.model('Hero', Hero);




