import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import Text from '../Text';
import Cody from '../Cody';
import textTypes from '../Text/constants/textTypes';

import ButtonLink from '../Button/Link';
import Button from '../Button';

import noResultsTypes from './constants/noResultsTypes';

const NoResults = ({ id, text, className, codyType, action, type }) => (
  <div className={cn(styles[`NoResults___${type}`], className)}>
    <div className={styles.NoResults_imageContainer}>
      <Cody className={styles.NoResults_image} type={codyType} />
    </div>
    <Text id={id} type={textTypes.HEADING.XS}>
      {text}
    </Text>
    {action != null && (
      <>
        {typeof action.action === 'function' ? (
          <Button className={styles.NoResults_button} onClick={action.action}>
            {action.text}
          </Button>
        ) : (
          <ButtonLink className={styles.NoResults_button} to={action.action}>
            {action.text}
          </ButtonLink>
        )}
      </>
    )}
  </div>
);

NoResults.defaultProps = {
  id: 'noResultsFound',
  type: noResultsTypes.LARGE,
  text: 'No Results Found',
  codyType: GLOBALS.CODY_TYPES.ERROR,
  className: null,
  action: null,
};

NoResults.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf([noResultsTypes.LARGE, noResultsTypes.SMALL]),
  text: PropTypes.oneOfType(PropTypes.string, PropTypes.node),
  codyType: PropTypes.oneOf([
    GLOBALS.CODY_TYPES.WELCOME,
    GLOBALS.CODY_TYPES.ERROR,
    GLOBALS.CODY_TYPES.OK,
  ]),
  className: PropTypes.string,

  action: PropTypes.shape({
    action: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    text: PropTypes.string,
  }),
};

export default NoResults;
