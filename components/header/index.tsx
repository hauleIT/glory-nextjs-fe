import {
  ChevronDownIcon,
  CloseIcon,
  HamburgerIcon,
  MoonIcon,
  SunIcon,
  Search2Icon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Collapse,
  Flex,
  IconButton,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import GameIcon from "../../assets/game-controller.svg";
import LogoDark from "../../assets/logo-dark.svg";
import LogoLight from "../../assets/logo-light.svg";
import TrendingIcon from "../../assets/trending.svg";
import Account from "../account";
import DesktopNav from "../navbar/DesktopNav";
import MobileNav from "../navbar/MobileNav";
import Search from "../search";
import React from "react";
import Logo from "../logo";
import HomeIcon from "../../assets/home-outline.svg";

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  const [showSearch, setShowSearch] = React.useState(false);

  const handleShowSearch = () => {
    setShowSearch(!showSearch);
    console.log(showSearch);
  };

  return (
    <>
      <Box>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={"center"}
          // justifyContent={"space-between"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>

          <Flex
            className="w-full md:container m-auto "
            h={16}
            w={"100%"}
            alignItems={"center"}
          >
            <Box>
              {colorMode === "light" ? (
                <Logo logo={LogoDark} />
              ) : (
                <Logo logo={LogoLight} />
              )}{" "}
            </Box>

            <Flex
              w={"100%"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Flex display={{ base: "none", md: "flex" }} ml={10}>
                <DesktopNav navItems={NAV_ITEMS} />
              </Flex>

              <Flex>
                {showSearch && (
                  <Search colorMode={colorMode} setShowSearch={setShowSearch} />
                )}
              </Flex>

              <Flex alignItems={"center"}>
                <IconButton
                  aria-label="search"
                  icon={<Search2Icon />}
                  bg={colorMode === "light" ? "#fff" : ""}
                  _hover={{ background: "" }}
                  display={showSearch === true ? "none" : "block"}
                  onClick={handleShowSearch}
                  title="Show search everything"
                />

                <Stack direction={"row"} spacing={7}>
                  <Button
                    onClick={toggleColorMode}
                    bg={colorMode === "light" ? "#fff" : ""}
                    _hover={{ background: "" }}
                  >
                    {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                  </Button>

                  <Account />
                </Stack>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav navItems={NAV_ITEMS} />
        </Collapse>
      </Box>
    </>
  );
}

export interface NavItem {
  label: string;
  icon?: any;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/home",
    icon: "",
  },
  {
    label: "Explore",
    icon: <ChevronDownIcon />,
    children: [
      {
        label: "Blockchain",
        icon: TrendingIcon,
        href: "/blockchain",
      },
      {
        label: "Gaming",
        icon: GameIcon,
        href: "#",
      },
    ],
  },
];
