'use client';

import Image from "next/image";
import { IMAGE_DIMENSIONS, ALT_TEXTS } from "../constants";

export default function InfoPanel() {
  const handleInfoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <section 
      className="w-[60%] h-[30%] absolute -bottom-8 left-4 flex flex-col"
      role="complementary"
      aria-label="Character information panel"
    >
      <div className="h-1/5 flex gap-4 p-2" role="group" aria-label="Character stats">
        <Image 
          src="/position.webp" 
          alt={ALT_TEXTS.POSITION} 
          width={IMAGE_DIMENSIONS.POSITION.width} 
          height={IMAGE_DIMENSIONS.POSITION.height} 
          className="pointer z-[2]" 
          style={{ width: 'auto', height: 'auto' }}
          onClick={handleInfoClick}
        />
        <Image 
          src="/age.webp" 
          alt={ALT_TEXTS.AGE} 
          width={IMAGE_DIMENSIONS.AGE.width} 
          height={IMAGE_DIMENSIONS.AGE.height} 
          className="pointer z-[2]" 
          style={{ width: 'auto', height: 'auto' }}
          onClick={handleInfoClick}
        />
      </div>
      <div className="h-4/5 -mt-6">
        <Image 
          src="/main-text.webp" 
          alt={ALT_TEXTS.MAIN_TEXT} 
          width={IMAGE_DIMENSIONS.MAIN_TEXT.width} 
          height={IMAGE_DIMENSIONS.MAIN_TEXT.height} 
          className="pointer" 
          style={{ width: 'auto', height: 'auto' }}
          onClick={handleInfoClick}
        />
      </div>
    </section>
  );
}
