import { Avatar, Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import PokemonInfo from "../PokemonInfo/PokemonInfo";

const PokemonCard = ({ props }) => {
  return (
    <Card className="flip-card">
      <Box className="flip-card-inner">
        <Flex gap="3" align="center" justify="center" direction={"column"} className="flip-card-front">
          <Heading as="h2" style={{ fontWeight: 500 }}>
            Card No. {props.id}
          </Heading>
          <Avatar size="9" src={props.sprites.other.home.front_shiny} radius="full" fallback="T" />
          <Text as="p" size="2" style={{ marginTop: "1rem", fontWeight: 600 }}>
            {props.name}
          </Text>
        </Flex>
        <PokemonInfo props={props} />
      </Box>
    </Card>
  );
};

export default PokemonCard;
