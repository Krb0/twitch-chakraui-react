import { Box, Image, Stack } from "@chakra-ui/react";
import closeSidebarIcon from "../../../assets/images/Sidebar/close-sidebar-icon.svg";

const Chat = ({
  isChat,
  setIsChat,
}: {
  isChat: boolean;
  setIsChat: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Box>
      {isChat && (
        <Stack
          minWidth="340px"
          bgColor="dark.500"
          borderLeft="1px solid rgba(255,255,255, 0.15)"
          height="full"
        >
          <Box>
            <Box
              onClick={() => setIsChat(false)}
              marginX="auto"
              css={{
                transform: "scaleX(-1)",
              }}
            >
              <Box width="20px" onClick={() => setIsChat(true)}>
                <Image src={closeSidebarIcon} />
              </Box>
            </Box>
          </Box>
        </Stack>
      )}
    </Box>
  );
};

export default Chat;
