import fs from 'fs';
import path from 'path';
import { parseISO, format } from 'date-fns';

/**
 * 解析 MDX 文件的前置元数据
 * @param {string} fileContent - MDX 文件内容
 * @returns {Object} 包含元数据和内容的对象
 */
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

/**
 * 获取指定目录下的所有 MDX 文件
 * @param {string} dir - 目录路径
 * @returns {Array} MDX 文件名数组
 */
export function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

/**
 * 读取 MDX 文件并解析其内容
 * @param {string} filePath - 文件路径
 * @returns {Object} 包含元数据和内容的对象
 */
export function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
}

/**
 * 获取指定目录下所有 MDX 文件的数据
 * @param {string} dir - 目录路径
 * @returns {Array} MDX 文件数据对象数组
 */
export function getMDXData(dir) {
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

/**
 * 格式化日期
 * @param {string} date - ISO 格式的日期字符串
 * @returns {string} 格式化后的日期字符串
 */
export function formatDate(date) {
  return format(parseISO(date), 'MMMM dd, yyyy');
}