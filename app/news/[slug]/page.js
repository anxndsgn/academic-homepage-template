import { CustomMDX } from "@/components/mdx";
import { getNews } from "../utils";
import { notFound } from "next/navigation";
import BackButton from "@/components/BackButton";

export async function generateStaticParams() {
  const projectList = getNews();
  return projectList.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  const project = getNews().find((project) => project.slug === params.slug);
  return {
    title: project.metadata.title,
    description: project.metadata.description,
  };
}

export default async function Page(props) {
  const params = await props.params;
  const project = getNews().find((project) => project.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="md:w-[40rem] w-full m-auto px-8 mt-32 flex flex-col gap-10 mb-20">
      <div className="flex gap-4 items-center">
        <BackButton />
        <h1 className="text-3xl font-semibold">{project.metadata.title}</h1>
      </div>
      <article className="prose text-pretty">
        <CustomMDX source={project.content} />
      </article>
    </main>
  );
}
