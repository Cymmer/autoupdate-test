import React from 'react';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import { Card, Shine } from '../../../elements';

import { InfoBars } from '../../..';

const PreloaderLarge = () => (
  <Card className={styles.PreloaderLarge}>
    <div className={styles.PreloaderLarge_accent} />
    <div className={styles.PreloaderLarge_content}>
      <Shine className={styles.PreloaderLarge_shine} />
      <Shine className={styles.PreloaderLarge_shine} />
      <div className={styles.PreloaderLarge_data}>
        <InfoBars
          className={styles.PreloaderLarge_progressBar}
          colorHexCode={GLOBALS.COLOR_HEX_CODES.NEUTRAL['200']}
          label="Loading"
          text=""
          value={0}
        />
        <InfoBars
          className={styles.PreloaderLarge_progressBar}
          colorHexCode={GLOBALS.COLOR_HEX_CODES.NEUTRAL['200']}
          label="Loading"
          text=""
          value={0}
        />
        <InfoBars
          className={styles.PreloaderLarge_progressBar}
          colorHexCode={GLOBALS.COLOR_HEX_CODES.NEUTRAL['200']}
          label="Loading"
          text=""
          value={0}
        />
        <InfoBars
          className={styles.PreloaderLarge_progressBar}
          colorHexCode={GLOBALS.COLOR_HEX_CODES.NEUTRAL['200']}
          label="Loading"
          text=""
          value={0}
        />
      </div>
    </div>
  </Card>
);

export default PreloaderLarge;
