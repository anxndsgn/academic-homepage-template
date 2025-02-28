import path from "path";
import { getMDXData, formatDate } from "@/lib/mdx-utils";

/**
 * 获取所有新闻数据
 * @returns {Array} 新闻数据对象数组
 */
export function getNews() {
  return getMDXData(path.join(process.cwd(), "data", "news"));
}

// 导出格式化日期函数，方便组件直接使用
export { formatDate };
