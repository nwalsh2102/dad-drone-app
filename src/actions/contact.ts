"use server";

import { z } from "zod";
import prisma from "@/lib/db";

const ContactFormSchema = z.object({
  email: z
    .string({ message: "Please enter in a valid string. " })
    .email({ message: "Please enter in a valid email." })
    .trim(),
  name: z
    .string({ message: "Please enter in a valid name." })
    .min(1, { message: "Please enter a name." })
    .max(255, { message: "Please enter a valid name." })
    .trim(),
  message: z
    .string({ message: "Please enter in a valid message." })
    .min(1, { message: "Please enter a message." })
    .max(1024, { message: "Please shorten message." })
    .trim(),
});

export type ContactActionResult =
  | { success: true }
  | {
      success: false;
      errors: Record<string, string[]>;
      name: string;
      email: string;
      message: string;
    };

// ME
// export async function contact(actionState: any, formData: FormData) {
//   const validatedFields = ContactFormSchema.safeParse({
//     name: formData.get("name") as string,
//     email: formData.get("email") as string,
//     message: formData.get("message") as string,
//   });

//   // const parsed = ContactFormSchema.saf

//   async function createResponse() {
//     await prisma.contactResponses.create({
//       data: {
//         name: formData.get("name") as string,
//         email: formData.get("email") as string,
//         message: formData.get("message") as string,
//       },
//     });

//     console.log("NEW RESPONSE CREATED");
//   }

//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: formData.get("message") as string,
//       name: formData.get("name") as string,
//       email: formData.get("email") as string,
//     };
//   }

//   createResponse();
// }

// GPT
export async function contact(state: any, formData: FormData) {
  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  const parsed = ContactFormSchema.safeParse(data);

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
      message: formData.get("message") as string,
      name: formData.get("name") as string,
      email: formData.get("email") as string,
    };
  }

  await prisma.contactResponses.create({
    data: parsed.data,
  });

  return { success: true };
}
