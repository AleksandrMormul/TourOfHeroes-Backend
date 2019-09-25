const Hero = require('../model/Hero');
const db = require('../model/connectionDB');
db.db;

exports.hero_detail = function(req, res) {
  Hero.find(function (err, heroes){
    if(err){
      console.log(err);
    }
    else {
      res.json(heroes);
    }
  });
};

exports.hero_get = function(req, res) {
  const id = req.params.id;
  Hero.findOne({_id: id}, function(err, heroes){
    if(err) return console.log(err);
    res.send(heroes);
  });
};

exports.hero_post = function(req, res) {
  if(!req.body) return res.sendStatus(400);
  const nameHero = req.body.name;
  const hero = new Hero({name: nameHero});
  hero.save(function(err){
    if(err) return console.log(err);
    res.send(hero);
  });
};

exports.hero_delete = function(req, res) {
  const id = req.params.id;
  Hero.findByIdAndDelete(id, function(err, heroes){
   if(err) return console.log(err);
      res.send(heroes);
    });
};

exports.hero_update = function(req, res) {
  if(!req.body) return res.sendStatus(400);
  const id = req.body._id;
  const heroName = req.body.name;
  const newHero = {name: heroName};
  Hero.findOneAndUpdate({_id: id}, newHero, {new: true}, function(err, hero){
    if(err) return console.log(err);
    res.send(hero);
  });
};


