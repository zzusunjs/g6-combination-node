import G6 from '@antv/g6';
import React, { useEffect } from 'react';
import '../src/combinationNode/index';

const Example = () => {
  // 定义数据源
  const data = {
    nodes: [
      { id: 'node1', x: 50, y: 100, type: 'diamond' }, // 最简单的
      { id: 'node2', x: 150, y: 100, type: 'diamond', size: [50, 100] }, // 添加宽高
      { id: 'node3', x: 250, y: 100, color: 'red', type: 'diamond' }, // 添加颜色
      { id: 'node4', x: 350, y: 100, label: '菱形', type: 'diamond' }, // 附加文本
    ],
  };

  useEffect(() => {
    // 创建 G6 图实例
    const graph = new G6.Graph({
      container: 'mountNode', // 指定图画布的容器 id，与第 9 行的容器对应
      // 画布宽高
      width: 800,
      height: 500,
    });
    // 读取数据
    graph.data(data);
    // 渲染图
    graph.render();
  }, []);

  return <div id="mountNode"></div>;
};

export default Example;
