import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RiArrowLeftSLine } from "@remixicon/react";
import { formatDate, getProjects } from "../utils";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const projectList = getProjects();
  return projectList.map((project) => ({
    slug: projectList.slug,
  }));
}

export function generateMetadata({ params }) {
  const project = getProjects().find((project) => project.slug === params.slug);
  return {
    title: project.metadata.title,
    description: project.metadata.description,
  };
}

export default async function Page({ params }) {
  const project = getProjects().find((project) => project.slug === params.slug);

  if (!project) {
    notFound();
  }

  const MDXComponents = useMDXComponents();

  return (
    <main className="md:w-[40rem] w-full m-auto px-8 mt-32 flex flex-col gap-10">
      <div className="flex gap-4">
        <Link href="/projects">
          <Button variant="outline" size="icon">
            <RiArrowLeftSLine className="w-5 h-5" />
          </Button>
        </Link>
        <h1 className="text-3xl font-semibold">{project.metadata.title}</h1>
      </div>
      <MDXRemote source={project.content} components={MDXComponents} />
    </main>
  );
}
