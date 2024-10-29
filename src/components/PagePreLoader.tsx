//@ts-nocheck

"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import { IMAGES } from "@/assets";
export function PagePreLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [pageLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [pathname, searchParams, pageLoaded]);

  useEffect(() => {
    // Disable scrolling when the component mounts
    if (!pageLoaded) {
      document.querySelector("main")!.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when the component unmounts
      document.body.style.overflow = "auto";
    }

    // Clean up function to re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [pageLoaded]);

  return (
    <>
      {!pageLoaded && (
        <div className="absolute w-screen h-screen inset-0 m-auto grid place-items-center z-[9999] bg-[#000000]">
          <div className="h-[200px] w-[250px] relative">
            <Image
              fill
              src={IMAGES.PACKMANLOADER}
              alt="packman pre loader"
            ></Image>
          </div>
        </div>
      )}
    </>
  );
}
