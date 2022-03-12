import { Box, Flex, Image, Stack, chakra } from "@chakra-ui/react";
import closeSidebarIcon from "../../../assets/images/Sidebar/close-sidebar-icon.svg";
import chatParticipantsIcon from "../../../assets/images/Chat/chat-participants.svg";

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
          minWidth="380px"
          maxWidth="380px"
          bgColor="dark.500"
          borderLeft="1px solid rgba(255,255,255, 0.15)"
          height="95vh"
          paddingBottom="0.5rem"
          color="white"
          justifyContent="space-between"
          divider={
            <chakra.div
              height="0.009rem"
              bgColor="rgba(255,255,255, 0.15)"
              border="0"
            />
          }
        >
          <Flex
            alignItems="center"
            justifyContent="space-between"
            padding="0.8rem"
            paddingY="1rem"
          >
            <ChatIcon src={closeSidebarIcon} handler={() => setIsChat(false)} />
            <chakra.span fontWeight="600" fontSize="16px" color="#dedee3">
              CHAT DEL STREAM
            </chakra.span>
            <ChatIcon src={chatParticipantsIcon} handler={() => {}} />
          </Flex>
          <Stack
            height="full"
            overflowY="scroll"
            css={{
              "&::-webkit-scrollbar": {
                width: "0px",
              },
            }}
            paddingTop="0.5rem"
            paddingX="1rem"
          >
            {[
              { name: "George", message: "Nice Stream, keep it up" },
              {
                name: "Josh",
                message: "I think you should try Minecraft",
              },
            ].map(({ name, message }) => (
              <chakra.span fontWeight="500" fontSize="14px" color="#dedee3">
                <chakra.span color="primary.300" fontWeight="600">
                  {name}
                </chakra.span>
                : {message}
              </chakra.span>
            ))}
          </Stack>
          <Flex minHeight="90px"></Flex>
        </Stack>
      )}
    </Box>
  );
};

export default Chat;

const ChatIcon = ({ src, handler }: any) => {
  return (
    <Image
      onClick={handler}
      css={{
        transform: "scaleX(-1)",
      }}
      _hover={{
        bgColor: "#464649",
      }}
      borderRadius="4px"
      cursor="pointer"
      src={src}
      objectFit="cover"
      height="26px"
      width="26px"
      padding="0.1rem"
    />
  );
};
