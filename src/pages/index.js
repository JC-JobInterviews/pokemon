import PokemonCard from "@/components/PokemonCard/PokemonCard";
import { useGlobalContext } from "@/context/global";
import { Flex, Heading } from "@radix-ui/themes";

export default function Home() {
  const { allPokemonData } = useGlobalContext();

  return (
    <Flex direction="column" align="center" justify="center" style={{ minHeight: "100dvh", margin: "2rem" }}>
      <Heading as="h1" style={{ margin: "2rem", fontSize: "5rem", fontWeight: "bold" }}>
        Justin Heath Tech Test
      </Heading>
      <Flex direction="row" wrap="wrap" align="center" justify="center" style={{ maxWidth: "100dvw" }}>
        {allPokemonData ? allPokemonData.map((p, i) => <PokemonCard key={i} props={p} />) : <h1>Loading...</h1>}
      </Flex>
    </Flex>
  );
}
