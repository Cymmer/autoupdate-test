import React from 'react';
import styles from './styles.module.scss';

import { Card, Shine } from '../../elements';

const Preloader = () => (
  <>
    <Card className={styles.Preloader}>
      <div className={styles.Preloader_shineHolder}>
        <Shine className={styles.Preloader_shine} />
      </div>
    </Card>
    <Card className={styles.Preloader}>
      <div className={styles.Preloader_shineHolder}>
        <Shine className={styles.Preloader_shine} />
      </div>
    </Card>
    <Card className={styles.Preloader}>
      <div className={styles.Preloader_shineHolder}>
        <Shine className={styles.Preloader_shine} />
      </div>
    </Card>
  </>
);

export default Preloader;
