import { Button, Dialog, Flex } from "@radix-ui/themes";

export const PokemonInfo = ({ show, hide, data }) => {
  const { name, weight } = data;
  return (
    <>
      {show ? (
        <Dialog.Root>
          <Dialog.Content style={{ maxWidth: 450 }}>
            <Dialog.Title>{name} profile</Dialog.Title>
            <Dialog.Description size="2" mb="4">
              {name} weighs: {weight}
            </Dialog.Description>

            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </Dialog.Close>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
      ) : null}
    </>
  );
};

export default PokemonInfo;
