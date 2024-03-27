import { Flex, Heading, Text } from "@radix-ui/themes";

export const PokemonInfo = ({ props }) => {
  console.log(props);
  return (
    <Flex gap="3" justify="center" direction={"column"} className="flip-card-back" style={{ padding: "1rem" }}>
      <Heading as="h2" style={{ fontWeight: 500, textAlign: "center" }}>
        Card No. {props.id}
      </Heading>
      <Heading as="h3" style={{ fontWeight: 600, textAlign: "center" }}>
        {props.name}
      </Heading>
      <Flex direction={"column"}>
        <Heading as="h5" style={{ fontWeight: 600 }}>
          Type:
        </Heading>
        {props?.types?.map((type) => {
          return <Text key={type.type.name}>{type.type.name},</Text>;
        })}
      </Flex>
      <Flex style={{ marginTop: "1rem" }}>
        <Heading as="h5" style={{ fontWeight: 600 }}>
          Height:
        </Heading>
        <Text>{props?.height}</Text>
      </Flex>
      <Flex wrap="wrap" style={{ marginTop: "1rem" }}>
        <Heading as="h5" style={{ fontWeight: 600 }}>
          Abilities:
        </Heading>
        {props?.abilities?.map((ability) => {
          return <Text key={ability.ability.name}>{ability.ability.name},</Text>;
        })}
      </Flex>
      <Flex wrap="wrap" style={{ marginTop: "1rem" }}>
        <Heading as="h5" style={{ fontWeight: 600 }}>
          Stats:
        </Heading>
        {props?.stats?.map((stat) => {
          return <Text key={stat.stat.name}>{stat.stat.name},</Text>;
        })}
      </Flex>
      <Flex wrap="wrap" style={{ marginTop: "1rem" }}>
        <Heading as="h5" style={{ fontWeight: 600 }}>
          A few moves:
        </Heading>
        {props?.moves?.slice(0, 3).map((move) => {
          return <Text key={move.move.name}>{move.move.name},</Text>;
        })}
      </Flex>
    </Flex>
  );
};

export default PokemonInfo;
