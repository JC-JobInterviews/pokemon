"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getPokemons } from "./api/apiConnections";
import PokemonCard from "@/components/PokemonCard/PokemonCard";

export default function Home() {
  const { data: pokemonsData } = useSuspenseQuery({
    queryKey: ["pokemons"],
    queryFn: getPokemons,
  });

  const onInfoClick = () => {
    console.log("working");
  };
  console.log(pokemonsData);
  return (
    <>
      {pokemonsData?.map((p, i) => (
        <PokemonCard key={i} props={{ data: p, buttonLabel: "test", onInfoClick }} />
      ))}
    </>
  );
}
