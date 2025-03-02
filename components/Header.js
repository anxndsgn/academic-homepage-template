'use client';
import { personalInfo } from '@/data/website.config';
import {
  RiMenuLine,
  RiCloseLine,
  RiSunLine,
  RiMoonLine,
} from '@remixicon/react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { navigations } from '@/data/website.config';

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const nav = navigations.map((navigation) => (
    <Button asChild variant='ghost' key={navigation.name}>
      <Link href={navigation.route} className=' font-normal'>
        {navigation.name}
      </Link>
    </Button>
  ));

  return (
    <div
      className={`flex flex-col fixed top-0 w-full bg-neutral-50/80 dark:bg-neutral-800/30 backdrop-blur-lg content-start `}
    >
      <nav className='flex justify-between m-auto md:w-[40rem] w-full py-4 text-lg px-4 h-auto'>
        <Button asChild variant='ghost'>
          <Link href={'/'} className='font-semibold'>
            {personalInfo.name}
          </Link>
        </Button>
        <div className='flex'>
          <div className='md:block hidden text-neutral-600 '>
            {nav}
            {/* <Button asChild variant="ghost">
              <Link href={'/projects'} className=" font-normal">
                Projects
              </Link>
            </Button>
            <Button asChild variant="ghost" className=" font-normal">
              <Link href={'/publications'}>Publications</Link>
            </Button>
            <Button asChild variant="ghost" className=" font-normal">
              <Link href={'/cv.pdf'}>CV</Link>
            </Button> */}
          </div>

          <Button
            variant='ghost'
            size='icon'
            className='md:hidden'
            onClick={() => {
              setMenuIsOpen(!menuIsOpen);
            }}
          >
            {menuIsOpen ? (
              <RiCloseLine className='w-5 h-5' />
            ) : (
              <RiMenuLine className='w-5 h-5' />
            )}
          </Button>

          <Button
            variant='ghost'
            size='icon'
            onClick={() =>
              theme === 'light' ? setTheme('dark') : setTheme('light')
            }
          >
            {theme === 'light' ? (
              <RiSunLine className='w-5 h-5' />
            ) : (
              <RiMoonLine className='w-5 h-5' />
            )}
          </Button>
        </div>
      </nav>

      <div
        className={`h-lvh flex flex-col w-3/4 m-auto mt-8 gap-4 md:hidden ${
          menuIsOpen ? 'block' : ' hidden'
        }`}
        onClick={() => setMenuIsOpen(false)}
      >
        {nav}
      </div>
    </div>
  );
}
