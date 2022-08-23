export const searchPokemon = async (pokemon) => {
try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const respuesta = await fetch(url);
    return await respuesta.json();
} catch (error) {
    console.log("error: ", error);
}
};
export const getPokemons = async (limit = 50, offset = 0) => {
try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const respuesta = await fetch(url);
    return await respuesta.json();
} catch (error) {
    console.log("error: ", error);
}
};
export const getPokemonData = async (url) => {
try {
    const respuesta = await fetch(url);
    return await respuesta.json();
} catch (error) {
    console.log("error: ", error);
}
};
