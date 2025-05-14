import ContactTableHeader from "@/app/components/admin/contact/ContactTableHeader";
import prisma from "@/lib/db";
import { ParsedUrlQuery } from "querystring";

// export default async function Page({
//   params,
// }: {
//   params: {
//     id: string;
//   };
// }) {
//   const response = await prisma.contactResponses.findUnique({
//     where: {
//       id: Number(params.id),
//     },
//   });

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
      <p className="p-4 text-red-500">
        Invalid ID: <code>{rawId}</code>
      </p>
    );
  }

  // 3) now Prisma will happily accept a Number
  const contactResponse = await prisma.contactResponses.findUnique({
    where: { id: responseId },
  });

  if (!contactResponse) {
    return (
      <p className="p-4 text-gray-700">
        No response found for ID {responseId}.
      </p>
    );
  }

  return (
    <>
      <ContactTableHeader />
      <div className="w-2/3 mx-auto bg-white p-4 mt-0 mb-10">
        <div className="w-full">
          <div className="w-[80%]">
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
              <h2 className="bg-white m-1 mb-0 p-1 text-black font-bold">
                Message:
              </h2>
              <p className="bg-white m-1 mt-0 p-1 text-black">
                {contactResponse?.message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
