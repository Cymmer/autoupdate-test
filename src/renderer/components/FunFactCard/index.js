import React from 'react';
import PropTypes from 'prop-types';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import { Card, Text, Cody } from '../elements';
import { textTypes } from '../elements/constants';

const FunFactCard = ({ mainTextJsx, childrenJsx }) => (
  <Card className={styles.FunFactCard}>
    <div className={styles.FunFactCard_text}>
      <div className={styles.FunFactCard_cody}>
        <Cody
          className={styles.FunFactCard_cody_image}
          type={GLOBALS.CODY_TYPES.THINKING}
        />
      </div>
      <div className={styles.FunFactCard_info}>
        <Text
          className={styles.FunFactCard_title}
          colorClass={GLOBALS.COLOR_CLASSES.BLUE['300']}
          type={textTypes.HEADING.XS}
        >
          Did you know?
        </Text>
        {mainTextJsx}
      </div>
    </div>
    {childrenJsx}
  </Card>
);

FunFactCard.defaultProps = {
  childrenJsx: null,
};

FunFactCard.propTypes = {
  mainTextJsx: PropTypes.node.isRequired,
  childrenJsx: PropTypes.node,
};

export default FunFactCard;
