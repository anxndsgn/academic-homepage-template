import AboutSection from "@/components/AboutSection";
import NewsSection from "@/components/NewsSection";
import PublicationsSection from "@/components/SelectedPublicationsSection";
import bibtex from "@/data/bib/Publications.bib";

export default function Home() {
  return (
    <main className="md:w-[40rem] m-auto px-8 mt-32 flex flex-col gap-10 mb-20">
      <AboutSection />
      <NewsSection />
      <PublicationsSection bibtex={bibtex} />
    </main>
  );
}
