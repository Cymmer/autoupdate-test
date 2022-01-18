import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import Text from '../Text';
import textTypes from '../Text/constants/textTypes';
import Icon from '../Icon';
import Shine from '../Shine';

const SubInfo = ({ className, data, isLoading }) => (
  <div className={cn(className, styles.SubInfo_container)}>
    {isLoading ? (
      <>
        <Shine className={styles.SubInfo_shine} />
        <Shine className={styles.SubInfo_shine} />
      </>
    ) : (
      data.map(({ text, icon, colorClass, link }) => (
        <div key={text} className={styles.SubInfo}>
          <Icon className={styles.SubInfo_icon} icon={icon} />
          {link != null ? (
            <Link className={styles.SubInfo_link} to={link}>
              <Text
                colorClass={colorClass || GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
                type={textTypes.BODY.SM}
              >
                {text}
              </Text>
            </Link>
          ) : (
            <Text
              colorClass={colorClass || GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
              type={textTypes.BODY.SM}
            >
              {text}
            </Text>
          )}
        </div>
      ))
    )}
  </div>
);

SubInfo.defaultProps = {
  className: null,
  isLoading: false,
};

SubInfo.propTypes = {
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      text: PropTypes.string,
      colorClass: PropTypes.string,
      link: PropTypes.string,
    })
  ).isRequired,
};

export default SubInfo;
