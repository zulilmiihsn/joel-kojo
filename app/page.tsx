"use client";
import { Londrina_Solid } from "next/font/google";
import {
  Crown,
  DinamoSamarqand,
  JoelBig,
  Name,
  SoundOff,
  SoundOn,
  TheGoat,
} from "@/components/AllSVG";
import { useState } from "react";

const londrine = Londrina_Solid({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [isOn, setIsOn] = useState(false);
  function clickSound() {
    setIsOn(!isOn);
  }
  const [isCrown, setIsCrown] = useState(false);
  function clickCrown() {
    setIsCrown(!isCrown);
  }
  return (
    <main className="main-screen bg-[url('/bg.png')]">
      <div className="w-[60%] h-[27%] z-[3] absolute left-4 top-4 flex flex-col items-start gap-2">
        <Name className="h-4/5" />
        <div className="h-1/5 flex flex-row gap-3 justify-start items-center drop-shadow-2xl">
          <DinamoSamarqand className="h-[60%] aspect-auto" />
          <h1
            className={`${londrine.className} text-[32px] font-bold text-white`}
          >
            FW
          </h1>
          <h1
            className={`${londrine.className} text-[32px] font-bold text-white flex flex-row gap-1`}
          >
            25<p className="text-white font-bold">y.o</p>
          </h1>
        </div>
      </div>
      <JoelBig className="w-[420px] absolute right-0 -top-12 z-[2]" />
      <button onClick={clickCrown}>
      <Crown className={`w-32 absolute z-[2] right-6 rotate-[16deg] animate-pulse drop-shadow-xl transition ease-in-out ${isCrown ? "-top-6" : "top-2"}`}/>
      </button>
      <img
        src="/kyrgyztan-flag.svg"
        alt=""
        className="w-full absolute z-[1] top-1/3 scale-[1.75]"
      />
      <img
        src="/JoelKojoDrawing.webp"
        className="z-[4] absolute bottom-16 -right-28 scale-[1.75] rotate-12"
      />
      <button
        onClick={clickSound}
        className="absolute z-10 h-1/5 w-1/2 left-0 bottom-72"
      >
        {isOn ? <SoundOn className="w-3/5" /> : <SoundOff className="w-3/5" />}
      </button>
      <TheGoat className="w-64 absolute z-[3] -left-2 bottom-6 rotate-3 shaking" />
    </main>
  );
}
