import { Button, Flex, IconButton, Input } from "@chakra-ui/react";
import * as React from "react";
import SearchIcon from "../../assets/search.svg";
import CloseIcon from "../../assets/close.svg";
import Image from "next/image";

export interface SearchProps {
  setShowSearch: Function;
  colorMode: any;
}

export default function Search(props: SearchProps) {
  return (
    <Flex
      alignItems={"center"}
      justifyContent="space-between"
      w={{ base: "300px", xl: "500px" }}
      h="48px"
      padding={"1px 32px 1px 48px"}
      p={"20px"}
      borderRadius="40px"
      border={"1px solid #ccc"}
      boxShadow="base"
      bg={"#fff"}
      display={{ base: "none", xl: "flex" }}
    >
      <Image height={"20px"} width={"20px"} src={SearchIcon} alt="Search " />
      <Input
        pl={2}
        w={"100%"}
        variant="unstyled"
        placeholder="Search everything"
        color={"black"}
      />
      <Button
        size="sm"
        bg="#fff"
        borderRadius="full"
        p="0"
        _hover={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        onClick={() => props.setShowSearch(false)}
      >
        <Image height={"16px"} width={"16px"} alt="Close" src={CloseIcon} />
      </Button>
    </Flex>
  );
}
