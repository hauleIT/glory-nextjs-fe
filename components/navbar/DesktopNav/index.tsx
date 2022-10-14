import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Icon,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavItem } from "../../header";
import * as React from "react";
import Image from "next/image";

export interface DesktopNavProps {
  navItems: Array<any>;
}

export default function DesktopNav(props: DesktopNavProps) {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {props.navItems.map((navItem: any) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={600}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
                <Icon boxSize={"20px"}>{navItem.icon}</Icon>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                w={"200px"}
              >
                <Stack>
                  {navItem.children.map((child: any) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
}

const DesktopSubNav = ({ label, href, icon }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{
        bg: useColorModeValue("gray.50", "gray.900"),
      }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box display={"flex"} alignItems={"center"}>
          <Image
            height={"30px"}
            width={"30px"}
            alt="icon"
            className="mr-16"
            src={icon}
          />
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "black.400" }}
            fontWeight={500}
            ml={"8px"}
          >
            {label}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"black.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};
