import React from "react";
import Publications from "./Publications";
import bibtex from "../data/publications/SelectedPublications.bib";
import Link from "next/link";

export default function SelectedPublicationsSection() {
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
