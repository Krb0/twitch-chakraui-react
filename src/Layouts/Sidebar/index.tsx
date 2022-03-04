import { chakra, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "./Header";
import StreamersList from "./StreamersList";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <>
        <Header />
        <StreamersList />
      </>
    </SidebarContainer>
  );
};

const SidebarContainer = ({ children }: { children: React.ReactChild }) => {
  return (
    <Stack
      background="dark.300"
      height="full"
      minWidth="245px"
      zIndex="2"
      borderTop="1.5px solid rgba(0,0,0,0.5)"
      color="white"
    >
      {children}
    </Stack>
  );
};

export default Sidebar;
