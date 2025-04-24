"use client";

import { motion } from "framer-motion";
import ReactDOM from "react-dom";

type SpawnWindowProps = {
  title: string;
  content: React.ReactNode;
  onClose: () => void;
};

const SpawnWindow: React.FC<SpawnWindowProps> = ({
  title,
  content,
  onClose,
}) => {
  if (typeof document === "undefined") return null;

  return ReactDOM.createPortal(
    <motion.div
      drag
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      //  Cant drag out of the screen
      dragConstraints={{
        top: 0,
        left: 0,
        right: window.innerWidth - 700,
        bottom: window.innerHeight - 300,
      }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute top-40 left-40 text-black bg-white w-[800px] h-[600px] border border-black rounded-lg shadow-xl z-50"
    >
      <div className="handle cursor-move  p-2  justify-between  rounded-t-lg w-full h-16 bg-gray-800 flex items-center pl-4">
        <span className="text-2xl font-[family-name:var(--font-jetbrains-mono)] text-white">
          {title}
        </span>
        <button
          onClick={onClose}
          className="text-sm bg-red-500 text-black px-2 rounded hover:bg-red-600"
        >
          ✕
        </button>
      </div>
      <div className="p-4 overflow-auto h-[calc(100%-40px)]">{content}</div>
    </motion.div>,
    document.body
  );
};

export default SpawnWindow;
