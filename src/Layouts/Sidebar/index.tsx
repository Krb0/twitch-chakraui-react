import OpenedSidebar from "./OpenedSidebar";
import ClosedSidebar from "./ClosedSidebar";
import { useState } from "react";
import { Streamer } from "../../libs/models/streamer.model";
import data from "./data.json";
interface Props {
  isSidebar: boolean;
  setIsSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}
const Sidebar = ({ setIsSidebar, isSidebar }: Props) => {
  const [streamers] = useState<Streamer[]>([...data]);
  return (
    <>
      {isSidebar ? (
        <OpenedSidebar setIsSidebar={setIsSidebar} streamers={streamers} />
      ) : (
        <ClosedSidebar setIsSidebar={setIsSidebar} streamers={streamers} />
      )}
    </>
  );
};

export default Sidebar;
