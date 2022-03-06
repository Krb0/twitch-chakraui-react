import { chakra } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const Browse = () => {
  const { id } = useParams();
  console.log(id);
  return <chakra.div color="white ">heyod </chakra.div>;
};

export default Browse;
