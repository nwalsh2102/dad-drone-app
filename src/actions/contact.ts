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

export async function contact(actionState: any, formData: FormData) {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
    success: "Thank you for contacting us",
  });

  async function createResponse() {
    await prisma.contactResponses.create({
      data: {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
      },
    });

    console.log("NEW RESPONSE CREATED");
  }

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: formData.get("message") as string,
      name: formData.get("name") as string,
      email: formData.get("email") as string,
    };
  }

  createResponse();
}
