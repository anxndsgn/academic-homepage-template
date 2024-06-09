import About from "@/components/About";
import News from "@/components/News";
import SelectedPublications from "@/components/SelectedPublications";

export default function Home() {
  return (
    <main className="md:w-[40rem] m-auto px-8 mt-32 flex flex-col gap-10 mb-20">
      <About />
      <News />
      <SelectedPublications />
    </main>
  );
}
