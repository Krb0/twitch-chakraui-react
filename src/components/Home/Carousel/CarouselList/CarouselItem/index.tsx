import { Flex, Image, Stack, Avatar, chakra, Box } from "@chakra-ui/react";
import { Streamer } from "../../../../../libs/models/streamer.model";
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
      zIndex={zIndex}
      shadow="2xl"
      position="absolute"
      css={{
        transform: `translate(${left}) ${
          secondary
            ? left.includes("12")
              ? "scale(0.9)"
              : "scale(0.8)"
            : "scale(1)"
        } `,
        filter: `${
          secondary
            ? left.includes("12")
              ? "blur(2px)"
              : "blur(4px)"
            : "blur(0)"
        }`,
      }}
    >
      <Image
        src={src}
        width="530px"
        height="300px"
        objectFit="cover"
        borderLeftRadius="3px"
      />
      <Stack
        bgColor="dark.500"
        paddingX="0.5rem"
        paddingTop="0.5rem"
        borderRightRadius="3px"
        gap="0.5rem"
      >
        <Flex
          display={{
            base: "none",
            xl: "flex",
          }}
          gap="0.5rem"
        >
          <Avatar src={streamer.avatar} height="50px" width="50px" />
          <Stack
            width="150px"
            height="full"
            justifyContent="center"
            gap="0"
            spacing="0"
          >
            <chakra.span fontSize="14px" fontWeight="600" color="primary.100">
              {streamer.name}
            </chakra.span>
            <chakra.span fontSize="13px" fontWeight="400">
              {streamer.game}
            </chakra.span>
            <chakra.span fontSize="12px" fontWeight="300">
              {streamer.viewers} espectadores
            </chakra.span>
          </Stack>
        </Flex>
        <Flex gap="0.5rem">
          {streamer.tags.map((tag) => (
            <chakra.span
              borderRadius="20px"
              bgColor="#3A3A3D"
              color="rgba(255, 255, 255, 0.8)"
              fontWeight="500"
              textAlign="center"
              width="fit-content"
              paddingX="0.6rem"
              paddingY="0.05rem"
              fontSize="13px"
            >
              {tag}
            </chakra.span>
          ))}
        </Flex>
      </Stack>
    </Flex>
  );
};
export default CarouselItem;
