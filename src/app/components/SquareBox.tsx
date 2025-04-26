import { useState } from "react";
import Tag from "./Tag";
export default function TagsSection() {
  const toolsTags = [
    "VSCode",
    "Git",
    "KiCad ",
    "Figma",
    "Agile Methodology",
    "Scrum",
  ];

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
