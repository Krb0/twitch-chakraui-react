import TwitchLogo from "../../../assets/images/Header/twitch-logo.svg";
import moreInfoVertIcon from "../../../assets/images/Header/more-info-vert.svg";
import browseIcon from "../../../assets/images/Header/browse-icon.svg";
import { Box, HStack, chakra, Image } from "@chakra-ui/react";
import Icon from "../../../components/Icon";
import { Link } from "react-router-dom";

const LeftSide = () => {
  return (
    <HStack
      alignItems="center"
      spacing={{ base: "2", md: "4" }}
      flexBasis="100%"
    >
      <Link to="/">
        <Box
          position="relative"
          width="2.5rem"
          height="2.5rem"
          cursor="pointer"
        >
          <Image src={TwitchLogo} />
        </Box>
      </Link>
      <Link to="/browse">
        <chakra.span
          display={{
            base: "none",
            md: "inline",
          }}
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
      </Link>
      <Box display={{ base: "flex", md: "none" }}>
        <Link to="/browse">
          <Icon icon={browseIcon} label="Explorar" />
        </Link>
      </Box>
      <Icon icon={moreInfoVertIcon} label="Más" />
    </HStack>
  );
};

export default LeftSide;
