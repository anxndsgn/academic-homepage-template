import About from "@/components/About";
import News from "@/components/News";

export default function Home() {
  return (
    <main className="md:w-[36rem] m-auto px-8 mt-32 flex flex-col gap-10">
      <About />

      <News />
    </main>
  );
}
