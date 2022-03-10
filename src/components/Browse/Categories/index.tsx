import { Box, Flex, chakra, Stack, Input, Image } from "@chakra-ui/react";
import { useState } from "react";
import data from "../../../libs/data.json";
import searchIcon from "../../../assets/images/Browse/search-icon--gray.svg";
import { debounce } from "lodash";
import { Stream } from "../../../libs/models/stream.model";

const Categories = () => {
  const [isCategory, setIsCategory] = useState<boolean>(true);
  const [query, setQuery] = useState<string>("");
  const [categories] = useState<Stream["game"][]>(
    data
      .map((stream) => stream.game)
      .filter((v, i, a) => a.findIndex((t) => t.name === v.name) === i)
  );

  const updateQuery = (e: any) => setQuery(e?.target?.value);

  const debouncedOnChange = debounce(updateQuery, 250);

  return (
    <Box>
      <Stack gap="1rem">
        <Flex color="white" fontWeight="500" fontSize="20px" gap="1rem">
          <chakra.span
            paddingBottom="0.3rem"
            color={isCategory ? "primary.100" : "white"}
            _hover={{ color: "primary.300" }}
            borderBottom={isCategory ? "2px solid #bf94ff" : "none"}
            cursor="pointer"
            onClick={() => setIsCategory(true)}
          >
            Categorias
          </chakra.span>
          <chakra.span
            paddingBottom="0.3rem"
            color={!isCategory ? "primary.100" : "white"}
            borderBottom={!isCategory ? "2px solid #bf94ff" : "none"}
            _hover={{ color: "primary.300" }}
            cursor="pointer"
            onClick={() => setIsCategory(false)}
          >
            Canales en vivo
          </chakra.span>
        </Flex>
        <Flex color="white" gap="0.5rem" alignItems="center">
          <chakra.span fontSize="13px" fontWeight="600">
            Filtrar por
          </chakra.span>
          <Flex bgColor="#3E3E40" borderRadius="5px">
            <Box alignSelf="center" justifyContent="center" paddingX="0.5rem">
              <Image src={searchIcon} height="20px" color="#3E3E40" />
            </Box>
            <Input
              border="0"
              onChange={debouncedOnChange}
              bgColor="#3E3E40"
              fontSize="13px"
              _placeholder={{
                color: "#C5C5C6",
              }}
              _focus={{
                border: "none",
              }}
              width="190px"
              paddingX="0"
              height="30px"
              placeholder="Buscar etiquetas"
            />
          </Flex>
        </Flex>
        <Flex color="white" gap="0.7rem" wrap="wrap">
          {categories
            .filter((item) =>
              item.name.toLowerCase().includes(query.toLowerCase())
            )
            .map((item) => (
              <Category key={item.name} item={item} />
            ))}
        </Flex>
      </Stack>
    </Box>
  );
};

export default Categories;

const Category = ({ item }: { item: Stream["game"] }) => {
  return (
    <Stack w="174px" spacing="0">
      <Image h="233px" w="full" src={item.cover} objectFit="cover" />
      <chakra.span fontWeight="500" fontSize="1rem" color="#DEDEE3">
        {item.name}
      </chakra.span>
      <chakra.span fontWeight="400" fontSize="0.85rem" color="#ADADB8">
        {item.viewers} k espectadores
      </chakra.span>
    </Stack>
  );
};
