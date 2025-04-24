"use client";
import React from "react";
import {
  FaInfoCircle,
  FaLink,
  FaFolder,
  FaQuestion,
  FaEnvelope,
} from "react-icons/fa";

const ProfileBox = () => {
  const handleAbout = () => alert("Yeah you wish you were my gf");

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
        <div className="0 mt-20 spac relative ">
          <div className="flex space-x-15">
            <div
              onClick={handleAbout}
              role="button"
              tabIndex={0}
              className="flex flex-col items-center size-auto cursor-pointer"
            >
              <FaInfoCircle size={48} color="orange" />
              <span className="text-sm mt-1 1 text-amber-800">about</span>
            </div>
            <div
              onClick={handleAbout}
              role="button"
              tabIndex={0}
              className="flex flex-col items-center size-auto cursor-pointer"
            >
              <FaLink size={48} color="orange" />
              <span className="text-sm mt-1 1 text-amber-800">links</span>
            </div>

            <div
              onClick={handleAbout}
              role="button"
              tabIndex={0}
              className="flex flex-col items-center cursor-pointer"
            >
              <FaFolder size={48} color="orange" />
              <span className="text-sm mt-1 text-amber-800">projects</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;
