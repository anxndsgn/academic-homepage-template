import React from "react";
import ProjectCard from "./ProjectCard";
import { formatDate, getProjects } from "@/app/projects/utils";

export default function ProjectSection() {
  const projects = getProjects().sort((a, b) => {
    return new Date(b.metadata.date) - new Date(a.metadata.date);
  });
  return (
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
  );
}
