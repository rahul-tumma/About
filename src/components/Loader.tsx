//@ts-nocheck

import Image from "next/image";
import { IMAGES } from "@/assets";

function Loader() {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen flex justify-center items-center z-[999] bg-black">
      <div className="h-[200px] w-[250px] relative">
        <Image fill src={IMAGES.PACKMANLOADER} alt="packman pre loader"></Image>
      </div>
    </div>
  );
}

export default Loader;
