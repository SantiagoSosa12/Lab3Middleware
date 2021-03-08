const { response } = require("express");

function myFunction() {
    fetch('http://192.168.0.16:3000/pokemons')
    .then( response => response.json())
    .then(data => {
        showTable(data);
    })
    .catch(err => console.log(err));
  
}

function showTable(data){
    var contenido = document.querySelector('#contenido');
    contenido.innerHTML='';
    for(let valor of data){
        contenido.innerHTML += `
        <tr>
            <td>${valor.nombre}</td>
            <td>${valor.peso}</td>
            <td>${valor.altura}</td>
            <td>${valor.tipo}</td>
        </tr>  
        `
    }
}