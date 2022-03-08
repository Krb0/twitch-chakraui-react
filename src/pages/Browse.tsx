import { Box, chakra, Flex, Image, Stack } from "@chakra-ui/react";
import ExploreCategories from "../components/Browse/ExploreCategories";
const Browse = () => {
  return (
    <Stack padding="2rem">
      <chakra.span fontWeight="700" fontSize="3.5rem" color="white">
        Explorar
      </chakra.span>
      <ExploreCategories />
    </Stack>
  );
};

export default Browse;
