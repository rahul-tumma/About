"use client";
import { useState } from "react";
import { useScramble } from "use-scramble";

function MyScramble() {
  const values = ["Backend", "UI/UX", "Frontend", "Videos"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref } = useScramble({
    range: [30, 47],
    speed: 0.3,
    seed: 5,
    scramble: 5,
    text: values[currentIndex],
    onAnimationEnd: () => {
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === values.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);
    },
  });

  return <span className="inline-block min-w-[5ch]" ref={ref} />;
}

export default MyScramble;
