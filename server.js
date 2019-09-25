const express = require('express'),
  path = require('path'),
  mongoose = require('mongoose');
  bodyParser = require('body-parser'),
  cors = require('cors'),
  Heroes = require('./model/Hero');

const tourOfHeroesRoute = require('./routes/tourOfHeroes.route');
const app = express();
const jsonParser = express.json();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use('/api', tourOfHeroesRoute);

const port = process.env.PORT || 4000;

//const hero = mongoose.model('Hero');

app.post('/api', jsonParser, function (req, res) {
  if(!req.body) return res.sendStatus(400);
  //const idHero = req.body.id;
  const nameHero = req.body.name;
  const hero = new Heroes({name: nameHero});
  hero.save(function(err){
    if(err) return console.log(err);
    res.send(hero);
  });
});

app.get("/api/heroes/:id", function(req, res){
  console.log(req.params);
  const id = req.params.id;
  Heroes.findOne({_id: id}, function(err, heroes){
    if(err) return console.log(err);
    res.send(heroes);
  });
});

app.delete("/api/heroes/:id",  async (req, res) => {
  const id = req.params.id;
  try {
    await Heroes.findByIdAndDelete(id);
    res.send({});
  } catch(error) {
    throw error;
  }

  // Heroes.findByIdAndDelete(id, function(err, heroes){
  //   if(err) return console.log(err);
  //   res.send(heroes);
  // });
});

app.put("/api", jsonParser, function(req, res){
  if(!req.body) return res.sendStatus(400);
  const id = req.body._id;
  const heroName = req.body.name;
  const newHero = {name: heroName};
  Heroes.findOneAndUpdate({_id: id}, newHero, {new: true}, function(err, hero){
    if(err) return console.log(err);
    res.send(hero);
  });
});

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});
