import Image from "next/image";
import * as React from "react";

import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.jpg";
import bg3 from "../../assets/bg3.jpg";
import bg4 from "../../assets/bg4.jpg";
import bg5 from "../../assets/bg5.jpg";
import bg6 from "../../assets/bg6.jpg";

export default function BackgroundRandom() {
  const arrayImage = [bg1, bg2, bg3, bg4, bg5, bg6];
  const randomIndex = Math.floor(Math.random() * arrayImage.length);
  const selectImage = arrayImage[randomIndex];

  return (
    <>
      <Image
        src={selectImage}
        alt="background image"
        objectFit="cover"
        layout="fill"
        className="absolute"
      ></Image>
    </>
  );
}
