//@ts-nocheck

"use client";
import { motion, MotionProps, useAnimation } from "framer-motion";
import React, { useRef, useEffect } from "react";

interface RevealTextProps extends MotionProps {
  children: React.ReactNode;
  bgColor?: string;
  animationDelay?: number;
  animateOnEvent?: keyof HTMLElementEventMap;
}

function Reveal({
  children,
  bgColor = "white",
  animationDelay = 0,
  animateOnEvent,
  ...props
}: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const variants = {
    reveal: {
      x: ["-200%", 0, "200%"],
    },
  };

  useEffect(() => {
    const element = ref.current;
    if (animateOnEvent && element) {
      element.addEventListener(animateOnEvent, () => {
        controls.start("reveal");
      });
    } else {
      controls.start("reveal");
    }
    return () => {
      if (animateOnEvent && element) {
        element.removeEventListener(animateOnEvent, () => {});
      }
    };
  }, [animateOnEvent, controls, ref]); // Make sure to add eventName to dependency array if it's dynamic

  return (
    <div ref={ref} className="relative overflow-hidden w-fit h-full">
      <motion.div
        variants={variants}
        initial={{ x: -200 + "%" }}
        animate={controls}
        transition={{
          duration: 1,
          delay: animationDelay,
        }}
        style={{ backgroundColor: bgColor }}
        className="absolute top-0 left-0 h-full w-full overflow-hidden z-20"
        {...props}
      ></motion.div>
      <motion.div
        style={{ position: "relative", zIndex: 1, overflow: "hidden" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: animationDelay + 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;
