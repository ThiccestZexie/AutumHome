"use client";
import React, { useState } from "react";
import {
  FaInfoCircle,
  FaFolder,
  FaQuestion,
  FaLink,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import SpawnWindow from "./SpawnWindow";
import { nanoid } from "nanoid";
import SquareBox from "./SquareBox";

type WindowType = "about" | "links" | "projects";

type OpenWindow = {
  id: string;
  type: WindowType;
};

const ProfileBox = () => {
  const [openWindows, setOpenWindows] = useState<OpenWindow[]>([]);

  const handleOpen = (type: WindowType) => {
    setOpenWindows((ws) =>
      ws.some((w) => w.type === type)
        ? ws.filter((w) => w.type !== type)
        : [...ws, { id: nanoid(), type }]
    );
  };

  const handleClose = (id: string) => {
    setOpenWindows((ws) => ws.filter((w) => w.id !== id));
  };

  const getTitle = (type: WindowType) => {
    switch (type) {
      case "about":
        return "https://autumfalls.home/about";
      case "links":
        return "https://autumfalls.home/links";
      case "projects":
        return "https://autumfalls.home/projects";
      default:
        return "https://autumfalls.home/unknown";
    }
  };

  const renderContent = (type: WindowType) => {
    switch (type) {
      case "about":
        return (
          <div>
            <p className="text-black mb-1 font-[family-name:var(--font-jetbrains-mono)] ">
              I am a student, developer, and soldier. I am passionate about
              technology and love to learn new things. I am currently studying
              computer science and working on various projects in my free time.
            </p>
            <ul className="list-disc pl-5 mt-3">
              <SquareBox></SquareBox>
            </ul>
          </div>
        );
      case "links":
        return (
          <div className="space-y-4 flex flex-col items-center">
            <a
              href="https://github.com/ThiccestZexie"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={60} />
              <span className="font-[family-name:var(--font-jetbrains-mono)]">
                GitHub
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-alchasov-8133001aa/"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={60} />
              <span className="font-[family-name:var(--font-jetbrains-mono)]">
                LinkedIn
              </span>
            </a>
            <a
              href="mailto:noone@email.com"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope size={60} />
              <span className="font-[family-name:var(--font-jetbrains-mono)]">
                Email
              </span>
            </a>
          </div>
        );

      case "projects":
        return (
          <div className="grid grid-cols-2 gap-4">
            <div className="border p-2 rounded">
              <a
                href="https://github.com/ThiccestZexie"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/portfolio.png"
                  alt="Project 1"
                  className="w-full h-50 rounded"
                />
              </a>
              <p className="mt-2 font-[family-name:var(--font-jetbrains-mono)]">
                Literally this website!
              </p>
            </div>
            <div className="border p-2 rounded">
              <a
                href="https://github.com/ThiccestZexie/MediocreShowList"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/medio.png"
                  alt="Project 2"
                  className="w-full h-50 rounded"
                />
              </a>
              <p className="mt-2 font-[family-name:var(--font-jetbrains-mono)] ">
                Mediocre Show List: A simple React project
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative w-[800px] h-[600px] bg-white shadow-lg rounded-md border-2 border-black overflow-hidden">
      {/* Top bar */}
      <div className="w-full h-16 bg-gray-800 flex items-center pl-4">
        <h1 className="text-2xl font-[family-name:var(--font-jetbrains-mono)] text-white">
          https://autumfalls.home/homepage
        </h1>
      </div>

      {/* Main Content */}
      <div className="p-6 flex flex-col items-center">
        <div className="w-32 h-32 rounded-full bg-gray-300 mb-4" />
        <h2 className="text-4xl text-black font-[family-name:var(--font-jetbrains-mono)]">
          hi! <span className="text-orange-500 font-bold">i'm daniel</span>
        </h2>
        <p className="text-black mt-2">Student By Day Degen By Night</p>

        {/* Icons / Buttons */}
        <div className="mt-20 flex  space-x-16">
          <div
            onClick={() => handleOpen("about")}
            role="button"
            tabIndex={0}
            className="flex flex-col items-center cursor-pointer"
          >
            <FaInfoCircle size={60} color="orange" />
            <span className="text-sm mt-1 text-amber-800">about</span>
          </div>
          <div
            onClick={() => handleOpen("links")}
            role="button"
            tabIndex={0}
            className="flex flex-col items-center cursor-pointer"
          >
            <FaLink size={60} color="orange" />
            <span className="text-sm mt-1 text-amber-800">links</span>
          </div>
          <div
            onClick={() => handleOpen("projects")}
            role="button"
            tabIndex={0}
            className="flex flex-col items-center cursor-pointer"
          >
            <FaFolder size={60} color="orange" />
            <span className="text-sm mt-1 text-amber-800">projects</span>
          </div>
        </div>
      </div>

      {/* Spawn multiple windows */}
      {openWindows.map((win) => (
        <SpawnWindow
          key={win.id}
          size={
            win.type === "links"
              ? { width: 500, height: 300 }
              : { width: 800, height: 600 }
          }
          title={getTitle(win.type)}
          content={renderContent(win.type)}
          onClose={() => handleClose(win.id)}
        />
      ))}
    </div>
  );
};

export default ProfileBox;
