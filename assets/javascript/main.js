const urlParams = new URLSearchParams(window.location.search);
const thisPage = urlParams.get('page')

const title = document.getElementById('title')
title.innerText += ` | Página ${thisPage}`

function ShowDetails(id) {
    window.location.href = `./pages/details.html?id=${id}`
}
async function ShowPokemons() {
    const cards = document.getElementById("cards")
    if (!thisPage) {
        window.location.href = './?page=1' 
    }  
     
    const menuPage = document.getElementById(`page${thisPage}`)
    menuPage.style.color = 'gray'
    menuPage.href = '#'
    
    
    for (let i = 0; i < 60; i++) {
        await fetch(`https://pokeapi.co/api/v2/pokemon/${(thisPage - 1) * 60 + i + 1 }/`).then(response => response.json()).then(pokemon => cards.innerHTML += `<li class='${pokemon.types[0].type.name} card' onClick='ShowDetails(${pokemon.id})'>
        <div class='containerTypes'>
        ${pokemon.types.map( typeName => `<span class='type'>${typeName.type.name}</span>`)}
        </div>
        <h1 class='pokeName'>${pokemon.name}</h1>
        <img src=${pokemon.sprites.other.dream_world.front_default ? pokemon.sprites.other.dream_world.front_default : "./assets/images/no_foto.png"} class='cardImg'/>
        </li>
        `)        
    }  

}