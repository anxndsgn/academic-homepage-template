import React from "react";
import Publications from "./Publications";
import Link from "next/link";

interface SelectedPublicationsSectionProps {
  bibtex: string;
}

export default function SelectedPublicationsSection({ bibtex }: SelectedPublicationsSectionProps) {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">Selected Publications</h1>
        <Link href="/publications" className="text-neutral-500 hover:underline">
          View all
        </Link>
      </div>
      <Publications bibtex={bibtex} />
    </section>
  );
}
