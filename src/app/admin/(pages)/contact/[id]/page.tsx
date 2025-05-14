import ContactTableHeader from "@/app/components/admin/contact/ContactTableHeader";
import prisma from "@/lib/db";

export default async function Page({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const id = await prisma.contactResponses.findUnique({
    where: {
      id: params.id,
    },
  });

  return (
    <>
      <ContactTableHeader />
      <div className="w-2/3 mx-auto bg-white p-4 mt-0 mb-10">
        <div>
          <div className="w-[80%] bg-black">
            <h1>ID: {id?.id}</h1>
            <h2>Message:</h2>
            <p>{id?.message}</p>
          </div>
        </div>
      </div>
    </>
  );
}
