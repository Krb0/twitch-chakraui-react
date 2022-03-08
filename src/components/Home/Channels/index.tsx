import { Flex, Stack, chakra } from "@chakra-ui/react";
import ChannelCard from "./ChannelCard";
import { useState } from "react";
import data from "../../../libs/data.json";
import { Stream } from "../../../libs/models/stream.model";
const Channels = () => {
  const [streams] = useState<Stream[]>(data);
  return (
    <Stack
      paddingX="1.75rem"
      divider={
        <chakra.div
          height="0.009rem"
          bgColor="rgba(255,255,255, 0.15)"
          border="0"
        />
      }
    >
      <Stack color="white" paddingY="3rem">
        <chakra.span fontWeight="500" fontSize="19px">
          Canales en vivo que podrían gustarte
        </chakra.span>
        <Flex
          gap="0.7rem"
          flexWrap="wrap"
          justifyContent={{ lg: "space-around", base: "center" }}
        >
          {streams.slice(0, 10).map((stream) => (
            <ChannelCard stream={stream} />
          ))}
        </Flex>
      </Stack>
    </Stack>
  );
};

export default Channels;
