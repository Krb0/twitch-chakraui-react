import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import data from "./data.json";
import CarouselItem from "./CarouselItem";

const CarouselList = () => {
  const [carouselItems] = useState(data);
  return (
    <Flex
      position="relative"
      width="full"
      alignItems="center"
      justifyContent="center"
    >
      {carouselItems.map((item) => (
        <CarouselItem {...item} />
      ))}
    </Flex>
  );
};

export default CarouselList;
