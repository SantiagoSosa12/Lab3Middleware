const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true}));

app.use(body_parser.json());
app.use(express.static(__dirname + "/views"));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/registrarPokemon', (req, res) => {
  var user = req.body.user;
  var pass = req.body.pass;
  console.log(request.body.nombrepokemon);
  console.log(request.body.peso);
  console.log(request.body.altura);
  console.log(request.body.tipo);
  res.send('Registrado!!')
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


