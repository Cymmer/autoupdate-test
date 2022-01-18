import GLOBALS from 'codechum-app-globals';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.scss';

const SidebarBase = ({ watermark, color }) => (
  <section className={styles[`Sidebar___${color}`]} data-test="sidebarSection">
    <img
      alt="Watermark"
      className={styles.Sidebar_watermark}
      data-test="watermark"
      src={watermark}
    />
  </section>
);

SidebarBase.defaultProps = {
  color: GLOBALS.COLOR_THEMES.DEFAULT,
};

SidebarBase.propTypes = {
  watermark: PropTypes.string.isRequired,
  color: PropTypes.oneOf(Object.values(GLOBALS.COLOR_THEMES)),
};

export default SidebarBase;
