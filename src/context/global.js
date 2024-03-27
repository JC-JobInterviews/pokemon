import { createContext, useContext, useEffect, useReducer, useState } from "react";

const GlobalContext = createContext();

//actions
const GET_ALL_POKEMON = "GET_ALL_POKEMON";

//reducer
const reducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_POKEMON:
      return {
        ...state,
        allPokemon: action.payload.results,
        next: action.payload.next,
        loading: false,
      };
  }

  return state;
};

export const GlobalProvider = ({ children }) => {
  //base url
  const baseUrl = "https://pokeapi.co/api/v2/";

  //initial state
  const intitialState = {
    allPokemon: [],
  };

  const [state, dispatch] = useReducer(reducer, intitialState);
  const [allPokemonData, setAllPokemonData] = useState([]);

  const allPokemon = async () => {
    dispatch({ type: "LOADING" });

    const res = await fetch(`${baseUrl}pokemon?limit=20`);
    const data = await res.json();
    console.log(data);
    dispatch({ type: "GET_ALL_POKEMON", payload: data });

    //fetch character data
    const allPokemonData = [];

    for (const pokemon of data.results) {
      const pokemonRes = await fetch(pokemon.url);
      const pokemonData = await pokemonRes.json();
      allPokemonData.push(pokemonData);
    }

    setAllPokemonData(allPokemonData);
  };

  //get all pokemon data
  const getPokemonDatabase = async () => {
    dispatch({ type: "LOADING" });

    const res = await fetch(`${baseUrl}pokemon?limit=100000&offset=0`);
    const data = await res.json();

    dispatch({ type: "GET_POKEMON_DATABASE", payload: data.results });
  };

  //initial fetch
  useEffect(() => {
    getPokemonDatabase();
    allPokemon();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        allPokemonData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
