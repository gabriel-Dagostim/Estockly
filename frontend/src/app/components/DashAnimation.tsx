// src/app/components/DashAnimation.tsx
"use client";

import dynamic from 'next/dynamic';
import animationData from "../../../public/dash-animated.json";

// Carregar Lottie dinamicamente sem SSR
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const DashAnimation: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 w-32 h-32 md:w-48 md:h-48 z-50">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default DashAnimation;
