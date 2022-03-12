import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Stream as StreamInterface } from "../libs/models/stream.model";
import Chat from "../components/Streamer/Chat";
import Stream from "../components/Streamer/Stream";
import data from "../libs/data.json";

const Streamer = () => {
  const { id } = useParams();
  const [stream, setStream] = useState<StreamInterface>(
    data.find((stream) => stream.streamer.id === id)!
  );
  useEffect(() => {
    setStream(data.find((stream) => stream.streamer.id === id)!);
  }, [id]);
  return (
    <Flex height="100vh">
      <Stream stream={stream} />
      <Chat />
    </Flex>
  );
};

export default Streamer;
