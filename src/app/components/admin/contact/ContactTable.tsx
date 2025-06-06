// export const dynamic = "force-dynamic";

import { contactTableDelete } from "@/actions/contactTable";
import prisma from "@/lib/db";
import { DeleteResponse } from "./DeleteButton";
import EditResponse from "./EditResponse";
import Link from "next/link";

export default async function ContactTable() {
  const responses = await prisma.contactResponses.findMany();
  const count = await prisma.contactResponses.count();
  if (count === 0) {
    return (
      <div className="w-2/3 mx-auto bg-white p-4 mt-0 mb-10">
        <h1 className="text-red-500 text-2xl">NO RESPONSES FOUND</h1>
        <p className="text-red-500">
          Please wait for a response, or create one.
        </p>
      </div>
    );
  }
  return (
    <div className="w-2/3 mx-auto bg-white p-4 mt-0 mb-10">
      <div>
        <table className="w-full">
          <thead>
            <tr className="bg-black text-white">
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Message</th>
              <th className="px-4 py-2 border">Created</th>
              <th className="px-4 py-2 border bg-neutral-500">Edit</th>
              <th className="px-4 py-2 border">Del</th>
            </tr>
          </thead>
          <tbody>
            {responses.map((response) => (
              <tr key={response.id} className="bg-black text-white">
                <td className="px-4 py-2 border">{response.id}</td>
                <td className="px-4 py-2 border">{response.name}</td>
                <td className="px-4 py-2 border">{response.email}</td>
                <td className="px-4 py-2 border hover:cursor-pointer">
                  <Link href={`/admin/contact/${response.id}`}>
                    {response.message}
                  </Link>
                </td>
                <td className="px-4 py-2 border">
                  {response.createdAt.toString()}
                </td>
                <td className="px-4 py-2 border bg-neutral-500 hover:bg-neutral-500 active:bg-red-600">
                  <EditResponse width="full" />
                </td>
                <td className="px-4 py-2 border hover:bg-neutral-600 hover:cursor-pointer">
                  <DeleteResponse width="full" id={response.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <p className="text-black mt-3">Total Responses: {count}</p>
        </div>
      </div>
    </div>
  );
}
