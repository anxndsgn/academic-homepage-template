import Link from 'next/link';
import Image from 'next/image';
import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc';
import { highlight } from 'sugar-high';
import React from 'react';

interface TableData {
  headers: string[];
  rows: string[][];
}

interface TableProps {
  data: TableData;
}

function Table({ data }: TableProps) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  children?: React.ReactNode;
}

function CustomLink(props: CustomLinkProps) {
  let href = props.href;

  if (href?.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href?.startsWith('#')) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

type RoundedImageProps = Pick<React.ImgHTMLAttributes<HTMLImageElement>, 'className'> & {
  src: string;
  alt?: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
};

function RoundedImage(props: RoundedImageProps) {
  const { src, alt = '', width, height } = props;
  return <Image src={src} alt={alt} className="rounded-lg" width={width} height={height} />;
}

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  children?: string;
}

function Code({ children, ...props }: CodeProps) {
  let codeHTML = highlight(children || '');
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function slugify(str: string): string {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

function createHeading(level: number) {
  const Heading = ({ children }: { children?: React.ReactNode }) => {
    let slug = slugify(children as string);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,

  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong
      className="font-semibold text-neutral-900 dark:text-neutral-100"
      {...props}
    />
  ),
};

interface CustomMDXProps extends Omit<MDXRemoteProps, 'components'> {
  components?: Record<string, React.ComponentType<any>>;
}

export function CustomMDX(props: CustomMDXProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
