const busca = async () =>{
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/?limit=649" 
const response = await fetch(BASE_URL)
const data = await response.json()

return data
}

const mais = async (i) => {
    const lista = document.getElementById("lista")
    const BASE_URL = ``
    const response = await fetch(BASE_URL)
    const data = await response.json()
    return data

    };

    function mostraImage(i) {
        window.open(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i}.svg`, '_blank');

    }
const loading = async () =>{
    const lista = document.getElementById("lista")
    pokemon = await busca()    
    pokemon.results.map((poke, index) =>{
        const card = document.createElement("div")
        card.classList = "card"
        card.onclick = ()=>mostraImage(index + 1)
        card.innerHTML += `<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index +1}.svg' alt-'' /><h1>${poke.name}</h1>`
        lista.appendChild(card)
    })

}


