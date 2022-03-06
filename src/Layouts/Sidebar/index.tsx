import OpenedSidebar from "./OpenedSidebar";
import ClosedSidebar from "./ClosedSidebar";
import { useState } from "react";
import { Streamer } from "../../libs/models/streamer.model";
import data from "./data.json";
import useBreakpoint from "../../hooks/useBreakpoint";
interface Props {
  isSidebar: boolean;
  setIsSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}
const Sidebar = ({ setIsSidebar, isSidebar }: Props) => {
  const [streamers] = useState<Streamer[]>([...data]);
  const [isMobile] = useBreakpoint();
  return (
    <>
      {isSidebar && !isMobile ? (
        <OpenedSidebar setIsSidebar={setIsSidebar} streamers={streamers} />
      ) : (
        <ClosedSidebar setIsSidebar={setIsSidebar} streamers={streamers} />
      )}
    </>
  );
};

export default Sidebar;
