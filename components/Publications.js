import bibtexParse from 'bibtex-parse-js';
import Image from 'next/image';
import { personalInfo } from '@/data/website.config';
import { CustomMDX } from '@/components/mdx';

function authorProcess(authorsStr, personalInfo) {
  const authors = authorsStr.split('and');

  const boldedAuthors = authors.map((author) => {
    author = author.trim().split(', ').reverse().join(' ').trim();

    if (author === personalInfo) {
      // console.log(author);
      return `**${personalInfo}**`;
    }

    return author;
  });

  return boldedAuthors.join(', ');
}

export default function Publications({ bibtex }) {
  const parsed = bibtexParse.toJSON(bibtex);

  return (
    <ol className='flex flex-col gap-4'>
      {parsed.map((item) => {
        const processedAuthors = authorProcess(
          item.entryTags.author,
          personalInfo.name
        );
        return (
          <li key={item.entryTags.title} className=' list-decimal'>
            <h2 className='text-base font-medium dark:text-neutral-50'>
              {item.entryTags.url ? (
                <a href={item.entryTags.url} className='underline'>
                  {item.entryTags.title.replace(/{|}/g, '')}
                </a>
              ) : (
                item.entryTags.title.replace(/{|}/g, '')
              )}
            </h2>

            <div className=' font-light text-neutral-600 dark:text-neutral-300'>
              {<CustomMDX source={processedAuthors} />}

              <span className=' mr-2 italic font-normal'>
                {item.entryTags.journal?.replace(/{|}/g, '') ||
                  item.entryTags.booktitle?.replace(/{|}/g, '')}
              </span>
              <span className='mr-2'>{item.entryTags.year}</span>
              {item.entryTags.award &&
                (item.entryTags.award === 'Honorable Mention' ? (
                  <Image
                    src='/honor.jpg'
                    alt='Honorable Mention'
                    width={20}
                    height={20}
                    className=' h-5 w-5 inline-block mr-2'
                  />
                ) : (
                  <Image
                    src='/best.jpg'
                    alt='Honorable Mention'
                    width={20}
                    height={20}
                    className='h-5 w-5 inline-block mr-2'
                  />
                ))}
              <span className='font-bold h-5'>{item.entryTags.award}</span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
