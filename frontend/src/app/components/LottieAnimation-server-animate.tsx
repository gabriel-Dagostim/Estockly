// src/app/components/LottieAnimation-server-animate.tsx
"use client";

import Lottie from "lottie-react";
import animationData from "../../../public/server-animate.json";

const LottieAnimation = ({ size = 300 }) => {
  return (
    <Lottie
      animationData={animationData}
      style={{ width: size, height: size }}
      className="mx-auto"
    />
  );
};

export default LottieAnimation;
