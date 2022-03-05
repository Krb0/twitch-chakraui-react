import { Avatar, Flex, chakra, Box, Tooltip } from "@chakra-ui/react";

const StreamerCard = ({
  name,
  avatar,
  viewers,
  game,
}: {
  name: string;
  avatar: string;
  viewers: string;
  game: string;
}) => {
  return (
    <Tooltip
      label={`${name} | ${viewers} espectadores | Transmitiendo ${game} `}
      bgColor="dark.300"
      color="white"
      placement="right"
    >
      <Flex
        gap="0.2rem"
        alignItems="center"
        width="100%"
        paddingX="0.6rem"
        paddingY="0.1rem"
        _hover={{
          bgColor: "#26262C",
        }}
        cursor="pointer"
      >
        <Flex gap="0.5rem" width="80%" alignItems="center">
          <Avatar width="30px" height="30px" src={avatar} />
          <Flex justifyContent="center" flexDirection="column" gap="0">
            <chakra.span fontSize="15px" fontWeight="500">
              {name}
            </chakra.span>
            <chakra.span fontSize="14px" fontWeight="300" color="#adadb8">
              {game}
            </chakra.span>
          </Flex>
        </Flex>

        <Flex alignItems="center" alignSelf="flex-start" gap="0.5rem">
          <Box borderRadius="50%" bgColor="red" width="8px" height="8px" />
          <chakra.span fontSize="14px" fontWeight="300" color="#d8d8d8">
            {viewers}{" "}
          </chakra.span>
        </Flex>
      </Flex>
    </Tooltip>
  );
};

export default StreamerCard;
