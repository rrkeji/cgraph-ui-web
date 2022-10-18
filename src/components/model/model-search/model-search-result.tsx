import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { ModelSearchInput } from './model-search-input';

import styles from './model-search-result.less';

export const ModelSearch = (props: { className?: string }) => {
  return (
    <div className={classnames(styles.container, props.className)}>
      <ModelSearchInput></ModelSearchInput>
    </div>
  );
};

export default ModelSearch;
