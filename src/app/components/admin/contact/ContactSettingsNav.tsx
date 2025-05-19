import Link from "next/link";

export default function ContactSettingsNav() {
  return (
    <div className="w-2/3 mx-auto bg-white  mt-0 mb-10">
      <div className="flex text-black gap-8 justify-center">
        <Link
          href="#"
          className="hover:bg-black hover:text-white p-4 transition-colors delay-100"
        >
          SETTINGS
        </Link>
        <Link
          href="#"
          className="hover:bg-black hover:text-white p-4 transition-colors delay-100"
        >
          RESPONSES
        </Link>
        <Link
          href="#"
          className="hover:bg-black hover:text-white p-4 transition-colors delay-100"
        >
          HOVER
        </Link>
      </div>
    </div>
  );
}
