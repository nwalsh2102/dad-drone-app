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

export async function contactResponseSeed(formData: FormData) {
  await prisma.contactResponses.createManyAndReturn({
    data: [
      {
        name: "Nick1",
        email: "nick1@email.com",
        message:
          "This is an artificial response. To put in your own artificial responses, please go to the contact settings page.",
      },
      {
        name: "Nick2",
        email: "nick2@email.com",
        message:
          "This is an artificial response. To put in your own artificial responses, please go to the contact settings page.",
      },
      {
        name: "Nick3",
        email: "nick3@email.com",
        message:
          "This is an artificial response. To put in your own artificial responses, please go to the contact settings page.",
      },
    ],
  });

  revalidatePath("/admin/contact");
}

export async function deleteAllResponses(formData: FormData) {
  await prisma.contactResponses.deleteMany();

  revalidatePath("/admin/contact");
}

// in src/actions/contactTable.ts, just above resetId
export type ResetIdResult = { success: boolean };

export async function resetId(
  previousState: ResetIdResult
): Promise<ResetIdResult> {
  await prisma.$executeRawUnsafe(`
    ALTER SEQUENCE "contactResponses_id_seq" RESTART WITH 1;
  `);
  await prisma.contactResponses.deleteMany();

  console.log("ALL IDS RESET & DELETED");
  revalidatePath("/admin/contact");

  return { success: true };
}
