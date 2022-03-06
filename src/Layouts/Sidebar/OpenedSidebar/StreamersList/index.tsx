import { Stack } from "@chakra-ui/react";
import { Stream } from "../../../../libs/models/stream.model";
import StreamerCard from "./StreamerCard";

const StreamersList = ({ streams }: { streams: Stream[] }) => {
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
      {streams.slice(0, 9).map((stream) => (
        <StreamerCard {...stream} />
      ))}
    </Stack>
  );
};

export default StreamersList;
