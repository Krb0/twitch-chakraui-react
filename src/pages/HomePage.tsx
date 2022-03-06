import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import Carousel from "../components/Home/Carousel";

const HomePage = () => {
  return (
    <Flex width="full" height="full">
      <Box position="relative" width="full">
        <Grid height="350px" templateColumns="repeat(48, 1fr)">
          <GridItem colSpan={13} display={{ base: "none", lg: "inline-block" }}>
            <Image
              src="https://images-na.ssl-images-amazon.com/images/G/01/dacx/AdForge/Twitch-HomepageH-68573390-86bd-4270-b902-0512e27ec522._CBnull_.jpg"
              height="350px"
              width="full"
              objectFit="cover"
            />
          </GridItem>
          <GridItem colSpan={{ base: 48, lg: 22 }} bgColor="#F3F3F3" />
          <GridItem colSpan={13} display={{ base: "none", lg: "inline-block" }}>
            <Image
              src="https://images-na.ssl-images-amazon.com/images/G/01/dacx/AdForge/Twitch-HomepageH-e116683f-298f-4a52-8835-4263d3d541c9._CBnull_.jpg"
              height="350px"
              width="full"
              objectFit="cover"
            />
          </GridItem>
        </Grid>

        <Carousel />
      </Box>
    </Flex>
  );
};

export default HomePage;
