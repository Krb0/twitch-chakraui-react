import TwitchLogo from "../../../assets/images/twitch-logo.svg";
import moreInfoVertIcon from "../../../assets/images/more-info-vert.svg";
import { Box, HStack, chakra, Image } from "@chakra-ui/react";
import Icon from "../../../components/Icon";

const LeftSide = () => {
  return (
    <HStack alignItems="center" spacing="6" flexGrow="1">
      <Box position="relative" width="2.5rem" height="2.5rem" cursor="pointer">
        <Image src={TwitchLogo} />
      </Box>
      <chakra.span
        fontWeight="500"
        fontSize="19px"
        color="white"
        cursor="pointer"
        _hover={{
          color: "primary.100",
        }}
      >
        Explorar
      </chakra.span>
      <Icon icon={moreInfoVertIcon} label="Más" />
    </HStack>
  );
};

export default LeftSide;
