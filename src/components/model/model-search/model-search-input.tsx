import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import LOGO_PNG from '@/assets/images/idns_logo_rect.png';

import styles from './model-search-input.less';

export const ModelSearchInput = (props: { className?: string }) => {
  return (
    <div className={classnames(styles.container, props.className)}>
      <Input></Input>
    </div>
  );
};

export default ModelSearchInput;
