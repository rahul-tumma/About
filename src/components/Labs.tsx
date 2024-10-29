"use client";
import { useAnimation, motion } from "framer-motion";
import { useState, useRef, useEffect, SetStateAction } from "react";
import Image, { StaticImageData } from "next/image";

type ModalState = {
  active: boolean;
  index: number;
};

const Projects = ({
  data,
}: {
  data: {
    title: string;
    src: StaticImageData;
    color: string;
    href: string;
  }[];
}) => {
  const [modal, setModal] = useState<ModalState>({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef<HTMLDivElement>(null);

  const moveItems = (x: number, y: number) => {
    if (modalContainer.current) {
      modalContainer.current.style.left = x + 150 + "px";
      modalContainer.current.style.top = y + 100 + "px";
    }
  };

  const manageModal = (
    active: boolean,
    index: number,
    x: number,
    y: number
  ) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <main
      id="work"
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className="flex items-center flex-col"
    >
      <div className="max-w-screen-xl w-full flex flex-col items-center justify-center mb-16 md:mb-100">
        {data.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              manageModal={manageModal}
              key={index}
              href={project.href}
            />
          );
        })}
      </div>
      <>
        <motion.div
          ref={modalContainer}
          initial={{ scale: 0, x: "-50%", y: "-50%" }}
          animate={
            active
              ? { scale: 1, x: "-50%", y: "-50%" }
              : { scale: 0, x: "-50%", y: "-50%" }
          }
          className=" h-80 w-80 md:h-[150px] md:w-[250px] fixed top-1/2 left-1/2 bg-white pointer-events-none overflow-hidden z-30"
        >
          <div
            style={{ top: index * -100 + "%" }}
            className="h-full w-full relative transition-all duration-500 ease-in-out"
          >
            {data.map((project, index) => {
              const { src, color, href } = project;
              return (
                <div
                  className="h-full w-full flex items-center justify-center relative"
                  style={{ backgroundColor: color }}
                  key={`modal_${index}`}
                >
                  <a href={href}>
                    <Image fill src={src} placeholder="blur" alt="image" />
                  </a>
                </div>
              );
            })}
          </div>
        </motion.div>
      </>
    </main>
  );
};

export default Projects;

function Project({
  index,
  title,
  manageModal,
  href,
}: {
  index: number;
  title: string;
  manageModal: (active: boolean, index: number, x: number, y: number) => void;
  href: string;
}) {
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className="project flex justify-between items-center w-full  cursor-pointer transition duration-200 hover:opacity-50"
    >
      <a
        href={href}
        className="text-black text-base md:text-lg font-semibold"
        style={{ textDecoration: "none", width: "100%" }}
        target="_blank"
      >
        <h2 className="text-white  font-medium mb-1">{title}</h2>
      </a>
    </div>
  );
}
