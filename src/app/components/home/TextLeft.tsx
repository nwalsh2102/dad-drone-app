"use client";

import { useRouter } from "next/navigation";

interface TextSectionProps {
  section: string;
  title: string;
  body: string;
  link: string;
  /** Anything you want to render on the right: an <Image>, a <video>, a list… */
  right?: React.ReactNode;
}

export function TextLeft({
  section,
  title,
  body,
  link,
  right,
}: TextSectionProps) {
  const router = useRouter();

  function goPhotos() {
    router.push(link);
  }

  return (
    <section className={`bg-${section} py-12 w-full select-none`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center h-80">
        {/* LEFT: the text box */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="bg-white/0 p-8 shadow-lg">
            <h2
              className="text-6xl font-extrabold text-white mb-4 hover:cursor-pointer"
              onClick={goPhotos}
            >
              {title}
            </h2>
            <p className="text-gray-100 text-1xl leading-relaxed">{body}</p>
          </div>
        </div>

        {/* RIGHT: any other content (image, etc.) */}
        <div className="md:w-1/2">{right}</div>
      </div>
    </section>
  );
}
