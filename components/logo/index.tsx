import { Box } from "@chakra-ui/react";
import Image from "next/image";
import * as React from "react";

export interface LogoProps {
  logo: string;
}

export default function Logo(props: LogoProps) {
  return (
    <Box>
      <Image
        alt="logo"
        objectFit="cover"
        width="64px"
        height="20px"
        src={props.logo}
        color="#fff"
      />
    </Box>
  );
}
