import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const ProgressBar = ({ target }) => {
  const [readingProgress, setReadingProgress] = useState(0);

  // Source : https://nehalist.io/creating-a-reading-progress-bar-in-react/

  const scrollListener = () => {
    if (!target.current) {
      return;
    }

    const element = target.current;
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight;
    let windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    // we subtract 276 as the offset value from the top
    windowScrollTop -= 276;

    if (windowScrollTop === 0) {
      return setReadingProgress(0);
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100);
    }

    setReadingProgress((windowScrollTop / totalHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  });

  return (
    <progress
      className={styles.ProgressBar}
      max={100}
      value={readingProgress}
    />
  );
};

ProgressBar.propTypes = {
  target: PropTypes.object.isRequired,
};

export default ProgressBar;
