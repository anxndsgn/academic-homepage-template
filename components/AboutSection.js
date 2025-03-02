import Link from 'next/link';
import Image from 'next/image';
import AboutMd from '@/data/home/About.mdx';
import { personalInfo } from '@/data/website.config';
import {
  RiMailLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXLine,
  RiGoogleFill,
} from '@remixicon/react';
import orcid from '@/public/orcid.svg';
import { Button } from './ui/button';

export default function AboutSection() {
  return (
    <section className='flex flex-col gap-8'>
      <div className='flex flex-col gap-8 md:flex-row md:justify-between'>
        {personalInfo.profilePicture && (
          <Image
            src={personalInfo.profilePicture}
            alt='profile image'
            width={120}
            height={120}
            className='md:hidden sm:block object-cover aspect-square'
          ></Image>
        )}
        <div className='flex flex-col gap-3'>
          <h1 className='text-4xl font-semibold'>{personalInfo.name}</h1>
          <h2 className='text-xl font-medium'>
            {personalInfo.role}{' '}
            <a
              href={personalInfo.universityWebsite}
              className='hover:underline'
            >
              @{personalInfo.university}
            </a>
          </h2>
          <div className='flex gap-3 text-neutral-600 hover:text-neutral-900'>
            {personalInfo.socialMedia.map((social) => {
              return (
                <Button asChild variant='outline' key={social.name} size={'sm'}>
                  <Link href={social.url} target='_blank'>
                    {social.name === 'Email' ? (
                      <RiMailLine size={16} />
                    ) : social.name === 'GitHub' ? (
                      <RiGithubFill size={16} />
                    ) : social.name === 'Twitter' ? (
                      <RiTwitterXLine size={16} />
                    ) : social.name === 'Google Scholar' ? (
                      <RiGoogleFill size={16} />
                    ) : social.name === 'ORCID' ? (
                      <svg
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        width='16'
                        height='16'
                      >
                        <path d='m12 0c-6.628 0-12 5.372-12 12s5.372 12 12 12 12-5.372 12-12-5.372-12-12-12zm-4.631 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1 -.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041h-1.444zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722z' />
                      </svg>
                    ) : (
                      <RiLinkedinBoxFill size={16} />
                    )}
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
        {personalInfo.profilePicture && (
          <Image
            src={personalInfo.profilePicture}
            alt='profile image'
            width={120}
            height={120}
            className='hidden md:block object-cover aspect-square'
          ></Image>
        )}
      </div>
      <article className='flex flex-col gap-2 text-pretty'>
        <AboutMd />
      </article>
    </section>
  );
}
