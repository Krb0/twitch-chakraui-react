import { Box, Stack } from "@chakra-ui/react";
import closeSidebarIcon from "../../../assets/images/close-sidebar-icon.svg";
import Icon from "../../../components/Icon";
import CameraIcon from "../../../assets/images/camera-icon.svg";
import { Streamer } from "../../../libs/models/streamer.model";
import StreamersList from "./StreamersList";

interface Props {
  setIsSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  streamers: Streamer[];
}

const ClosedSidebar = ({ setIsSidebar, streamers }: Props) => {
  return (
    <SidebarContainer>
      <>
        <Box
          onClick={() => setIsSidebar(true)}
          marginX="auto"
          css={{
            transform: "scaleX(-1)",
          }}
        >
          <Icon icon={closeSidebarIcon} label="Expandir" placement="right" />
        </Box>
        <Stack alignItems="center">
          <Icon
            icon={CameraIcon}
            label="Streamers Recomendados"
            placement="right"
          />
          <StreamersList streamers={streamers} />
        </Stack>
      </>
    </SidebarContainer>
  );
};

export default ClosedSidebar;

const SidebarContainer = ({ children }: { children: React.ReactChild }) => {
  return (
    <Stack
      paddingTop="0.7rem"
      background="dark.300"
      height="full"
      minWidth="50px"
      gap="0.6rem"
      zIndex="2"
      borderTop="1.5px solid rgba(0,0,0,0.5)"
      color="white"
    >
      {children}
    </Stack>
  );
};
