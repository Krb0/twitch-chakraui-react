import { Tooltip, Box, Image } from "@chakra-ui/react";

const IconContainer = ({ icon, label }: { icon: string; label: string }) => {
  return (
    <Tooltip label={label} bgColor="white" color="dark">
      <Box
        cursor="pointer"
        padding="0.3rem"
        borderRadius="sm"
        _hover={{
          bgColor: "dark.100",
        }}
      >
        <Box position="relative" width="1.25rem" height="1.255rem">
          <Image src={icon} />
        </Box>
      </Box>
    </Tooltip>
  );
};

export default IconContainer;
