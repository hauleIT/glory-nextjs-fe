import { Box, Container, Stack, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import BackgroundRandom from "../background";
import Footer from "../footer";
import Header from "../header";
import { useAppDispatch } from "../../hooks/hooks";
import { useEffect } from "react";
import { setInfoUser } from "../../redux/auth/authSlice";
import styles from "../../styles/Home.module.css";

export interface LayoutProps {
  children: React.ReactElement;
}

export default function Layout(props: LayoutProps) {
  const color = useColorModeValue("md", "md-dark");
  const { children } = props;
  const router = useRouter();
  const currentUrl = router.pathname;
  const dispatch = useAppDispatch();
  useEffect(() => {
    const user = localStorage.getItem("USER");

    if (user) dispatch(setInfoUser(JSON.parse(user)));
  }, []);

  if (currentUrl.includes("/login") || currentUrl.includes("/register")) {
    return (
      <Box>
        <BackgroundRandom />
        <Container
          maxW="lg"
          h="100vh"
          py={{ base: "12", md: "24" }}
          px={{ base: "0", sm: "8" }}
          bg={color}
          position={"relative"}
          display={"flex"}
          alignItems={"center"}
        >
          <Stack
            // className={styles.box}
            spacing="8"
            w={"100%"}
            borderRadius={{ base: "none", sm: "xl" }}
          >
            <Box
              // className={styles.form}
              py={{ base: "0", sm: "8" }}
              px={{ base: "4", sm: "10" }}
              bg={"#fff"}
              boxShadow={{
                base: "none",
                sm: `${color}`,
              }}
              borderRadius={{ base: "none", sm: "xl" }}
            >
              {children}
            </Box>
          </Stack>
        </Container>
      </Box>
    );
  }
  if (
    currentUrl.includes("/home") ||
    currentUrl.includes("/blockchain") ||
    currentUrl.includes("/games")
  ) {
    return (
      <Box className="w-full h-full">
        <Box className={`${styles.box_background_right} hidden md:block`}></Box>
        <Box className={` ${styles.box_background_left} `}></Box>
        <Box className={styles.box_content}>
          <Header />
          <Box>{children}</Box>
          <Footer />
        </Box>
      </Box>
    );
  }
  return <>{children}</>;
}
