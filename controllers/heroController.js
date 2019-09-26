const Hero = require('../model/Hero');
const db = require('../model/connectionDB');
db.db;

exports.hero_detail = function(req, res) {
  Hero.find(async (err, heroes) => {
    try {
     await res.json(heroes);
    } catch (err) {
      console.log(err);
    }
  });
};

exports.hero_get = function(req, res) {
  const id = req.params.id;
    Hero.findOne({_id: id}, async (err, heroes) => {
      try {
        await res.send(heroes);
      }
      catch (err) {
        console.log(err);
      }
    });
};

exports.hero_post = function(req, res) {
  if(!req.body) return res.sendStatus(400);
  const nameHero = req.body.name;
  const hero = new Hero({name: nameHero});
  hero.save(async err => {
    try {
      await res.send(hero);
    } catch (err) {
      console.log(err);
    }
  });
};

exports.hero_delete = function(req, res) {
  const id = req.params.id;
  Hero.findByIdAndDelete(id, async(err, heroes) => {
    try {
      await res.send(heroes);
    }
    catch (err) {
      console.log(err);
    }
  });
};

exports.hero_update = function(req, res) {
  if(!req.body) return res.sendStatus(400);
  const id = req.body._id;
  const heroName = req.body.name;
  const newHero = {name: heroName};
  Hero.findOneAndUpdate({_id: id}, newHero, {new: true}, async (err, hero) => {
    try {
      await res.send(hero);
    } catch (err) {
      console.log(err);
    }
  });
};


