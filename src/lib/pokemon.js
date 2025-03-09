function randBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const TOTAL_POKEMONS = 898;

function randomPokemonIds(cantidad) {
    const pokemonIds = [];
    while (pokemonIds.length < cantidad) {
        const id = randBetween(1, TOTAL_POKEMONS)
        if (!pokemonIds.includes(id)) {
            pokemonIds.push(id);
        }
    }
    return pokemonIds;
}



async function getPokemonData(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
    const data = await response.json();
    const nombre = data.names.find((name) => name.language.name === 'es').name;
    const sprite_response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const sprite_data = await sprite_response.json();
    const sprite = sprite_data.sprites.other['official-artwork'].front_default;
    return { nombre, sprite }

}



export {
    randBetween,
    randomPokemonIds,
    getPokemonData
}