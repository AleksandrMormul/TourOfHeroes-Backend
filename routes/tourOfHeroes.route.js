const express = require('express');
const app = express();
const tourOfHeroesRoute = express.Router();

let Hero = require('../model/Hero');

tourOfHeroesRoute.route('/').get((req, res) => {
  Hero.find(function (err, heroes){
    if(err){
      console.log(err);
    }
    else {
      res.json(heroes);
    }
  });
});

/*
tourOfHeroesRoute.route('/api').get(function (req, res) {
  Hero.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
*/


module.exports = tourOfHeroesRoute;
