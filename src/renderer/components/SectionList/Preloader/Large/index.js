import React from 'react';
import styles from './styles.module.scss';

import { Card, Shine } from '../../../elements';

const PreloaderLarge = () => (
  <Card className={styles.PreloaderLarge}>
    <div className={styles.PreloaderLarge_image} />
    <div className={styles.PreloaderLarge_textContainer}>
      <Shine className={styles.PreloaderLarge_shine} />
      <Shine className={styles.PreloaderLarge_shine} />
    </div>
  </Card>
);

export default PreloaderLarge;
