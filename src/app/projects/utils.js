import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { parseISO, format } from "date-fns";

function parseFrontmatter(content) {
  let { data, content: mdxContent } = matter(content);
  return {
    metadata: data,
    content: mdxContent,
  };
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path
      .basename(file, path.extname(file))
      .replace(/ /g, "")
      .toLowerCase();

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getProjects() {
  return getMDXData(path.join(process.cwd(), "src", "data", "projects"));
}

export function formatDate(date) {
  return format(parseISO(date), "MMMM dd, yyyy");
}
