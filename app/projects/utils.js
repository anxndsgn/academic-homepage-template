import path from "path";
import { getMDXData, formatDate } from "@/lib/mdx-utils";

/**
 * 获取所有项目数据
 * @returns {Array} 项目数据对象数组
 */
export function getProjects() {
  return getMDXData(path.join(process.cwd(), "data", "projects"));
}

// 导出格式化日期函数，方便组件直接使用
export { formatDate };
