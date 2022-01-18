import React from 'react';
import styles from './styles.module.scss';

import { Card, Shine } from '../../../elements';

const PreloaderSmall = () => (
  <Card className={styles.PreloaderSmall}>
    <div className={styles.PreloaderSmall_image} />
    <div className={styles.PreloaderSmall_content}>
      <div className={styles.PreloaderSmall_shineHolder}>
        <Shine className={styles.PreloaderSmall_shine} />
        <Shine className={styles.PreloaderSmall_shine} />
      </div>
    </div>
  </Card>
);

export default PreloaderSmall;
