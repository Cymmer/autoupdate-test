import React from 'react';
import GLOBALS from 'codechum-app-globals';
import { Spinner } from 'components/elements';
import styles from './styles.module.scss';

const Preloader = () => (
  <div className={styles.Preloader}>
    <Spinner colorName={GLOBALS.COLOR_NAMES.BLUE} />
  </div>
);

export default Preloader;
