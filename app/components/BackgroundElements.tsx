import FloatingElement from "./FloatingElement";
import { IMAGE_DIMENSIONS, ALT_TEXTS } from "../constants";

export default function BackgroundElements() {
  return (
    <>
      {/* Fire effect */}
      <FloatingElement 
        src="/fire.gif" 
        alt={ALT_TEXTS.FIRE} 
        width={IMAGE_DIMENSIONS.FIRE.width} 
        height={IMAGE_DIMENSIONS.FIRE.height} 
        className="w-full h-auto" 
        priority 
      />
      
      {/* Decorative button */}
      <FloatingElement
        src="/button.webp"
        alt={ALT_TEXTS.BUTTON}
        width={IMAGE_DIMENSIONS.BUTTON.width}
        height={IMAGE_DIMENSIONS.BUTTON.height}
        className="w-[8%] absolute left-2 -top-2 z-[2] pointer"
        priority
      />
      
      {/* Floating elements */}
      <FloatingElement
        src="/goat.webp"
        alt={ALT_TEXTS.GOAT}
        width={IMAGE_DIMENSIONS.GOAT.width}
        height={IMAGE_DIMENSIONS.GOAT.height}
        className="w-[40%] absolute top-[15%] z-[10] floating pointer motion-blur-light"
        priority
      />
      
      <FloatingElement
        src="/ball.webp"
        alt={ALT_TEXTS.BALL}
        width={IMAGE_DIMENSIONS.BALL.width}
        height={IMAGE_DIMENSIONS.BALL.height}
        className="w-[40%] absolute right-0 top-[30%] z-[10] floating pointer ball-shadow"
      />
      
      <FloatingElement
        src="/star.webp"
        alt={ALT_TEXTS.STAR}
        width={IMAGE_DIMENSIONS.STAR.width}
        height={IMAGE_DIMENSIONS.STAR.height}
        className="w-[40%] absolute right-0 top-[10%] z-[10] floating pointer motion-blur"
      />
    </>
  );
}
