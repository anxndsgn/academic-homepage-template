import fs from 'fs';
import path from 'path';
import { parseISO, format } from 'date-fns';

export function parseFrontmatter(fileContent) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match[1];
  let content = fileContent.replace(frontmatterRegex, '').trim();
  let frontMatterLines = frontMatterBlock.trim().split('\n');
  let metadata = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
    metadata[key.trim()] = value;
  });

  return { metadata, content };
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path
      .basename(file, path.extname(file))
      .replace(/ /g, '')
      .toLowerCase();

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getProjects() {
  return getMDXData(path.join(process.cwd(), 'data', 'projects'));
}

export function formatDate(date) {
  return format(parseISO(date), 'MMMM dd, yyyy');
}
