// "use client";

// import { useFormStatus } from "react-dom";

// export function DeleteButton(
//   props: React.ButtonHTMLAttributes<HTMLButtonElement>
// ) {
//   const { pending } = useFormStatus();

//   return (
//     <button
//       {...props}
//       disabled={pending || props.disabled}
//       className={[
//         props.className,
//         pending ? "opacity-50 cursor-not-allowed" : "",
//       ]
//         .filter(Boolean)
//         .join(" ")}
//     />
//   );
// }

"use client";

import { useFormStatus } from "react-dom";
import { contactTableDelete } from "@/actions/contactTable";
import { useEffect, useRef, useState } from "react";

export function DeleteResponse({ id }: { id: number }) {
  const { pending } = useFormStatus();
  const prevPending = useRef(false);
  const [justDeleted, setJustDeleted] = useState(false);

  // Detect transition from pending=true to pending=false
  useEffect(() => {
    if (prevPending.current && !pending) {
      setJustDeleted(true);
    }
    prevPending.current = pending;
  }, [pending]);

  // If just deleted, show confirmation message
  if (justDeleted) {
    return (
      <div className="flex items-center space-x-2 text-green-600">
        <span>Deleted!</span>
        <button
          onClick={() => setJustDeleted(false)}
          className="text-xl leading-none"
        >
          &times;
        </button>
      </div>
    );
  }

  // Otherwise show delete button
  return (
    <form
      action={contactTableDelete}
      method="POST"
      className="inline hover:cursor-pointer"
    >
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        disabled={pending}
        className={`px-2 py-1 rounded text-white transition ${
          pending
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-red-600 hover:bg-red-700"
        }`}
      >
        {pending ? "Deleting…" : "Delete"}
      </button>
    </form>
  );
}
