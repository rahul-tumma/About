//@ts-nocheck

"use client";


import React from 'react';
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { Spinner } from "@nextui-org/react";
import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Tilt from 'react-parallax-tilt';


function LoaderImage({
  src,
  alt,
}: {
  src: string | StaticImport;
  alt: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };

  return (
    <div className="h-full w-full" ref={ref}>
      <AnimatePresence mode="wait">
        {!loadingComplete && isInView && (
          <motion.div
            key={alt}
            className="absolute inset-0 flex justify-center items-center z-10"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
          >
            <Spinner />
          </motion.div>
        )}
      </AnimatePresence>

      <Tilt
        className="relative grid h-full w-full text-white [transform-style:preserve-3d]"
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.02}
      >
        <div
          className="col-start-1 row-start-1 bg-white w-full h-full z-[9]"
          style={{
            opacity: isInView ? 0 : 0.3,
            transition: "opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 250mss",
          }}
        />
        <Image
          src={src}
          alt={alt}
          placeholder="blur"
          objectFit="cover"
          className="col-start-1 row-start-1 h-full w-full object-contain"
          style={{
            transform: isInView ? "translateX(0px)" : "translateX(-80%)",
            transition: "transform ease-in-out 250ms",
          }}
          onLoad={handleLoadingComplete}
        />
        <div className="col-start-1 row-start-1 self-end justify-self-start p-4 [transform:translateZ(60px)]">
          <div className="backdrop-blur-md bg-black/30 p-2 rounded">
            <p className="text-3xl text-white text-start">{alt}</p>
          </div>
        </div>
      </Tilt>
    </div>
  );
}

export default LoaderImage;
