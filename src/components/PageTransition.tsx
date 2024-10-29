//@ts-nocheck

"use client";

import { motion } from "framer-motion";

const anim = ({
  initial,
  enter,
  exit,
}: {
  initial: {};
  enter: {};
  exit: {};
}) => {
  return {
    initial: initial,
    enter: enter,
    exit: exit,
  };
};

const variants = {
  initial: {
    left: "-100%",
  },

  enter: {
    left: "0%",
    transition: { duration: 0.5 }, // Adjust duration as needed
  },

  exit: {
    left: "100%",
    transition: { duration: 0.5 }, // Adjust duration as needed
  },
};

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <motion.div
        {...anim(variants)}
        className="absolute w-full h-full z-50 top-0 left-0 bg-blue-700"
        style={{ position: "absolute", width: "100%", height: "100%" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default PageTransition;
