function myFunction() {
    fetch('http://192.168.0.16:3000/pokemons')
    .then(response => response.text())
    .then((response) => {
        console.log(response);
        showTable(response);
    })
    .catch(err => console.log(err));
  
}

function showTable(data){
    let generalList = data.split(";");
    generalList.forEach(function(elemento) {
        let particularList = elemento.split(",");
        particularList.forEach(function(elemento1) {
            console.log(elemento1);
        })
    })
}