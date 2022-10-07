import React from 'react';
import classnames from 'classnames';
import styles from './index.less';

export default (props: any) => {
  //

  return (
    <div className={classnames(styles.container)}>
      <div className={classnames(styles.header)}>Header</div>
      <div className={classnames(styles.content)}>{props.children}</div>
    </div>
  );
};
