import { useState } from "react";
import Tag from "./Tag";
export default function TagsSection() {
  const toolsTags = ["VSCode", "Git", "KiCad ", "Figma"];

  const devTags = [
    "C#",
    "C++",
    "C",
    "Java",
    "Rust",
    "Python",
    "JavaScript",
    "HTML/CSS",
    "React",
    "Next.js",
  ];

  const Tag = ({ text }) => {
    return (
      <div className="transform transition-all duration-100 hover:translate-y-1 inline-block m-2">
        <div className="bg-gray-100 text-gray-700 px-2 py-2 rounded-md text-sm shadow-md hover:shadow-lg font-[family-name:var(--font-jetbrains-mono)]">
          {text}
        </div>
      </div>
    );
  };

  return (
    <div className=" max-w-6xl mx-auto p-6">
      <div className="flex flex-wrap">
        <div className="w-full pr-0 md:w-1/2 md:pr-4">
          <h2 className=" font-[family-name:var(--font-jetbrains-mono)] text-xl font-semibold text-gray-800 mb-4">
            TOOLS
          </h2>
          <div className="flex flex-wrap">
            {toolsTags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 pl-0 md:pl-4 mt-8 md:mt-0">
          <h2 className="font-[family-name:var(--font-jetbrains-mono)] text-xl font-semibold text-gray-800 mb-4">
            DEVELOPMENT
          </h2>
          <div className="flex flex-wrap">
            {devTags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
