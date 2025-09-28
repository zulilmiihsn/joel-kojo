import Image from "next/image";
import { IMAGE_DIMENSIONS, ALT_TEXTS } from "../constants";

export default function SideCharacters() {
  return (
    <>
      {/* Left side character */}
      <div className="w-[40%] h-[55%] -right-4 -bottom-12 absolute pointer rounded-full z-[5]">
        <Image
          src="/main-left.webp"
          alt={ALT_TEXTS.MAIN_LEFT}
          width={IMAGE_DIMENSIONS.MAIN_LEFT.width}
          height={IMAGE_DIMENSIONS.MAIN_LEFT.height}
          className="object-cover h-[120%] -translate-y-32 -translate-x-4"
          style={{ overflow: 'visible' }}
        />
      </div>
      
      {/* Right side character */}
      <div className="w-[45%] rounded-full h-[30%] -left-2 bottom-64 absolute pointer z-[1]">
        <Image 
          src="/main-right.webp" 
          alt={ALT_TEXTS.MAIN_RIGHT} 
          width={IMAGE_DIMENSIONS.MAIN_RIGHT.width} 
          height={IMAGE_DIMENSIONS.MAIN_RIGHT.height} 
          className="object-cover h-[160%]" 
          style={{ overflow: 'visible' }}
        />
      </div>
    </>
  );
}
