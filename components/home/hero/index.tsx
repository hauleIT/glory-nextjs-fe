import Image from "next/image";
import React from "react";
import Iphone14 from "../../iphone14";
import TextTypedHeader from "../../textTypedHeader";
import styles from "../../../styles/Home.module.css";
import PlayIcon from "../../../assets/play.svg";
import Guarder from "../../../assets/people.svg";
import ModalVideo from "../modalVideo";
import { useDisclosure } from "@chakra-ui/react";

type Props = {};

export default function Hero({}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="w-full lg:container m-auto pt-16">
      <div className="flex flex-col lg:flex-row  align-center justify-between">
        <div className="w-full lg:w-[60%] flex flex-col justify-center">
          <h4 className="text-amber-600 font-bold text-base text-center md:text-left md:text-xl pb-2">
            LEARNING NEVER EXHAUSTS THE MIND.{" "}
          </h4>

          <TextTypedHeader />
          <p className="text-sm px-6 md:px-0  md:text-base w-full lg:w-[70%] text-center md:text-left pb-4 text-blue-600/100">
            Learning is a treasure that will follow its owner everywhere. An
            investment in knowledge pays the best interest.
          </p>
          <div className="flex flex-col md:flex-row md:items-start items-center ">
            <button
              className={`p-4 ${styles.btn} w-fit text-white rounded-[8px] mb-4 md:mb-0 font-semibold mr-4`}
            >
              Try for learning
            </button>
            <button className="flex items-center md: mb-0 mb-8 justify-center">
              <div className="h-[50px] w-[50px] flex items-center justify-center bg-slate-100 rounded-full">
                <Image
                  src={PlayIcon}
                  alt="Play"
                  width={"30px"}
                  height={"30px"}
                />
              </div>
              <p className={`ml-2  text-blue-600/100 `} onClick={onOpen}>
                Watch a video for relax
              </p>
            </button>
          </div>
        </div>

        <div className="flex w-full md:w-[40%] justify-center md:justify-start">
          <div className="md:block absolute w=full m-auto md:ml-[50px] z-10">
            <Iphone14 />
          </div>
          <div className="hidden md:block relative w-full md:w-[50%] right-[-140px] md:right-[-355px] bottom-[-130px] md:bottom-[-130px]">
            <Image
              src={Guarder}
              alt="Guarder"
              width={"300px"}
              height={"500px"}
            />
          </div>
        </div>
      </div>
      <ModalVideo isOpenModal={isOpen} onCloseModal={onClose} />
    </div>
  );
}
