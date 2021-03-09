const express = require('express')
const app = express()
const port = 3000
//require('./database/mongo');
const mongoose = require('mongoose');

var schema = mongoose.Schema({
  "name": {type:String},
  "peso": {type:Number},
  "altura": {type:Number},
  "tipo": {type:String}
});

var pokemon = mongoose.model('pokemon',schema);

app.use(express.urlencoded({ extended: true}));
app.use(express.static(__dirname + "/views"));

let pokemons = [];

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/registrarPokemon', (req, res) => {
  var myPokemon = {
    name: req.body.nombrepokemon,
    peso: req.body.peso,
    altura: req.body.altura,
    tipo: req.body.tipo
  };
  pokemons.push(myPokemon);
  console.log(req.body.nombrepokemon);
  console.log(req.body.peso);
  console.log(req.body.altura);
  console.log(req.body.tipo);
  res.send('Registrado!!');
});

app.post('/registrarPokemon', (req, res) => {
  var myPokemon = {
    name: req.body.nombrepokemon,
    peso: req.body.peso,
    altura: req.body.altura,
    tipo: req.body.tipo
  };
  pokemons.push(myPokemon);
  toDatabase(req);
  res.send('Registrado!!');
});



function toDatabase(req){
  mongoose.connect('mongodb://192.168.0.18:27017/mibasededatos' , (err, connection)=>{
    let newPokemon = new pokemon({
      "name": req.body.nombrepokemon,
      "peso": req.body.peso,
      "altura": req.body.altura,
      "tipo": req.body.tipo
    });

    newPokemon.save((err,doc)=>{
      console.log(err);
    });

  });
}

app.get('/pokemons', (req, res) => {
  var lista ='[';
  var i = 0;
  while(i < pokemons.length){
    var elemento = pokemons[i];
    lista += '{ "nombre": "' + elemento.name +'", "peso":'+elemento.peso
    +',"altura":'+elemento.altura+',"tipo":"'+elemento.tipo+'"}' 
    if(pokemons[i + 1] != null){
      lista += ',';
    }
    i++;
  }
  lista += ']';
  res.send(lista);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


