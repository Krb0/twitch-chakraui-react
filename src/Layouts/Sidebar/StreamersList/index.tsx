import { Stack } from "@chakra-ui/react";
import { useState } from "react";
import Streamer from "./Streamer";

const StreamersList = () => {
  const [streamers] = useState([
    {
      name: "Luquita",
      viewers: "388",
      avatar:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/8ec9e0c4-53b5-46e8-9139-48246fc605e7-profile_image-70x70.png",
      game: "Terraria",
    },
    {
      name: "JeffBezos",
      viewers: "4.2k",
      avatar: "http://cdn2.dineroenimagen.com/media/dinero/jeff-bezos.jpeg",
      game: "Roblox",
    },
    {
      name: "ElonMusk",
      viewers: "10",
      avatar:
        "https://cachedimages.podchaser.com/256x256/aHR0cHM6Ly9jcmVhdG9yLWltYWdlcy5wb2RjaGFzZXIuY29tL2RmODZjM2RjZTg5ZDI2ZGQzZWI5NWU4YzI1MDBhMTIyLmpwZWc%3D/aHR0cHM6Ly93d3cucG9kY2hhc2VyLmNvbS9pbWFnZXMvbWlzc2luZy1pbWFnZS5wbmc%3D",
      game: "Minecraft",
    },
    {
      name: "MarkZuckerberg",
      viewers: "38",
      avatar:
        "https://pbs.twimg.com/profile_images/730271326150103042/gR9RVbmC_400x400.jpg",
      game: "Fortnite",
    },
  ]);
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
        <Streamer {...streamer} />
      ))}
    </Stack>
  );
};

export default StreamersList;