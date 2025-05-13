import Navbar from "../app/components/Navbar";
import HomeHero from "./components/home/HomeHero";
import { TextLeft, TextRight } from "./components/home/SideTexts";
import PhotoGrid from "./components/home/PhotoGrid";

export default function () {
  const images = [
    { src: "/home/featured/featured1.JPG", alt: "Featured 1" },
    { src: "/home/featured/featured2.JPG", alt: "Featured 2" },
    { src: "/home/featured/featured3.JPG", alt: "Featured 3" },
    { src: "/home/featured/featured4.JPG", alt: "Featured 4" },
  ];

  return (
    <>
      <Navbar title="HOME" />
      <HomeHero />
      <TextLeft
        section="black"
        colorT="white"
        colorP="text-gray-100"
        title="Featured Photos"
        body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur mollitia aliquid perferendis ratione facere labore sequi, non debitis molestias sit. Odio ea veritatis facilis beatae quod incidunt rem ad nostrum?"
        link="/photos"
        right={<PhotoGrid images={images} />}
      />
    </>
  );
}
