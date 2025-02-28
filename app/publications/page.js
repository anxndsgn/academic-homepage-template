import React from "react";
import SelectedPublicationsSection from "@/components/Publications";
import bibtex from "@/data/publications/Publications.bib";

export const metadata = {
  title: "Publications",
};

export default function Page() {
  return (
    <main className="md:w-[40rem] w-full m-auto px-8 mt-32 flex flex-col gap-10 mb-20">
      <h1 className="text-3xl font-semibold">Publications</h1>
      <SelectedPublicationsSection bibtex={bibtex} />
    </main>
  );
}
