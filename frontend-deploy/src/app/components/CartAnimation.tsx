"use client";

import dynamic from 'next/dynamic';
import cartAnimationData from '../../../public/cart-animate.json';

// Carrega o componente `Lottie` sem SSR
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const CartAnimation = ({ size = 500 }) => {
  return (
    <Lottie
      animationData={cartAnimationData}
      style={{ width: size, height: size }}
      className="mx-auto"
    />
  );
};

export default CartAnimation;
