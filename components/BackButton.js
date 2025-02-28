"use client";
import React from "react";
import { Button } from "./ui/button";
import { RiArrowLeftSLine } from "@remixicon/react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <Button variant="outline" size="icon" onClick={handleBack}>
      <RiArrowLeftSLine className="w-5 h-5" />
    </Button>
  );
}
