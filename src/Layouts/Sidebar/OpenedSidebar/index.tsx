import { Stack } from "@chakra-ui/react";
import { Streamer } from "../../../libs/models/streamer.model";
import Header from "./Header";
import StreamersList from "./StreamersList";

interface Props {
  setIsSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  streamers: Streamer[];
}

const Sidebar = ({ setIsSidebar, streamers }: Props) => {
  return (
    <SidebarContainer>
      <>
        <Header setIsSidebar={setIsSidebar} />
        <StreamersList streamers={streamers} />
      </>
    </SidebarContainer>
  );
};

const SidebarContainer = ({ children }: { children: React.ReactChild }) => {
  return (
    <Stack
      background="dark.300"
      height="full"
      minWidth="245px"
      zIndex="2"
      borderTop="1.5px solid rgba(0,0,0,0.5)"
      color="white"
    >
      {children}
    </Stack>
  );
};

export default Sidebar;
