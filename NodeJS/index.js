const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true}));

app.use(express.static(__dirname + "/views"));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/registrarPokemon', (req, res) => {
  var user = req.body.user;
  var pass = req.body.pass;
  console.log(req.body.nombrepokemon);
  console.log(req.body.peso);
  console.log(req.body.altura);
  console.log(req.body.tipo);
  res.send('Registrado!!')
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


