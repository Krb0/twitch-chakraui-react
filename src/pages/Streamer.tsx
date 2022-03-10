import { chakra } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const Browse = () => {
  const { id } = useParams();
  return <chakra.span color="white">{id}</chakra.span>;
};

export default Browse;
