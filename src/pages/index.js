import { useSuspenseQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getPokemons } from "./api/apiConnections";
import PokemonCard from "@/components/PokemonCard/PokemonCard";
import { Flex, Heading } from "@radix-ui/themes";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const { data: pokemonsData } = useSuspenseQuery({
    queryKey: ["pokemons"],
    queryFn: getPokemons,
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Flex direction="column" align="center" justify="center" style={{ minHeight: "100dvh", margin: "2rem" }}>
        <Heading as="h1" style={{ margin: "2rem", fontSize: "5rem", fontWeight: "bold" }}>
          Justin Heath Tech Test
        </Heading>
        <Flex direction="row" wrap="wrap" align="center" justify="center" style={{ maxWidth: "100dvw" }}>
          {isClient && pokemonsData.map((p, i) => <PokemonCard key={i} props={p} />)}
        </Flex>
      </Flex>
    </>
  );
}
