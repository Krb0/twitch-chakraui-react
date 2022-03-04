import { Avatar } from "@chakra-ui/react";
import React from "react";
import { Streamer } from "../../../../libs/models/streamer.model";

const StreamerCard = ({ streamer }: { streamer: Streamer }) => {
  return <Avatar src={streamer.avatar} width="30px" height="30px" />;
};

export default StreamerCard;
