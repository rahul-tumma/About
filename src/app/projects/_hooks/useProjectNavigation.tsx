//@ts-nocheck
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { getProjectUrl } from "@/../utils";

function useProjectNavigation({
  projects,
  activeIndex,
}: {
  projects: any[];
  activeIndex: number;
}) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(activeIndex);
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === projects.length - 1;

  const next = useCallback(() => {
    if (!isLast) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      router.push(getProjectUrl(projects[nextIndex].title).url);
    }
  }, [isLast, projects, currentIndex, router]);

  const previous = useCallback(() => {
    if (!isFirst) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      router.push(getProjectUrl(projects[prevIndex].title).url);
    }
  }, [isFirst, projects, currentIndex, router]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" && !isLast) {
        next();
      } else if (event.key === "ArrowLeft" && !isFirst) {
        previous();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, isFirst, isLast, next, previous, router, projects]);

  return { next, previous, isFirst, isLast };
}

export default useProjectNavigation;
