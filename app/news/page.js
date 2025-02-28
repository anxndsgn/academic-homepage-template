import NewsSection from "@/components/NewsSection";

export const metadata = {
  title: "News",
};

export default async function Page() {
  return (
    <main className="md:w-[40rem] w-full m-auto px-8 mt-32 flex flex-col gap-10 mb-20">
     <h1 className="text-3xl font-semibold">News</h1>
     <NewsSection />
    </main>
  );
}
