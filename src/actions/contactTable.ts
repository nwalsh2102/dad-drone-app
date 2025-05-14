"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function contactTableDelete(formData: FormData) {
  const id = Number(formData.get("id"));

  await prisma.contactResponses.delete({
    where: { id },
  });

  revalidatePath("/admin/contact");

  console.log(`ID: ${id}. DELETED`);
}
