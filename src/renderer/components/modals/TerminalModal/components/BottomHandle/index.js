import React from 'react';
import styles from './styles.module.scss';

const BottomHandle = () => (
  <div className={styles.BottomHandle}>
    <div className={styles.BottomHandle_container}>
      <span className={styles.BottomHandle_dot} />
      <span className={styles.BottomHandle_dot} />
      <span className={styles.BottomHandle_dot} />
    </div>
  </div>
);

export default BottomHandle;
