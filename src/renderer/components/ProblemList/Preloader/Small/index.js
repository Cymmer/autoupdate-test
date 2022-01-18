import React from 'react';
import styles from './styles.module.scss';

import { Card, Shine } from '../../../elements';

const PreloaderSmall = () => (
  <Card className={styles.PreloaderSmall}>
    <div className={styles.PreloaderSmall_shineHolder}>
      <Shine className={styles.PreloaderSmall_shine} />
    </div>
  </Card>
);

export default PreloaderSmall;
