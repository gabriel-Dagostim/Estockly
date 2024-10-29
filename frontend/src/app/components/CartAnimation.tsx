// src/app/components/CartAnimation.tsx
"use client";

import Lottie from "lottie-react";
import cartAnimationData from "../../../public/cart-animate.json";

const CartAnimation = ({ size = 500 }) => {  // Tamanho ajustado
  return (
    <Lottie
      animationData={cartAnimationData}
      style={{ width: size, height: size }}
      className="mx-auto"
    />
  );
};

export default CartAnimation;
