"use client";
import React, { useState, useRef, useEffect, useMemo } from "react";
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
import Tag from "./Tag";
import { Howl } from "howler";

type WindowType = "about" | "links" | "projects";

type OpenWindow = {
  id: string;
  type: WindowType;
};

type Project = {
  id: string;
  title: string;
  name: string;
  imgSrc: string;
  description: string;
  tags: string[];
  link: string;
};

const projects: Project[] = [
  {
    id: "portfolio",
    name: "Autum Portfolio",
    title: "https://autumfalls.home/projects/portfolio",
    imgSrc: "./portfolio.png",
    description:
      "Literally this website built with Next.js, React and Tailwind. It is a simple portfolio website that showcases my projects and skills.I tried to make it look like a browsing experience with my favorite color scheme",
    tags: ["Next.js", "React", "Tailwind", "TypeScript"],
    link: "https://github.com/ThiccestZexie",
  },
  {
    id: "mediocreShowList",
    name: "Mediocre Show List",
    title: "https://autumfalls.home/projects/ShowList",
    imgSrc: "./Medio.png",
    description:
      "A simple React project to keep track of your shows and anime. its not fully functionnal yet but taught me a lot about API calls, state management and hooks.",
    tags: ["React", "JavaScript", "CSS", "API"],
    link: "https://github.com/ThiccestZexie/MediocreShowList",
  },
  {
    id: "Pintos",
    name: "PintosNightmare",
    title: "https://autumfalls.home/projects/Pintos",
    imgSrc: "",
    description:
      "A course project for my OS class. It is a simple implementation of a tetris game using C and the Pintos OS. It taught me a lot about OS concepts, file systems and threads.",
    tags: ["C", "OS", "File System", "Threads"],
    link: "https://github.com/ThiccestZexie/PintosNightmare",
  },
  {
    id: "Supreme-octo-carnival",
    name: "Supreme-octo-carnival",
    title: "https://autumfalls.home/projects/Supreme",
    imgSrc: "./Octo.png",
    description:
      "A Java game made with only Swing during my course work. Taught me a lot abotu Java and OOP concepts. Made during the coruse TDDE30",
    tags: ["Java", "Swing", "OOP"],
    link: "https://github.com/ThiccestZexie/supreme-octo-carnival",
  },
  {
    id: "Zaya Game Engine",
    name: "Zaya Game Engine",
    title: "https://autumfalls.home/projects/Zaya",
    imgSrc: "",
    description:
      "A simple Java game engine made with LWJGL. Not fully functional but it still has taught me a lot and can batch render, load textures and shaders, has a simple scene manager and a camera handler .",
    tags: ["Java", "lwjgl", "Game Engine"],
    link: "https://github.com/ThiccestZexie/Zaya-GameEngine-DOS",
  },
];

const ProfileBox = () => {
  const clickSound = useMemo(() => {
    return new Howl({
      src: ["/click1.mp3"], // served from public/
      preload: true,
      volume: 0.5,
    });
  }, []);

  const playClickSound = () => {
    clickSound.stop(); // reset to start
    clickSound.play();
  };
  const [openWindows, setOpenWindows] = useState<OpenWindow[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpen = (type: WindowType) => {
    setOpenWindows((ws) =>
      ws.some((w) => w.type === type)
        ? ws.filter((w) => w.type !== type)
        : [...ws, { id: nanoid(), type }]
    );
  };

  const handleClose = (id: string) => {
    playClickSound();
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
          <div className="font-[family-name:var(--font-jetbrains-mono)]">
            <p className="text-black mb-1 ">
              Hi I'm Daniel currently studying M.Sc. Student in Computer Science
              at Linköpings University. I am a passionate developer with a keen
              interest in technology and programming. I have experience in
              various programming languages and frameworks, and I am always
              eager to learn more.
            </p>
            {/* <h1 className="text-2xl mask-clip-padding"> Hi</h1>
            <p className="text-black mb-1  ">
              I am currently looking for internships and job opportunities in
              the field of software development. If you are interested in my
              work, please feel free to contact me.
            </p> */}
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
          <div className="h-full flex flex-col p-2">
            <div className="flex-1 overflow-auto">
              <div className="grid grid-cols-2 gap-6">
                {projects.map((proj) => (
                  <div
                    key={proj.id}
                    onClick={() => {
                      playClickSound();
                      setSelectedProject(proj);
                    }}
                    className="border p-4 rounded-lg shadow hover:shadow-lg transition-all duration-200 flex flex-col items-center space-y-2 cursor-pointer bg-white"
                  >
                    {proj.imgSrc ? (
                      <img
                        src={proj.imgSrc}
                        alt={proj.title}
                        className="w-full h-40 object-cover rounded"
                      />
                    ) : (
                      <div className="w-full h-40 flex items-center justify-center bg-gray-200 text-gray-500 rounded">
                        Missing image..
                      </div>
                    )}
                    <p className="mt-2 font-[family-name:var(--font-jetbrains-mono)] text-center">
                      {proj.name}
                    </p>
                  </div>
                ))}
              </div>
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
        <img
          src="./ico2.jpg"
          className="w-32 h-32 rounded-full bg-gray-300 mb-4"
        />
        <h2 className="text-4xl text-black font-[family-name:var(--font-jetbrains-mono)]">
          hi! <span className="text-orange-500 font-bold">i'm daniel</span>
        </h2>
        <p className="text-black mt-2">Student, gamer and a hobbyist</p>

        {/* Icons / Buttons */}
        <div className="mt-20 flex  space-x-16">
          <div
            onClick={() => {
              playClickSound();
              handleOpen("about");
            }}
            role="button"
            tabIndex={0}
            className="flex flex-col items-center cursor-pointer"
          >
            <FaInfoCircle size={60} color="orange" />
            <span className="text-sm mt-1 text-amber-800">about</span>
          </div>
          <div
            onClick={() => {
              playClickSound();
              handleOpen("links");
            }}
            role="button"
            tabIndex={0}
            className="flex flex-col items-center cursor-pointer"
          >
            <FaLink size={60} color="orange" />
            <span className="text-sm mt-1 text-amber-800">links</span>
          </div>
          <div
            onClick={() => {
              playClickSound();
              handleOpen("projects");
            }}
            role="button"
            tabIndex={0}
            className="flex flex-col items-center cursor-pointer"
          >
            <FaFolder size={60} color="orange" />
            <span className="text-sm mt-1 text-amber-800">projects</span>
          </div>
        </div>
      </div>

      {/* existing windows */}
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

      {/* new project‑detail window */}
      {selectedProject && (
        <SpawnWindow
          key={selectedProject.id}
          size={{ width: 700, height: 500 }}
          title={selectedProject.title}
          content={
            <div className="flex h-full font-[family-name:var(--font-jetbrains-mono)]">
              {selectedProject.imgSrc ? (
                <img
                  src={selectedProject.imgSrc}
                  alt={selectedProject.title}
                  className="w-2/5 h-3/4 object-cover rounded-l"
                />
              ) : (
                <div className="w-2/5 h-3/4 flex items-center justify-center bg-gray-200 text-gray-500 rounded-l">
                  Missing image..
                </div>
              )}
              <div className="p-4 flex-1 flex flex-col">
                <p className="mb-4 font-[family-name:var(--font-jetbrains-mono)]">
                  {selectedProject.description}
                </p>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Skills
                </h2>
                <div className=" flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-blue-600 hover:underline"
                >
                  Open Project
                </a>
              </div>
            </div>
          }
          onClose={() => {
            playClickSound();
            setSelectedProject(null);
          }}
        />
      )}
    </div>
  );
};

export default ProfileBox;
