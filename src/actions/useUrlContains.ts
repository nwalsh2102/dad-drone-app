"use client";

import { usePathname } from "next/navigation";

export async function useUrlContains(sub: string) {
  const pathname = usePathname() || "";
  return pathname.includes(sub);
}
