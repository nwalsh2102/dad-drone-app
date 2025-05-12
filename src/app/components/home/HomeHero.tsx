"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomeHero() {
  const router = useRouter();

  const goPhotos = () => {
    router.push("/photos");
  };

  return (
    <section className="relative w-screen h-screen overflow-hidden select-none">
      {/* Background Image */}
      <Image src="/home/cruiseHero.JPG" alt="Cruise Ship Image" layout="fill" />
      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white">
          Discover the Great Lakes Ships with Bill Walsh
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-xl">
          Explore the one and only drone gallery of Bill Walsh!
        </p>
        <button
          className="px-6 py-3 bg-black hover:bg-gray-200 hover:text-black hover:cursor-pointer text-white font-semibold transition-colors duration-200 ease-in-out"
          onClick={goPhotos}
        >
          Explore Now
        </button>
      </div>
    </section>
  );
}
