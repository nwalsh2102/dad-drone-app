"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export type ImageItem = {
  src: string;
  alt?: string;
};

interface ImageGridProps {
  images: ImageItem[];
}

export default function PhotoGrid({ images }: ImageGridProps) {
  const router = useRouter();

  function goPhotos() {
    router.push("/photos");
  }

  return (
    <div
      className="
        grid
        gap-4
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        select-none
        "
    >
      {images.map((img, i) => (
        <div
          key={i}
          className="relative h-75 w-auto pb-[75%] overflow-hidden hover:cursor-pointer transform transition-transform duration-300 ease-out hover:scale-105"
        >
          <Image
            src={img.src}
            alt={img.alt ?? `Image ${i + 1}`}
            fill
            className="object-cover"
            onClick={goPhotos}
          />
        </div>
      ))}
    </div>
  );
}
