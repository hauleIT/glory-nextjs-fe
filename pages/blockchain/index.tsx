import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import * as React from "react";
import MoonImage from "assets/moon.jpg";
import SunImage from "assets/sun.jpg";
import BuffaloImage from "assets/buffalo.gif";
import AvtImage from "assets/avt.gif";

export interface BlockchainProps {}

export default function Blockchain(props: BlockchainProps) {
  const [clockState, setClockState] = React.useState({
    hour: "",
    minute: "",
    second: "",
  });

  React.useEffect(() => {
    setInterval(() => {
      const date = new Date();
      let hours =
        date.getHours() < 10
          ? "0" + date.getHours().toString()
          : date.getHours();
      let minutes =
        date.getMinutes() < 10
          ? "0" + date.getMinutes().toString()
          : date.getMinutes();
      let seconds =
        date.getSeconds() < 10
          ? "0" + date.getSeconds().toString()
          : date.getSeconds();
      setClockState({
        ...clockState,
        hour: hours.toString(),
        minute: minutes.toString(),
        second: seconds.toString(),
      });
    }, 1000);
  }, []);

  return (
    <Stack w={"84%"} p={"0 1.5rem"} m="0 auto">
      <HStack w={"100%"} p={"7rem 0"} justifyContent="center" spacing="120px">
        <Image
          h={"400px"}
          w={"640px"}
          //   src={SunImage}
          alt="Moon Image"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        />
        <VStack spacing={8} align="stretch">
          <Heading
            as="h1"
            fontSize={"66px"}
            letterSpacing={"-0.02em"}
            wordBreak={"break-word"}
          >
            Mysterious Universe
          </Heading>
          <Flex>
            <Stack pr={"1.5rem"}>
              <Heading mb={"12px"} color={"#666666"} as="h2" size="sm">
                Created by
              </Heading>
              <Flex
                p="8px 16px 8px 8px"
                border={"1px solid #transparent"}
                bg="#fff"
                alignItems="center"
                borderRadius={"40px"}
                boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                _hover={{ transform: "translate(0, -1px)" }}
              >
                {/* <Image
                    borderRadius="full"
                    boxSize={"30px"}
                    src={BuffaloImage}
                    mr="8px"
                  /> */}
                <Text color={"black"} fontWeight="600">
                  @_storm
                </Text>
              </Flex>
            </Stack>
            <Center height="85px" pr={"1.5rem"}>
              <Divider orientation="vertical" />
            </Center>
            <Stack>
              <Heading mb={"12px"} color={"#666666"} as="h2" size="sm">
                Order by
              </Heading>
              <Flex
                p="8px 16px 8px 8px"
                border={"1px solid #transparent"}
                bg="#fff"
                alignItems="center"
                borderRadius={"40px"}
                boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                _hover={{ transform: "translate(0, -1px)" }}
              >
                {/* <Image
                    borderRadius="full"
                    boxSize={"30px"}
                    src={AvtImage}
                    mr="8px"
                  /> */}
                <Text color={"black"} fontWeight={600}>
                  @_heart
                </Text>
              </Flex>
            </Stack>
          </Flex>

          <Flex>
            <VStack align="stretch">
              <Heading color={"#666666"} as="h2" size="sm">
                Current Time in Viet Nam
              </Heading>

              <Box>
                <Text fontWeight={800} fontSize="40px">
                  2.20 ETH
                </Text>
                <Text fontWeight={600}>$3,747.99</Text>
              </Box>
            </VStack>

            <Center height="105px" pl={"1.5rem"} pr={"1.5rem"}>
              <Divider orientation="vertical" />
            </Center>

            <VStack align="stretch">
              <Heading color={"#666666"} as="h2" size="sm">
                Current Time in Viet Nam
              </Heading>

              <Stack marginTop={0} spacing={10} direction={"row"}>
                <Box>
                  <Text fontWeight={800} fontSize="40px">
                    {clockState.hour}
                  </Text>
                  <Text fontWeight={600}>Hours</Text>
                </Box>

                <Box>
                  <Text fontWeight={800} fontSize="40px">
                    {clockState.minute}
                  </Text>
                  <Text fontWeight={600}>Minutes</Text>
                </Box>

                <Box>
                  <Text fontWeight={800} fontSize="40px">
                    {clockState.second}
                  </Text>
                  <Text fontWeight={600}>Seconds</Text>
                </Box>
              </Stack>
            </VStack>
          </Flex>

          <Button
            width="70%"
            height="60px"
            borderRadius="20px"
            bgColor="black"
            color={"#fff"}
            _hover={{ backgroundColor: "black" }}
          >
            VIEW NFT
          </Button>
        </VStack>
      </HStack>
    </Stack>
  );
}
