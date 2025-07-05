"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

type TabSelectorProps = {
  setActiveTab: (tab: string) => void;
};

export default function TabSelector({ setActiveTab }: TabSelectorProps) {
  const searchParams = useSearchParams();

  // Set active tab based on URL parameter
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (
      tabParam &&
      ["lesson-plans", "elementary", "junior", "high-school"].includes(tabParam)
    ) {
      setActiveTab(tabParam);
    }
  }, [searchParams, setActiveTab]);

  return null;
}
