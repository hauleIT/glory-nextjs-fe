import { Button, ButtonGroup, VisuallyHidden } from "@chakra-ui/react";
import * as React from "react";
import GitHubIcon from "../../assets/github.svg";
import GoogleIcon from "../../assets/google.svg";
import FacebookIcon from "../../assets/facebook.svg";
import Image from "next/image";

const socialNetwork = [
  { name: "Google", icon: <Image src={GoogleIcon} alt="Google" /> },
  { name: "Github", icon: <Image src={GitHubIcon} alt="Github" /> },
  { name: "Facebook", icon: <Image src={FacebookIcon} alt="Facebook" /> },
];

export default function SocialLogin() {
  return (
    <>
      <ButtonGroup variant="outline" spacing="4" width="full">
        {socialNetwork.map(({ name, icon }) => (
          <Button key={name} width="full">
            <VisuallyHidden>Sign in with {name}</VisuallyHidden>
            {icon}
          </Button>
        ))}
      </ButtonGroup>
    </>
  );
}
