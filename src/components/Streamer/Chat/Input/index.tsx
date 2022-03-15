import { Stack, Input, Button } from "@chakra-ui/react";

const ChatInput = () => {
  return (
    <Stack minHeight="100px" padding="9px">
      <Input
        placeholder="Enviar un mensaje"
        width="full"
        height="45px"
        fontSize="0.85rem"
        _placeholder={{
          color: "rgba(255,255,255,0.7)",
        }}
        bgColor="dark.100"
        borderRadius="3px"
        border="none"
      />
      <Button
        alignSelf="flex-end"
        bgColor="primary.500"
        _hover={{ bgColor: "primary.700" }}
        paddingX="10px"
        paddingY="5px"
        height="30px"
        width="50px"
        fontSize="0.85rem"
        borderRadius="4px"
      >
        Chat
      </Button>
    </Stack>
  );
};

export default ChatInput;
