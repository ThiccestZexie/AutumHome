import React from "react";
import Wave from "react-wavify";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden font-[family-name:var(--font-jetbrains-mono)]">
      {/* Wave as background at bottom half */}
      <Wave
        fill="#fafae0"
        paused={false}
        className="absolute bottom-0 left-0 w-full h-2/5 z-0"
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.15,
          points: 8,
        }}
      />
      <div className="flex justify-center  items-center flex-col z-10 relative h-full">
        <Menu />
      </div>
    </div>
  );
}
