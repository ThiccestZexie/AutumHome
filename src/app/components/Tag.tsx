import React from "react";

const Tag = ({ text }) => {
  return (
    <div className="transform transition-all duration-100 hover:translate-y-1 inline-block m-2">
      <div className="bg-gray-100 text-gray-700 px-2 py-2 rounded-md text-sm shadow-md hover:shadow-lg font-[family-name:var(--font-jetbrains-mono)]">
        {text}
      </div>
    </div>
  );
};

export default Tag;
