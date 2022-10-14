import {
  Avatar,
  Button,
  Center,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import * as React from "react";
import userApi from "../../api/userApi";
import StorageKeys from "../../constants/storage-keys";
import { useAppSelector } from "../../hooks/hooks";
import { selectUser } from "../../redux/auth/selectUser";

export default function Account() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useAppSelector(selectUser);

  // console.log(user);

  const handleLogout = async () => {
    // await userApi.logout();
    router.push("/auth/login");
    localStorage.removeItem(StorageKeys.USER);
    localStorage.removeItem(StorageKeys.TOKEN);
  };

  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rounded={"full"}
          variant={"link"}
          cursor={"pointer"}
          minW={0}
        >
          <Avatar
            size={"sm"}
            src={"https://avatars.dicebear.com/api/male/username.svg"}
          />
        </MenuButton>
        <MenuList alignItems={"center"}>
          <br />
          <Center>
            <Avatar
              size={"2xl"}
              src={"https://avatars.dicebear.com/api/male/username.svg"}
            />
          </Center>
          <br />
          <Center>
            <p>
              Hi, <span className="font-bold">{user}</span>{" "}
            </p>
          </Center>
          <br />
          <MenuDivider />
          <MenuItem onClick={onOpen}>Logout</MenuItem>
        </MenuList>
      </Menu>

      <>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Question Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>Do you want to log out ?</ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost" onClick={handleLogout}>
                Sure, Logout
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </>
  );
}
