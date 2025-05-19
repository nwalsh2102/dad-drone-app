import { contactTableDelete } from "@/actions/contactTable";
import ContactTableHeader from "@/app/components/admin/contact/ContactTableHeader";
import { DeleteResponse } from "@/app/components/admin/contact/DeleteButton";
import EditResponse from "@/app/components/admin/contact/EditResponse";
// import RespondResponse from "@/app/components/admin/contact/RespondResponse";
import prisma from "@/lib/db";
import Link from "next/link";
// import { useRouter } from "next/router";

async function deleteResponse(deleteId: any) {
  const responses = await prisma.contactResponses.findUnique({
    where: {
      id: deleteId,
    },
  });
}

export default async function Page({
  params,
  searchParams,
}: {
  // ← both params & searchParams are async
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string | string[]>>;
}) {
  // 1) await to get the real params object
  const { id: rawId } = await params;

  // 2) parse your id into a number
  const responseId = parseInt(rawId, 10);
  if (isNaN(responseId)) {
    return (
      <div>
        <p className="p-4 text-red-500">
          Invalid ID: <code>{rawId}</code>
        </p>
        <Link href="/admin/contact" className="bg-white">
          Go Back
        </Link>
      </div>
    );
  }

  // 3) now Prisma will happily accept a Number
  const contactResponse = await prisma.contactResponses.findUnique({
    where: { id: responseId },
  });

  if (!contactResponse) {
    return (
      <div>
        <p className="p-4 text-gray-700">
          No response found for ID {responseId}.
        </p>
        <Link href="/admin/contact" className="bg-white text-black p-5">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <>
      <ContactTableHeader />
      <div className="w-2/3 mx-auto bg-white p-4 mt-0 mb-10 grid grid-cols-3 grid-rows-1">
        <div className="w-full col-span-2">
          <div className="w-[100%]">
            <h1 className="bg-black text-lg font-bold p-2 mb-3">
              ID: {contactResponse?.id}
              <br />
              NAME: {contactResponse?.name}
              <br />
              EMAIL: {contactResponse?.email}
              <br />
              CREATED: {contactResponse?.createdAt.toString()}
            </h1>
            <div className="bg-black p-4">
              <h2 className="bg-white m-2 mb-0 p-1 text-black font-bold">
                Message:
              </h2>
              <p className="bg-white m-2 mt-0 p-1 text-black">
                {contactResponse?.message}
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-black ml-3">
          <div className="bg-white p-2 m-3">
            <h1 className="text-black font-bold text-center">ACTIONS</h1>
          </div>
          <div className="bg-white p-2 m-3">
            <DeleteResponse width="full" id={contactResponse.id} />
          </div>
          <div className="bg-white p-2 m-3">
            <EditResponse width="full" />
          </div>
          <div className="bg-white p-2 m-3">
            {/* <RespondResponse width="full" /> */}
            <button
              className={`bg-green-600 w-full cursor-pointer hover:bg-green-800 px-2 py-1 text-white`}
            >
              <Link
                href={`mailto:${contactResponse.email}?subject=Contact%20Response`}
                className=""
              >
                RESPOND
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
