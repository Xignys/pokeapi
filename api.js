// esta funcion es porque no habia botones y cada vez que se refrescaba la pagina
// se ejecutaba una funcion para generar un numero random
//     document.addEventListener('DOMContentLoaded', () => {
//         const random = getRandom(1, 151) 
//         fetchData(random)
//     })
//  const getRandom = (min, max) => {
//     return Math.floor(Math.random() * (max - min)) + min;
//  }

// el numero random se va como parametro a este funcion como 'id' y en la liga la
// la incrustaba para que fuera cambiando de poquemon por el id de la api

const URL = "https://pokeapi.co/api/v2/pokemon/";
const fetchData = async (id)=> {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        mostrarCarta(data)
    }catch (error) {
        console.log(error);
    }
}

//esta parte es donde se va a cambiar la imagen, lo que no tengo claro es que me voy a traer del html porque ya esta revuelto con el bootstrap y no esta muy claro para mi

const mostrarCarta = (pokemon) => {//poquemon es la data de la funcion anterior
    console.log(pokemon)
    const template = document.getElementById('ImagenPokemon')// aqui tendria que traerme como el contenedor que contiene la imagen
    const imagen = document.getElementById('ImagenPokemon').setAttribute// aqui tendria que traerme el tag de la imagen y meterle el atributo de src dinamicamente.
}