import Image from "next/image";
import { IMAGE_DIMENSIONS, ALT_TEXTS } from "../constants";

export default function MainCharacter() {
  return (
    <div className="w-[100%] justify-self-center grid -bottom-2 absolute z-[0] pointer">
      <Image 
        src="/main.webp" 
        alt={ALT_TEXTS.MAIN} 
        width={IMAGE_DIMENSIONS.MAIN.width} 
        height={IMAGE_DIMENSIONS.MAIN.height} 
        className="justify-self-center z-[0] w-[120%] h-auto" 
        priority 
      />
      <Image
        src="/crown.webp"
        alt={ALT_TEXTS.CROWN}
        width={IMAGE_DIMENSIONS.CROWN.width}
        height={IMAGE_DIMENSIONS.CROWN.height}
        className="w-[30%] absolute z-[1] justify-self-center -mt-4 glossy"
      />
    </div>
  );
}
