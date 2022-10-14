import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";

type ModalProps = {
  isOpenModal: boolean;
  onCloseModal: () => void;
};

export default function ModalVideo(props: ModalProps) {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Modal
        size="2xl"
        isOpen={props.isOpenModal}
        onClose={props.onCloseModal}
        isCentered
      >
        <ModalOverlay />ß
        <ModalContent>
          <ModalHeader>Modal Vide</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ReactPlayer
              className="w-[620px]"
              url="https://www.youtube.com/watch?v=3AyMjyHu1bA&list=RD3AyMjyHu1bA&start_radio=1"
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={props.onCloseModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
