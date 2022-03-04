import { Button } from "@chakra-ui/react";

const ButtonTemplate = ({
  children,
  color,
  hoverColor,
}: {
  children: React.ReactChild;
  color: string;
  hoverColor: string;
}) => {
  return (
    <Button
      bgColor={color}
      color="white"
      borderRadius="5px"
      fontSize="13.4px"
      fontWeight="500"
      margin="0"
      height="auto"
      paddingY="0.4rem"
      paddingX="0.8rem"
      _hover={{
        bgColor: hoverColor,
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonTemplate;
