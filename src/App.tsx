import Layout from "./Layouts";
import { Box, Flex } from "@chakra-ui/react";
function App() {
  return (
    <Layout>
      <Flex width="full" height="full">
        <Box position="relative" width="full"></Box>
      </Flex>
    </Layout>
  );
}

export default App;
