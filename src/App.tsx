import Layout from "./Layouts";
import { chakra } from "@chakra-ui/react";
import {
  Avatar,
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
} from "@chakra-ui/react";
function App() {
  return (
    <Layout>
      <Flex width="full" height="full">
        <Box position="relative" width="full">
          <Grid height="350px" templateColumns="repeat(48, 1fr)">
            <GridItem
              colSpan={13}
              display={{ base: "none", lg: "inline-block" }}
            >
              <Image
                src="https://images-na.ssl-images-amazon.com/images/G/01/dacx/AdForge/TEMPLATE-2-Headl-f79bd7ad-1bea-4c62-bb3f-32c013181db6._CBnull_.png"
                height="350px"
                width="full"
                objectFit="cover"
              />
            </GridItem>
            <GridItem colSpan={{ base: 48, lg: 22 }} bgColor="dark.900" />
            <GridItem
              colSpan={13}
              display={{ base: "none", lg: "inline-block" }}
            >
              <Image
                src="https://images-na.ssl-images-amazon.com/images/G/01/dacx/AdForge/Twitch-Headliner-ab95a4a3-1b16-4bda-84ee-90fa63219aad._CBnull_.png"
                height="350px"
                width="full"
                objectFit="cover"
              />
            </GridItem>
          </Grid>
          <Flex
            position="absolute"
            top="0"
            height="350px"
            width="full"
            alignItems="center"
            justifyContent="center"
            color="white"
          >
            <Flex>
              <Image
                src="https://i.ytimg.com/vi/00K_vEbNxAo/maxresdefault.jpg"
                width="530px"
              />
              <Stack bgColor="dark.500" paddingX="0.5rem" paddingTop="0.5rem">
                <Flex
                  display={{
                    base: "none",
                    xl: "flex",
                  }}
                  gap="0.5rem"
                >
                  <Avatar
                    src="https://static-cdn.jtvnw.net/jtv_user_pictures/8ec9e0c4-53b5-46e8-9139-48246fc605e7-profile_image-50x50.png"
                    height="50px"
                    width="50px"
                  />
                  <Stack
                    width="150px"
                    height="full"
                    justifyContent="center"
                    gap="0"
                    spacing="0"
                  >
                    <chakra.span
                      fontSize="14px"
                      fontWeight="600"
                      color="primary.100"
                    >
                      CANAL_GAMING
                    </chakra.span>
                    <chakra.span fontSize="13px" fontWeight="400">
                      Juego
                    </chakra.span>
                    <chakra.span fontSize="12px" fontWeight="300">
                      1.2k espectadores
                    </chakra.span>
                  </Stack>
                </Flex>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Layout>
  );
}

export default App;
