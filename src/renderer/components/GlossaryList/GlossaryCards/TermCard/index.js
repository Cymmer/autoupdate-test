import React from 'react';
import PropTypes from 'prop-types';
import GLOBALS from 'codechum-app-globals';
import styles from '../styles.module.scss';

import { Text, Card } from '../../../elements';
import { textTypes } from '../../../elements/constants';

const TermCard = ({ title, description }) => (
  <Card className={styles.GlossaryCard}>
    <div className={styles.GlossaryCard_title}>
      <Text
        className={styles.GlossaryCard_title_text}
        type={textTypes.HEADING.XXS}
      >
        {title}
      </Text>
    </div>
    <div className={styles.GlossaryCard_content}>
      <Text
        colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['600']}
        type={textTypes.BODY.SM}
      >
        <span dangerouslySetInnerHTML={{ __html: description }} />
      </Text>
    </div>
  </Card>
);

TermCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TermCard;
