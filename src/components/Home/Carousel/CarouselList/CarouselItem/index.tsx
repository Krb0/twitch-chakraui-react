import { Flex, Image, Stack, Avatar, chakra } from "@chakra-ui/react";
import { Streamer } from "../../../../../libs/models/streamer.model";
import RightPanel from "./RightPanel";
const CarouselItem = ({
  zIndex,
  src,
  left,
  secondary,
  streamer,
}: {
  zIndex: string;
  src: string;
  left: string;
  secondary: boolean;
  streamer: Streamer;
}): JSX.Element => {
  return (
    <Flex
      cursor={secondary ? "pointer" : ""}
      zIndex={zIndex}
      shadow="2xl"
      position="absolute"
      transform={{
        base: "translateX(0)",

        lg: `translateX(${left}) ${
          secondary
            ? left.includes("18")
              ? "scale(0.9)"
              : "scale(0.8)"
            : "scale(1)"
        }`,
      }}
      filter={{
        base: "",
        lg: `${
          secondary
            ? left.includes("18")
              ? "brightness(0.3)"
              : "brightness(0.2)"
            : "brightness(1)"
        }`,
      }}
      _hover={{
        filter: "brightness(1)",
      }}
    >
      <Image
        src={src}
        width="530px"
        height="300px"
        objectFit="cover"
        borderLeftRadius="3px"
      />
      <RightPanel streamer={streamer} secondary={secondary} />
    </Flex>
  );
};
export default CarouselItem;
