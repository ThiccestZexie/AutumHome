"use client";

import { motion } from "framer-motion";
import { big } from "framer-motion/client";
import ReactDOM from "react-dom";

type SpawnWindowProps = {
  title: string;
  content: React.ReactNode;
  onClose: () => void;
  size?: { width: number; height: number };
};

const SpawnWindow: React.FC<SpawnWindowProps> = ({
  title,
  content,
  onClose,
  size,
}) => {
  if (typeof document === "undefined") return null;

  // determine window dimensions
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const width = isMobile ? window.innerWidth : size?.width ?? 800;
  const height = isMobile ? window.innerHeight : size?.height ?? 600;

  const bounds = {
    top: 0,
    left: 0,
    right: window.innerWidth - 100,
    bottom: window.innerHeight - height,
  };
  return ReactDOM.createPortal(
    <motion.div
      className="overflow-hidden absolute top-40 left-40 text-black bg-white border border-black rounded-lg shadow-xl z-50"
      drag
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      //  Cant drag out of the screen
      dragConstraints={!isMobile ? bounds : undefined}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ width, height }}
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
