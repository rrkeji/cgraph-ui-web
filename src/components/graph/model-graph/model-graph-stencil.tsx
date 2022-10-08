import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { Graph, ObjectExt, Cell, Addon } from '@antv/x6';
import { CiOutlined, FontSizeOutlined } from '@ant-design/icons';
import styles from './model-graph-stencil.less';

export const DndSourceNode = (props: {
  icon: any;
  onMouseDown?: (event: any) => void;
}) => {
  return (
    <div
      className={classnames(styles.dnd_source_container)}
      onMouseDown={(event) => {
        props.onMouseDown && props.onMouseDown(event);
      }}
    >
      {props.icon}
    </div>
  );
};

export const ModelGraphStencil = (props: {
  className?: string;
  target: Graph | null;
}) => {
  useEffect(() => {
    if (!props.target) {
      return;
    }
  }, [props.target]);

  return (
    <div className={classnames(props.className, styles.container)}>
      <div className={classnames(styles.title)}>图标</div>
      <div className={classnames(styles.buttons)}>
        <DndSourceNode
          icon={<CiOutlined />}
          onMouseDown={(event) => {
            if (props.target == null) {
              return;
            }
            console.log('xxxxxxx');
            const dnd = new Addon.Dnd({
              target: props.target,
            });
            const r1 = props.target.createNode({
              shape: 'class',
              name: ['<<Abstract>>111', '动物111'],
              attributes: ['+有生命111'],
              methods: ['+新陈代谢()111', '+繁殖(111)'],
            });
            dnd.start(r1, event);
          }}
        ></DndSourceNode>
        <DndSourceNode
          icon={<FontSizeOutlined />}
          onMouseDown={(event) => {
            if (props.target == null) {
              return;
            }
            console.log('xxxxxxx');
            const dnd = new Addon.Dnd({
              target: props.target,
            });
            const r1 = props.target.createNode({
              shape: 'class',
              name: ['<<Abstract>>111', '动物111'],
              attributes: ['+有生命111'],
              methods: ['+新陈代谢()111', '+繁殖(111)'],
            });
            dnd.start(r1, event);
          }}
        ></DndSourceNode>
      </div>
    </div>
  );
};
