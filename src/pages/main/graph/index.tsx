import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import {
  ModelGraph,
  GraphHeaderToolButton,
  ModelSearch,
  ModelGraphStencil,
  GraphHeader,
} from '@/components';
import { Graph, ObjectExt, Cell, Addon } from '@antv/x6';

import styles from './index.less';

export const GraphPage = (props: any) => {
  const [graph, setGraph] = useState<Graph | null>(null);

  return (
    <div className={classnames(props.className, styles.container)}>
      <div className={classnames(styles.left)}>
        <ModelSearch className={classnames(styles.search)}></ModelSearch>
        <ModelGraphStencil
          target={graph}
          className={classnames(styles.stencil)}
        ></ModelGraphStencil>
      </div>
      <div className={classnames(styles.center)}>
        <GraphHeader
          className={classnames(styles.header)}
          buttons={[]}
          graph={graph}
        ></GraphHeader>
        <ModelGraph
          className={classnames(styles.graph)}
          setGraph={(graph) => {
            setGraph(graph);
          }}
        ></ModelGraph>
      </div>
    </div>
  );
};

export default GraphPage;
