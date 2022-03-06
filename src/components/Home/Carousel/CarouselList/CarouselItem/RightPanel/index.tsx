import { Avatar, Flex, Stack, chakra } from "@chakra-ui/react";
import React from "react";
import { Streamer } from "../../../../../../libs/models/streamer.model";

const RightPanel = ({
  secondary,
  streamer,
}: {
  streamer: Streamer;
  secondary: boolean;
}) => {
  return (
    <Stack
      bgColor="dark.500"
      paddingX="0.5rem"
      paddingTop="0.5rem"
      borderRightRadius="3px"
      gap="0.5rem"
      display={
        !secondary
          ? {
              base: "none",
              xl: "flex",
            }
          : "none"
      }
    >
      <Flex gap="0.5rem">
        <Avatar src={streamer.avatar} height="50px" width="50px" />
        <Stack
          width="150px"
          height="full"
          justifyContent="center"
          gap="0"
          spacing="0"
        >
          <chakra.span fontSize="14px" fontWeight="600" color="primary.100">
            {streamer.name}
          </chakra.span>
          <chakra.span fontSize="13px" fontWeight="400">
            {streamer.game}
          </chakra.span>
          <chakra.span fontSize="12px" fontWeight="300">
            {streamer.viewers} espectadores
          </chakra.span>
        </Stack>
      </Flex>
      <Flex gap="0.5rem">
        {streamer.tags.map((tag) => (
          <chakra.span
            borderRadius="20px"
            bgColor="#3A3A3D"
            color="rgba(255, 255, 255, 0.8)"
            fontWeight="500"
            textAlign="center"
            width="fit-content"
            paddingX="0.6rem"
            paddingY="0.05rem"
            fontSize="13px"
          >
            {tag}
          </chakra.span>
        ))}
      </Flex>
    </Stack>
  );
};

export default RightPanel;
