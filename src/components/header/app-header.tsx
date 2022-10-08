import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Image } from 'antd';
import LOGO_PNG from '@/assets/images/idns_logo_rect.png';

import styles from './app-header.less';

export const AppHeader = (props: { className?: string }) => {
  return (
    <div className={classnames(styles.container, props.className)}>
      <div className={classnames(styles.left)}>
        <img className={classnames(styles.logo)} src={LOGO_PNG}></img>
      </div>
      <div className={classnames(styles.right)}>
        <Avatar
          style={{ backgroundColor: '#87d068', alignItems: 'center' }}
          icon={<UserOutlined />}
        />
      </div>
    </div>
  );
};

export default AppHeader;
