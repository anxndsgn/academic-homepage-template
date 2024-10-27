import React from 'react';
import { Client } from '@notionhq/client';

export default async function Home() {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });
  const pages = await notion.pages.retrieve({
    page_id: process.env.NOTION_PAGE_ID,
  });

  const content = await notion.blocks.children.list({
    block_id: process.env.NOTION_PAGE_ID,
  });

  const projectDatabseID = content.results.find(
    (block) => block.child_database.title === 'Projects'
  ).id;

  const projectDatabase = await notion.databases.query({
    database_id: projectDatabseID,
  });

  console.log(projectDatabase.results[0].properties.Name.title[0].text.content);

  // const projectTitles = projectDatabase.results.map(
  //   (project) => project.properties.Name.title[0].text.content
  // );

  // const projects = projectDatabase.results.map(
  //   async (project) =>
  //     await notion.pages.retrieve({
  //       page_id: project.id,
  //     })
  // );

  // const titles = projects.results.map(
  //   (project) => project.properties.Name.title[0].text.content
  // );

  // console.log(projects);

  return (
    <main className='md:w-[40rem] w-full m-auto px-8 mt-32 flex flex-col gap-10 mb-20'>
      <h1 className='text-3xl font-semibold'>Notion post</h1>
      <section className='flex flex-col gap-3'>
        {/* {titles.map((title) => (
          <h2 key={title} className='text-xl font-semibold'>
            {title}
          </h2>
        ))} */}
      </section>
    </main>
  );
}
