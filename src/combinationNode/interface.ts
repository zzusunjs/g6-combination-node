/** @file combination-node 类型定义 */

export interface CombinationNode {
  // 节点宽度
  width?: number;
  // 节点内容
  // content:
}

export interface CNItem {
  // CNode 基础元素类型
  type: CNItemType;
}

export interface CNItemText extends CNItem {
  // 文本类型
  type: 'text';
  // 文本
  value: string;
  // 需要高亮的文本
  highlightText?: string;
  // 文本颜色
  fill?: string;
  // 文本大小
  size?: number;
  // 文本行数
  maxRows?: number;
}

// CNode 基础元素类型
export type CNItemType = 'text' | 'tag' | 'division';
