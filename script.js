const urlApi = 'https://pokeapi.co/api/v2/pokemon';
const pokemonElement = document.querySelector('div.pokemon')


const randomId = () => Math.floor(Math.random() * 905)
const getAbilities = (abilities) => abilities.map(item => item.ability.name)

const createAbilities = (abilities) => abilities.reduce((acc, item) => acc += `<li>${item}</li>`, '')
const createPokemon = (pokemon) => {
    pokemonElement.innerHTML = `
    <div class="pokemon_wrapperimg">
    <img src="${pokemon.image}"
        alt="pokemon ${pokemon.name}" class="pokemon_img">
</div>
<div class="pokemon_info">
    <h2 class="pokemon_name">${pokemon.name}</h2>
    <ul class="pokemon_abilities">
        ${createAbilities(pokemon.abilities)}
    </ul>
</div>
`;
}

const getPokemon = () =>
    fetch(`${urlApi}/${randomId()}`)
        .then(response => response.json())
        .then(pokemon => {
            const img = pokemon.sprites.other.dream_world.front_default
            const pokemonSelected = {
                name: pokemon.name,
                image: img ? img : './img/pokemon_logo.png',
                abilities: getAbilities(pokemon.abilities)
            }
            createPokemon(pokemonSelected)
        })

getPokemon();