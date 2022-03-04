import { chakra, Flex } from "@chakra-ui/react";
import Icon from "../../../components/Icon";
import closeSidebarIcon from "../../../assets/images/close-sidebar-icon.svg";
const SidebarHeader = () => {
  return (
    <Flex
      paddingTop="0.7rem"
      alignItems="center"
      justifyContent="space-between"
      paddingX="0.6rem"
    >
      <chakra.span fontSize="0.87rem" fontWeight="bold">
        CANALES RECOMENDADOS
      </chakra.span>
      <Icon icon={closeSidebarIcon} label="Colapsar" />
    </Flex>
  );
};

export default SidebarHeader;
