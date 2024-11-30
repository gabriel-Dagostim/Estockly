// src/app/components/LottieAnimation-server-animate.tsx
'use client';

import dynamic from 'next/dynamic';
import animationData from '../../../public/server-animate.json';

// Carregar o componente Lottie dinamicamente sem SSR
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const LottieAnimation = ({ size = 300 }) => {
  return (
    <Lottie
      animationData={animationData}
      style={{ width: size, height: size }}
      className='mx-auto'
    />
  );
};

export default LottieAnimation;
