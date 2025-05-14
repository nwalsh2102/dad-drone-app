export const dynamic = "force-dynamic";

import { contactTableDelete } from "@/actions/contactTable";
import prisma from "@/lib/db";
import { DeleteResponse } from "./DeleteButton";

export default async function ContactTable() {
  const responses = await prisma.contactResponses.findMany();
  const count = await prisma.contactResponses.count();

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
              <th className="px-4 py-2 border">Edit</th>
              <th className="px-4 py-2 border">Del</th>
            </tr>
          </thead>
          <tbody>
            {responses.map((response) => (
              <tr key={response.id} className="bg-black text-white">
                <td className="px-4 py-2 border">{response.id}</td>
                <td className="px-4 py-2 border">{response.name}</td>
                <td className="px-4 py-2 border">{response.email}</td>
                <td className="px-4 py-2 border">{response.message}</td>
                <td className="px-4 py-2 border">
                  {response.createdAt.toString()}
                </td>
                <td className="px-4 py-2 border hover:bg-neutral-600 hover:cursor-pointer">
                  EDIT
                </td>
                <td className="px-4 py-2 border hover:bg-neutral-600 hover:cursor-pointer">
                  <DeleteResponse id={response.id} />
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
