import React from "react";
import Typed from "react-typed";

type Props = {};

export default function TextTypedHeader({}: Props) {
  return (
    <div className="text-3xl px-4 text-center md:text-left md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pb-4">
      &#34;Learning is not attained by chance, it must be sought for with&nbsp;
      <Typed
        strings={[
          "ardor and diligence.",
          "focus and intelligence.",
          "curiosity and passion.",
        ]}
        typeSpeed={150}
        backSpeed={100}
        loop
      />
      &#34;
    </div>
  );
}
