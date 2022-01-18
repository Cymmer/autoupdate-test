import React from 'react';
import styles from './styles.module.scss';

const RightHandle = () => (
  <div className={styles.RightHandle}>
    <div className={styles.RightHandle_container}>
      <span className={styles.RightHandle_dot} />
      <span className={styles.RightHandle_dot} />
      <span className={styles.RightHandle_dot} />
    </div>
  </div>
);

export default RightHandle;
