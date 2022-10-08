import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import {
  PictureOutlined,
  RedoOutlined,
  UndoOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';
import { Graph, DataUri } from '@antv/x6';
import { Divider } from 'antd';

import styles from './graph-header.less';

export type GraphHeaderToolButton =
  | 'export-png'
  | 'export-svg'
  | 'redo'
  | 'undo'
  | 'zoom-in'
  | 'zoom-out'
  | '';

export const GraphHeaderButton = (props: {
  type: GraphHeaderToolButton;
  onClick?: () => void;
}) => {
  return (
    <div
      className={classnames(styles.button)}
      onClick={() => {
        props.onClick && props.onClick();
      }}
    >
      {_getIconByType(props.type)}
    </div>
  );
};

export const GraphHeader = (props: {
  className?: string;
  graph: Graph | null;
  buttons: Array<GraphHeaderToolButton>;
}) => {
  if (props.graph == null) {
    return <></>;
  }

  return (
    <div className={classnames(styles.container, props.className)}>
      <div className={classnames(styles.left)}>
        <GraphHeaderButton
          type={'redo'}
          onClick={() => {
            props.graph!.redo();
          }}
        ></GraphHeaderButton>
        <Divider type="vertical" />
        <GraphHeaderButton
          type={'redo'}
          onClick={() => {
            props.graph!.redo();
          }}
        ></GraphHeaderButton>
        <GraphHeaderButton
          type={'undo'}
          onClick={() => {
            props.graph!.undo();
          }}
        ></GraphHeaderButton>

        <GraphHeaderButton
          type={'zoom-in'}
          onClick={() => {
            props.graph!.zoom(0.2);
          }}
        ></GraphHeaderButton>

        <GraphHeaderButton
          type={'zoom-out'}
          onClick={() => {
            props.graph!.zoom(-0.2);
          }}
        ></GraphHeaderButton>
      </div>
      <div className={classnames(styles.right)}>
        <GraphHeaderButton
          type={'export-png'}
          onClick={() => {
            props.graph!.toPNG(
              (dataUri: string) => {
                // 下载
                DataUri.downloadDataUri(dataUri, 'chart.png');
              },
              {
                padding: {
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                },
              },
            );
          }}
        ></GraphHeaderButton>
        <GraphHeaderButton
          type={'export-svg'}
          onClick={() => {
            props.graph!.toSVG((dataUri: string) => {
              // 下载
              DataUri.downloadDataUri(
                DataUri.svgToDataUrl(dataUri),
                'chart.svg',
              );
            });
          }}
        ></GraphHeaderButton>
      </div>
    </div>
  );
};

export default GraphHeader;

//
const _getIconByType = (type: GraphHeaderToolButton) => {
  if (type === 'redo') {
    return <RedoOutlined />;
  }
  if (type === 'undo') {
    return <UndoOutlined />;
  }
  if (type === 'zoom-in') {
    return <ZoomInOutlined />;
  }
  if (type === 'zoom-out') {
    return <ZoomOutOutlined />;
  }
  if (type === 'export-png') {
    return <PictureOutlined />;
  }
  return <RedoOutlined />;
};
