import { chakra, Box, Flex } from "@chakra-ui/react";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
const Layouts = ({ children }: { children: React.ReactChild }) => {
  return (
    <chakra.div
      className="App"
      height="100vh"
      display="flex"
      flexDirection="column"
    >
      <NavBar />
      <Flex height="full" width="full">
        <Sidebar />
        <Box width="full" bgColor="dark.700">
          {children}
        </Box>
      </Flex>
    </chakra.div>
  );
};

export default Layouts;
