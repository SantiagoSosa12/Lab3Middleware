
const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + "/views"));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/registarPokemon', (req, res) => {
  console.log(request.body.user.nombrepokemon);
  console.log(request.body.user.peso);
  console.log(request.body.user.altura);
  console.log(request.body.user.tipo);
  res.send('Registrado!!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


