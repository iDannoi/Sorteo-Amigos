// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosSecretos = [];
let cantiadadAmigos = 0;

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim();

    if (nombreAmigo !== '') {
        amigosSecretos.push(nombreAmigo);
        cantiadadAmigos += 1;
        actualizaListaDeAmigos(amigosSecretos); 
        document.getElementById('amigo').value = '';
    } else {
        alert('Escribe un nombre');
    }
}

function actualizaListaDeAmigos(lista) {

    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";

    lista.forEach(elemento => {
        const li = document.createElement("li");
        li.textContent = elemento;
        listaHTML.appendChild(li);
    });
}

function actualizaListaDeAmigos(lista){
    
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";
    lista.forEach(elemento => {
        const li = document.createElement("li");
        li.textContent = elemento;
        listaHTML.appendChild(li);
        
    });
}

function sortearAmigo() {

    if (cantiadadAmigos == 0){
        let limpiaLista = document.getElementById("listaAmigos");
        limpiaLista.innerHTML = "";
        alert("Ingresar algunos amigos para sortear");
        return;
    }

    let amigoSorteado =  Math.floor(Math.random()*cantiadadAmigos);
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = `Tu amigo secreto es: ${amigosSecretos[amigoSorteado]}`;
    cantiadadAmigos = 0;
    amigosSecretos = [];
}
