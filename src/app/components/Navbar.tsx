"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar({ title }: { title: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const goHome = () => {
    router.push("/");
  };

  return (
    <header className="sticky top-0 left-0 z-50 w-full flex items-center justify-center h-32 bg-black gap-12 select-none">
      {[
        { href: "/", label: "HOME" },
        { href: "/about", label: "ABOUT" },
        { href: "/photos", label: "PHOTOS" },
        { href: "/blog", label: "BLOG" },
        { href: "/contact", label: "CONTACT" },
      ].map(({ href, label }) => {
        const active = isActive(href);
        return (
          <Link
            key={href}
            href={href}
            className={`
              px-2 py-1 transition-colors duration-150 ease-in-out
              ${
                active
                  ? "font-bold underline underline-offset-4"
                  : "hover:bg-gray-200 hover:text-black"
              }
            `}
          >
            {label}
          </Link>
        );
      })}

      {/* <div className="text-red-800">{title}</div> */}
    </header>
  );
}
