const express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors');

const tourOfHeroesRoute = require('./routes/tourOfHeroes');
const app = express();


app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use('/', tourOfHeroesRoute);

const port = process.env.PORT || 3000;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});
