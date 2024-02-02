import { EB_Garamond } from "next/font/google";
const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: "700",
});

export default function Home() {
  return (
    <main className="main-screen bg-[url('/bg.webp')]">
      <div className="relative main-screen grid">
        <img src="fire.gif" alt="" />
        <h1
          className={`absolute top-8 inset-x-0 text-center text-white text-2xl tracking-[.50em] ${garamond.className}`}
        >
          THE GOAT
        </h1>
        <img
          src="button.webp"
          alt=""
          className="w-[8%] absolute left-2 -top-2 z-[2] pointer"
        />
        <img
          src="goat.webp"
          alt=""
          className="w-[40%] absolute top-[15%] z-[2] floating pointer"
        />
        <img
          src="ball.webp"
          alt=""
          className="w-[40%] absolute right-0 top-[30%] z-[2] floating pointer"
        />
        <img
          src="star.webp"
          alt=""
          className="w-[40%] absolute right-0 top-[10%] z-[2] floating"
        />
        <div className="w-[85%] justify-self-center grid -bottom-2 absolute z-[0] pointer">
          <img src="main.webp" alt="" className=" justify-self-center z-[0]" />
          <img
            src="crown.webp"
            alt=""
            className="w-[30%] absolute z-[1] justify-self-center -mt-4"
          />
        </div>
        <div className="w-[40%] h-[55%] -right-4 -bottom-12 absolute pointer overflow-visible rounded-full">
        <img
          src="main-left.webp"
          alt=""
          className="overflow-visible object-cover h-[120%] -translate-y-32 -translate-x-4"
        />
        </div>
        <div className="w-[45%] rounded-full h-[30%] -left-2 bottom-64 absolute pointer overflow-visible">
          <img src="main-right.webp" alt="" className="object-cover overflow-visible h-[160%]"/>
        </div>
        <div className="w-[60%] h-[30%] absolute bottom-8 left-4 flex flex-col">
          <div className="h-1/5 flex gap-4 p-2">
            <img src="position.webp" alt="" className="pointer z-[2]" />
            <img src="age.webp" alt="" className="pointer z-[2]" />
          </div>
          <div className="h-4/5 -mt-6">
            <img src="main-text.webp" alt="" className="pointer" />
          </div>
        </div>
      </div>
    </main>
  );
}
