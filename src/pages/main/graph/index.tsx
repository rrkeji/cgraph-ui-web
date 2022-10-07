import React, { useEffect, useRef, useState } from 'react';
import useDimensions from 'react-use-dimensions';
import classnames from 'classnames';
import { Graph, ObjectExt, Cell } from '@antv/x6';
import { graphRegister } from './graph-register';

import styles from './index.less';

graphRegister(Graph);

export const GraphPage = (props: any) => {
  const [containerRef, { x, y, width, height }] = useDimensions();

  const ref = useRef<any>();

  const [graph, setGraph] = useState<Graph | null>(null);

  useEffect(() => {
    if (!ref || !ref.current) {
      return;
    }
    console.log('-------');
    //创建
    const graph = new Graph({
      container: ref.current,
      background: {
        color: '#fffbe6', // 设置画布背景颜色
      },
      grid: {
        size: 10, // 网格大小 10px
        visible: true, // 渲染网格背景
      },
      autoResize: true,
    });

    const cells: Cell[] = [];
    const edgeShapes = [
      'extends',
      'composition',
      'implement',
      'aggregation',
      'association',
    ];
    data.forEach((item: any) => {
      if (edgeShapes.includes(item.shape)) {
        cells.push(graph.createEdge(item));
      } else {
        cells.push(graph.createNode(item));
      }
    });
    graph.resetCells(cells);
    graph.zoomToFit({ padding: 10, maxScale: 1 });

    setGraph(graph);

    return () => {
      //销毁
      // setGraph(null);
    };
  }, [ref, ref.current]);

  useEffect(() => {
    if (graph == null) {
      return;
    }
    // resize
    graph.resize(width, height - 60);
  }, [width, height]);

  return (
    <div
      ref={containerRef}
      className={classnames(props.className, styles.container)}
    >
      <div className={classnames(styles.header)}></div>
      <div ref={ref} className={classnames(styles.graph)}>
        {' '}
      </div>
    </div>
  );
};

export default GraphPage;

const data = [
  {
    id: '1',
    shape: 'class',
    name: ['<<Abstract>>', '动物'],
    attributes: ['+有生命'],
    methods: ['+新陈代谢()', '+繁殖()'],
    position: {
      x: 300,
      y: 40,
    },
  },
  {
    id: '2',
    shape: 'class',
    name: ['鸟'],
    attributes: ['+羽毛'],
    methods: ['+下蛋'],
    position: {
      x: 300,
      y: 200,
    },
  },
  {
    id: '3',
    shape: 'extends',
    source: '2',
    target: '1',
  },
  {
    id: '4',
    shape: 'class',
    name: ['翅膀'],
    attributes: [],
    methods: [],
    position: {
      x: 560,
      y: 212,
    },
  },
  {
    id: '5',
    shape: 'composition',
    source: '2',
    target: '4',
    label: '1:2',
  },
  {
    id: '6',
    shape: 'class',
    name: ['大雁'],
    attributes: [],
    methods: ['+飞()'],
    position: {
      x: 210,
      y: 340,
    },
  },
  {
    id: '7',
    shape: 'class',
    name: ['企鹅'],
    attributes: [],
    methods: ['+下蛋()'],
    position: {
      x: 400,
      y: 340,
    },
  },
  {
    id: '8',
    shape: 'extends',
    source: '2',
    target: '6',
  },
  {
    id: '9',
    shape: 'extends',
    source: '2',
    target: '7',
  },
  {
    id: '10',
    shape: 'class',
    name: ['<<interface>>', '飞翔'],
    attributes: [],
    methods: ['+飞()'],
    position: {
      x: 320,
      y: 500,
    },
  },
  {
    id: '11',
    shape: 'implement',
    source: '6',
    target: '10',
  },
  {
    id: '12',
    shape: 'class',
    name: ['雁群'],
    attributes: [],
    methods: ['+V字飞行()', '+一字飞行()'],
    position: {
      x: 90,
      y: 500,
    },
  },
  {
    id: '13',
    shape: 'aggregation',
    source: '12',
    target: '6',
  },
  {
    id: '14',
    shape: 'class',
    name: ['气候'],
    attributes: [],
    methods: [],
    position: {
      x: 540,
      y: 510,
    },
  },
  {
    id: '15',
    shape: 'association',
    source: '7',
    target: '14',
  },
];
