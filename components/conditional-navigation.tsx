"use client";

import { usePathname } from "next/navigation";
import Navigation from "@/components/navigation";

export default function ConditionalNavigation() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Only render the navigation if we're not on the home page
  if (isHomePage) {
    return null;
  }

  return <Navigation />;
}
