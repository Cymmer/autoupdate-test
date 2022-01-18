import React from 'react';
import styles from './styles.module.scss';

import { Card, Shine, Separator } from '../../../elements';

const PreloaderLarge = () => (
  <Card className={styles.PreloaderLarge}>
    <div className={styles.PreloaderLarge_head}>
      <Shine className={styles.PreloaderLarge_shine} />
      <Shine className={styles.PreloaderLarge_shine} />
    </div>
    <Separator />
    <div className={styles.PreloaderLarge_body}>
      <Shine className={styles.PreloaderLarge_shine} />
      <Shine className={styles.PreloaderLarge_shine} />
      <Shine className={styles.PreloaderLarge_shine} />
    </div>
  </Card>
);

export default PreloaderLarge;
