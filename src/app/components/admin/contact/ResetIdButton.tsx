"use client";

import { useActionState, useEffect, useState } from "react";
import { resetId, type ResetIdResult } from "@/actions/contactTable";

export function ResetIdsButton() {
  const [result, resetAction, isPending] = useActionState(resetId, {
    success: false,
  });

  // 2) local show flag
  const [showConfirm, setShowConfirm] = useState(false);

  // 3) whenever result.success flips true, show for 3s
  useEffect(() => {
    if (result.success) {
      setShowConfirm(true);
      const t = window.setTimeout(() => {
        setShowConfirm(false);
      }, 1500);
      return () => clearTimeout(t);
    }
  }, [result.success]);

  return (
    <div className="space-y-2">
      <form action={resetAction}>
        <button
          type="submit"
          disabled={isPending}
          className="px-3 py-1 bg-red-600 text-white rounded disabled:opacity-50"
        >
          {isPending ? "Resetting IDs…" : "Reset IDs"}
        </button>
      </form>

      {showConfirm && (
        <p className="text-green-600">ALL RESPONSES & ID'S REMOVED</p>
      )}
    </div>
  );
}
