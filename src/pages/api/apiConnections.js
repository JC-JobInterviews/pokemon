import axios from "axios";

export const getPokemons = async () => {
  try {
    const pokemons = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=80").then((res) => res.data.results);
    const pokemonsDetails = [];
    pokemons.forEach(async (p) => {
      const pokemon = await axios.get(p.url);
      pokemonsDetails.push(pokemon.data);
    });
    return pokemonsDetails;
  } catch {
    console.error("Multiple fetch failed");
  }
};
