import React from 'react';
import classnames from 'classnames';

import { AppHeader } from '@/components';

import styles from './index.less';

export default (props: any) => {
  //

  return (
    <div className={classnames(styles.container)}>
      <AppHeader className={classnames(styles.header)}></AppHeader>
      <div className={classnames(styles.content)}>{props.children}</div>
    </div>
  );
};
