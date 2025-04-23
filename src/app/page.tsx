import Image from "next/image";
import React from "react";
import Wave from "react-wavify";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden font-[family-name:var(--font-geist-sans)]">
      {/* Wave as background at bottom half */}
      <Wave
        fill="#fafae0"
        paused={false}
        className="absolute bottom-0 left-0 w-full h-2/5 z-0"
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.15,
          points: 3,
        }}
      />

      <div className="relative z-10 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <div className="flex items-center justify-center w-full"></div>
        <h1 className="text-4xl font-bold text-center text-gray-800 font-[family-name:var(--font-jetbrains-mono)]">
          At Home Autumn Falls
        </h1>
        <p className="text-lg text-center text-gray-600 font-[family-name:var(--font-jetbrains-mono)]">
          I be at home in autumn falls
        </p>
      </div>
    </div>
  );
}
