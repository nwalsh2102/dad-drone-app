"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function contactTableDelete(formData: FormData) {
  const responseId = Number(formData.get("id"));

  await prisma.contactResponses.delete({
    where: { id: responseId },
  });

  revalidatePath("/admin/contact");

  console.log(`ID: ${responseId}. DELETED`);
}
