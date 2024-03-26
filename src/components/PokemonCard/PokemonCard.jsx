"use client";
import { Avatar, Button, Card, Flex, Heading, Text } from "@radix-ui/themes";

const PokemonCard = ({ key, props }) => {
  const { data, buttonLabel, onInfoClick } = props;
  return (
    <Card key={key} style={{ maxWidth: 240 }}>
      <Flex gap="3" align="center" justify="center" direction={"column"}>
        <Heading>Card No. {data.id}</Heading>
        <Avatar size="9" src={data.sprites?.front_default} radius="full" fallback="T" />
        <Text as="div" size="2" weight="bold">
          {data.name}
        </Text>
        <Button onClick={() => onInfoClick(data)}>{buttonLabel}</Button>
      </Flex>
    </Card>
  );
};

export default PokemonCard;
