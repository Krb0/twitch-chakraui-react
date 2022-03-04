import { Stack } from "@chakra-ui/react";
import { Streamer } from "../../../../libs/models/streamer.model";
import StreamerCard from "./StreamerCard";

const StreamersList = ({ streamers }: { streamers: Streamer[] }) => {
  return (
    <Stack
      gap="0rem"
      overflowY="scroll"
      height="100%"
      css={{
        "&::-webkit-scrollbar": {
          width: "0px",
        },
      }}
    >
      {streamers.map((streamer) => (
        <StreamerCard {...streamer} />
      ))}
    </Stack>
  );
};

export default StreamersList;