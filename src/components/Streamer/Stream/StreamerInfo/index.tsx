import { Avatar, Box, Stack, chakra, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Stream } from "../../../../libs/models/stream.model";
import { getRandomColor } from "./utils/randomColor";

const StreamerInfo = ({ stream }: { stream: Stream }) => {
  return (
    <Stack padding="0.5rem">
      <Flex justifyContent="space-between">
        <Flex gap="1rem" alignItems="center">
          <Box position="relative">
            <Avatar
              height="74px"
              width="74px"
              src={stream.streamer.avatar}
              border={`3px solid #${getRandomColor()}`}
            />
            <chakra.span
              position="absolute"
              bottom="-0.5"
              left="1.5"
              bgColor="#EB0400"
              border="1px solid #0E0E10"
              borderRadius="4px"
              paddingX="0.4rem"
              fontSize="13px"
              color="white"
              fontWeight="bold"
            >
              EN VIVO
            </chakra.span>
          </Box>
          <Stack spacing="0" gap="0">
            <chakra.span fontWeight="700" fontSize="19px" color="white">
              {stream.streamer.name}
            </chakra.span>
            <chakra.span fontWeight="600" fontSize="15px" color="white">
              Playing {stream.game.name}
            </chakra.span>
            <Link to="/browse">
              <chakra.span
                fontWeight="500"
                fontSize="14px"
                color="primary.100"
                cursor="pointer"
              >
                {stream.game.name}
              </chakra.span>
            </Link>
          </Stack>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default StreamerInfo;
