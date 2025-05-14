"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ContactTableHeader() {
  const pathname = usePathname();

  const _responses = pathname === "/admin/contact";
  const _settings = pathname === "/admin/contact/settings";

  return (
    <>
      <div className="flex items-center gap-[35em] w-2/3 mx-auto bg-white p-4 mt-10 mb-0">
        <div className="text-3xl text-black">
          <h1 className="font-bold">Contact Responses</h1>
        </div>
        <div className="flex gap-10 text-black">
          <Link href="/contact" className={`px-2 py-1 hover:cursor-pointer`}>
            Contact
          </Link>
          <Link
            href="/admin/contact"
            className={`px-2 py-1 hover:cursor-pointer ${
              _responses ? "bg-black text-white" : ""
            }`}
          >
            Responses
          </Link>
          <Link
            href="/admin/contact/settings"
            className={`px-2 py-1 hover:cursor-pointer ${
              _settings ? "bg-black text-white" : ""
            }`}
          >
            Settings
          </Link>
        </div>
      </div>
    </>
  );
}
