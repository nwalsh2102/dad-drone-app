import ContactTableHeader from "@/app/components/admin/contact/ContactTableHeader";
import prisma from "@/lib/db";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const responseId = parseInt(params.id, 10);
  if (isNaN(responseId)) {
    return <p className="p-4 text-red-500">Invalid ID</p>;
  }
  const contactResponse = await prisma.contactResponses.findUnique({
    where: {
      id: responseId,
    },
  });

  return (
    <>
      <ContactTableHeader />
      <div className="w-2/3 mx-auto bg-white p-4 mt-0 mb-10">
        <div className="w-full">
          <div className="w-[80%]">
            <h1 className="bg-black text-lg font-bold p-2 mb-3">
              ID: {contactResponse?.id}
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
