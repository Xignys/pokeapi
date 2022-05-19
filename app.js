
    document.addEventListener('DOMContentLoaded', () => {
         const random = getRandom(1, 151) 
         fetchData(random)
     })
  const getRandom = (min, max) => {
     return Math.floor(Math.random() * (max - min)) + min;
  }



    const fetchData = async (id)=> {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        mostrarCarta(data)
    }catch (error) {
        console.log(error);
    }
}



const mostrarCarta = (pokemon) => {//poquemon es la data de la funcion anterior
    console.log(pokemon)
    const imagen = document.querySelector('#ImagenPokemon')
    const neimo = document.querySelector('#NombrePokemon').innerHTML
    const id = document.querySelector('#CajaNumPoke').innerHTML
    document.querySelector('#aquiVaElPoke').setAttribute('src', pokemon.sprites.other.dream_world.front_default)
    
    document.querySelector('#nombrePoke').innerHTML= pokemon.name
    document.querySelector('#numPoke').innerHTML= pokemon.id





    imagen.appendChild(imagen)
    neimo.appendChild(neimo)


    
    
}


 