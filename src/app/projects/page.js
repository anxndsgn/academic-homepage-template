import React from "react";
import ProjectCard from "@/components/ProjectCard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

//get project info from data/projects/ return a array of objects
function getMdxFilesList(directoryPath) {
  const fullPath = path.join(process.cwd(), directoryPath);
  const files = fs.readdirSync(fullPath);
  const mdxFilesList = files
    .filter((file) => path.extname(file) === ".mdx")
    .map((file) => {
      const filePath = path.join(fullPath, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return {
        projectName: data.projectName,
        projectDesription: data.projectDescription,
        projectTime: data.projectTime,
        projectImg: data.projectImg,
        projectId: data.projectName.toLowerCase().replace(/\s/g, ""),
      };
    });
  return mdxFilesList.reverse();
}

const projects = getMdxFilesList("src/data/projects");

export default function Projects() {
  return (
    <main className="md:w-[40rem] w-full m-auto px-8 mt-32 flex flex-col gap-10">
      <h1 className="text-3xl font-semibold">Projects</h1>

      <section className="grid gap-5 transition-all h-auto">
        {projects.map((project) => (
          <ProjectCard
            key={project.projectName}
            title={project.projectName}
            desription={project.projectDesription}
            time={project.projectTime}
            img={project.projectImg}
            id={project.projectId}
          />
        ))}
      </section>
    </main>
  );
}
