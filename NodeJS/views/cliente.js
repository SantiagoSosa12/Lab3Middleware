function myFunction() {
    fetch('http://192.168.0.16:3000/pokemons')
    .then(response => response.text())
    .then((response) => {
        console.log(response)
        document.getElementById("demo").innerHTML = response;
    })
    .catch(err => console.log(err));
  
}