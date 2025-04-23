import React from "react";

const ProfileBox = () => {
  return (
    <div className="w-[800px] h-[600px] bg-white shadow-lg rounded-md border-2 border-black overflow-hidden">
      {/* Top rectangle with header */}
      <div className="w-full h-16 bg-gray-800 flex items-center pl-4">
        <h1 className="text-2xl font-[family-name:var(--font-jetbrains-mono)]">
          https://autumfalls.home/homepage
        </h1>
      </div>

      {/* Rest of the content */}
      <div className="p-6 flex flex-col items-center">
        <div className="w-32 h-32 rounded-full bg-gray-300 mb-4"></div>
        <h2 className="text-4xl text-black font-[family-name:var(--font-jetbrains-mono)]">
          Hi! <span className="text-orange-500 font-bold">I'm Daniel</span>
        </h2>
        <p className="text-black mt-2">Student, Developer and a Soldier</p>
        {/* Add icons or links here as needed */}
        <h3 className="text-2xl mt-4 text-black font-[family-name:var(--font-jetbrains-mono)]">
          Contact Me
        </h3>
      </div>
    </div>
  );
};

export default ProfileBox;
