import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { formatDate, getProjects } from "./utils";

export const metadata = {
  title: "Projects",
};

export default async function Projects() {
  let projects = getProjects().sort((a, b) => {
    return new Date(b.metadata.date) - new Date(a.metadata.date);
  });

  return (
    <main className="md:w-[40rem] w-full m-auto px-8 mt-32 flex flex-col gap-10">
      <h1 className="text-3xl font-semibold">Projects</h1>

      <section className="grid gap-5 transition-all h-auto">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.metadata.title}
            description={project.metadata.description}
            date={formatDate(project.metadata.date)}
            img={project.metadata.image}
            slug={project.slug}
          />
        ))}
      </section>
    </main>
  );
}
