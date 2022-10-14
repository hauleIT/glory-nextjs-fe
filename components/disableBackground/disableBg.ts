import { styled } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export const DisableBackground = styled(Box)({
    width: "100%",
    height: "100%",
    background: "rgba(111, 126, 140, 0.2",
    opacity: 0.5,
    zIndex: 1,
    position: "fixed",
});
