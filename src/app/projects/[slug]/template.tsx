//@ts-nocheck

"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

function Template({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div className="overflow-hidden" key={path}>
        <motion.div
          className="fixed h-full w-full bg-blue-500 z-[9999] top-0 left-0"
          initial={{ opacity: 0, x: "-200%" }}
          animate={{ opacity: 1, x: ["-200%", 0, "200%"] }}
          exit={{ opacity: 1, x: ["-200%", 0, "200%"] }}
        ></motion.div>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default Template;
