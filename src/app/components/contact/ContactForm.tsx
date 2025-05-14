"use client";

import { contact } from "@/actions/contact";
import { useActionState } from "react";

interface CInputProps {
  type: string;
  name: string;
  placeholder: string;
  mClass?: "squared";
  defValue: any;
}

function ContactInput({
  type,
  name,
  placeholder,
  mClass,
  defValue,
}: CInputProps) {
  const heightClass = mClass === "squared" ? "h-48 resize-none" : "";
  const baseClasses = `
    w-full
    bg-neutral-900
    text-white
    text-1xl
    border-0
    border-b-1
    border-white
    focus:outline-none
  `;

  if (mClass === "squared") {
    return (
      <label htmlFor={name} className="block">
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          defaultValue={defValue}
          //   required
          className={`
            ${baseClasses}
            h-48          /* make it tall */
            p-2           /* padding so text isn't glued to edges */
            resize-none   /* optional: disable manual resizing */
          `}
        />
      </label>
    );
  }

  return (
    <label htmlFor={name} className="block">
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defValue}
        // required
        className={`
          ${baseClasses}
          py-2          /* give vertical padding */
          px-2          /* horizontal padding */
        `}
      />
    </label>
  );
}

// function ContactButton() {
//   return (
//     <button className="border-0 bg-neutral-900 border-b-1 col-span-2 w-full h-10 mt-3 hover:bg-neutral-950 hover:cursor-pointer">
//       Submit
//     </button>
//   );
// }

export default function ContactForm() {
  const [state, action, isPending] = useActionState(contact, undefined);

  return (
    <div className="min-h-screen flex items-center justify-center select-none">
      <section className="w-300 h-150 max-w-2xl mx-auto bg-transparent py-12 border-0">
        <div>
          <div className="text-center mb-3">
            <h1 className="text-3xl font-bold">Contact</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, in?
            </p>
          </div>
          <form
            action={action}
            method="POST"
            className="grid grid-cols-2 gap-6"
          >
            <div>
              <ContactInput
                type="text"
                name="name"
                placeholder="Name"
                defValue={state?.name}
              />
              {state?.errors?.name && (
                <p className="text-red-400">{state.errors.name}</p>
              )}
            </div>
            <div>
              <ContactInput
                type="email"
                name="email"
                placeholder="Email"
                defValue={state?.email}
              />
              {state?.errors?.email && (
                <p className="text-red-400">{state.errors.email}</p>
              )}
            </div>
            <div className="col-span-2 h-10">
              <ContactInput
                type="text"
                name="message"
                placeholder="Message"
                mClass="squared"
                defValue={state?.message}
              />
              {state?.errors?.message && (
                <p className="text-red-400">{state.errors.message}</p>
              )}
              <button
                className="border-0 bg-neutral-900 border-b-1 col-span-2 w-full h-10 mt-3 hover:bg-neutral-950 hover:cursor-pointer"
                disabled={isPending}
              >
                {isPending ? "Submitting..." : "Submit"}
              </button>
              {state?.success && (
                <p className="text-green-400 mt-4">
                  Thank you for contacting us.
                </p>
              )}
            </div>
            {/* <div className="">
              {state?.success && (
                <p className="text-green-400">Thank you for contacting us.</p>
              )}
            </div> */}
          </form>
        </div>
      </section>
    </div>
  );
}
