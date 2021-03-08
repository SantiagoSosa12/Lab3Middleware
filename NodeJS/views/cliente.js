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
    var contenido = document.querySelector('#contenido');
    let generalList = data.split(";");
    generalList.forEach(function(elemento) {
        if(elemento != ""){
            console.log(elemento);
            let particularData = elemento.split(",");
            contenido.innerHTML += `
            <tr>
                <td>${particularData[0]}</td>
                <td>${particularData[1]}</td>
                <td>${particularData[2]}</td>
                <td>${particularData[3]}</td>
            </tr>
        `
        }
    })
}