import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import LOGO_PNG from '@/assets/images/idns_logo_rect.png';
const { Search } = Input;

import styles from './model-search-input.less';

export const ModelSearchInput = (props: { className?: string }) => {
  return (
    <div className={classnames(styles.container, props.className)}>
      <Search
        enterButton
        placeholder="输入关键字"
        onSearch={(value: string) => {
          console.log(value);
        }}
      ></Search>
    </div>
  );
};

export default ModelSearchInput;
