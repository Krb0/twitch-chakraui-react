import { Avatar, Tooltip } from "@chakra-ui/react";
import React from "react";
import { Streamer } from "../../../../libs/models/streamer.model";

const StreamerCard = ({ streamer }: { streamer: Streamer }) => {
  return (
    <Tooltip
      hasArrow
      label={streamer.name}
      placement="right"
      bgColor="white"
      color="dark"
    >
      <Avatar
        src={streamer.avatar}
        width="30px"
        height="30px"
        cursor="pointer"
      />
    </Tooltip>
  );
};

export default StreamerCard;
