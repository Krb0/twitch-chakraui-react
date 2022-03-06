import { Avatar, Stack, chakra, Flex, Image } from "@chakra-ui/react";
import { useState } from "react";
import CarouselList from "./CarouselList";
import CarouselItem from "./CarouselList/CarouselItem";

const Carousel = () => {
  return (
    <Flex
      position="absolute"
      top="0"
      height="350px"
      width="full"
      alignItems="center"
      justifyContent="center"
      color="white"
    >
      <CarouselList />
    </Flex>
  );
};

export default Carousel;
