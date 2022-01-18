import React from 'react';
import PropTypes from 'prop-types';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import { Text, Card } from '../../elements';
import { textTypes } from '../../elements/constants';

const SampleProblemCard = ({ number, title, children }) => (
  <Card className={styles.SampleProblemCard}>
    <div className={styles.SampleProblemCard_description}>
      <Text
        colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
        type={textTypes.BODY.MD}
      >
        Sample Problem {number}
      </Text>
      <Text
        colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
        type={textTypes.HEADING.SM}
      >
        {title}
      </Text>
    </div>
    {children}
  </Card>
);

SampleProblemCard.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,

  // this is basically any valid JSX that contains the
  // body of this SampleProblemCard component
  // e.g.
  // <>
  //    <Text>
  //       This is lorem ipsum dolor
  //    </Text>
  //    <br />
  //    <br />
  //    <Compiler />
  // </>
  children: PropTypes.node.isRequired,
};

export default SampleProblemCard;
