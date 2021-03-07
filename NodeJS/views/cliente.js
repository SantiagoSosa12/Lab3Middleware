function enviarPokemon() {
    fetch('http://192.168.0.16:3000/registarPokemon', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                nombrepokemon: document.getElementById('nombrepokemon'),
                peso: document.getElementById('peso'),
                altura: document.getElementById('altura'),
                tipo: document.getElementById('tipo')
            }
        })
    }).then(response => response.text())
    .then((response) => {
        console.log(response)
        document.getElementById("Texto").innerHTML = response;
    })
    .catch(err => console.log(err));
}



