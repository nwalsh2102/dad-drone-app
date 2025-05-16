import {
  contactResponseSeed,
  deleteAllResponses,
  resetId,
} from "@/actions/contactTable";
import { useUrlContains } from "@/actions/useUrlContains";
import prisma from "@/lib/db";
import Link from "next/link";
import { ResetIdsButton } from "./ResetIdButton";

export default async function ContactTableHeader() {
  const responsesList = await prisma.contactResponses.findMany({
    orderBy: {
      id: "desc",
    },
    take: 10,
  });

  // const _responses = useUrlContains("/admin/contact");
  // const _settings = useUrlContains("/admin/contact/settings");

  return (
    <div className="flex items-center gap-[29em] w-2/3 mx-auto bg-white p-4 mt-10 mb-1">
      <div>
        <Link href="/admin/contact" className="text-black font-bold text-3xl">
          CONTACT RESPONSES
        </Link>
      </div>
      <div>
        <ul className="flex text-black gap-9.5 cursor-pointer">
          <li className="hover:bg-black hover:text-white p-1 transition-colors delay-50">
            <Link href="/contact">CONTACT</Link>
          </li>
          <li className="relative hover:bg-black hover:text-white p-1 group">
            <Link href="/admin/contact">RESPONSES</Link>

            <div
              className="absolute bg-white text-black opacity-0 invisible 
              group-hover:opacity-100 group-hover:visible mt-1 transition-opacity duration-200"
            >
              <ul className="bg-white">
                {responsesList.map((response) => (
                  <li
                    key={response.id}
                    className="hover:bg-neutral-100 p-2 m-2 border-b-1 block w-full"
                  >
                    <Link href={`/admin/contact/${response.id}`}>
                      {response.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="relative hover:bg-black hover:text-white p-1 group">
            <Link href="/admin/contact/settings">SETTINGS</Link>

            <div
              className="absolute w-fit bg-white text-black opacity-0 invisible 
              group-hover:opacity-100 group-hover:visible mt-1 transition-opacity duration-200"
            >
              <ul className="bg-white">
                <li className="hover:bg-neutral-100 p-2 m-2 border-b-1 block">
                  <form action={contactResponseSeed}>
                    <button>Quick Response (3)</button>
                  </form>
                </li>
                <li className="hover:bg-neutral-100 p-2 m-2 border-b-1 block">
                  <form action={deleteAllResponses}>
                    <button>Delete All</button>
                  </form>
                </li>
                <li className="hover:bg-neutral-100 p-2 m-2 border-b-1 block">
                  <ResetIdsButton />
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
