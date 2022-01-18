import React from 'react';
import PropTypes from 'prop-types';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import { Grid, Text } from '../elements';
import { gridTypes, textTypes } from '../elements/constants';

const GlossaryList = ({ title, notes, children, description }) => (
  <div className={styles.GlossaryList}>
    <Text
      className={styles.GlossaryList_title}
      colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
      type={textTypes.HEADING.XXS}
    >
      {title}
    </Text>
    <Text
      colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['800']}
      type={textTypes.BODY.MD}
    >
      {description}
      <br />
      <br />
    </Text>
    <Grid type={gridTypes.ONE}>{children}</Grid>
    {notes && (
      <div className={styles.GlossaryList_notes}>
        {notes.map((note, index) => (
          <Text
            key={index}
            className={styles.GlossaryList_notes_note}
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}
            type={textTypes.BODY.SM}
          >
            *{note}
          </Text>
        ))}
      </div>
    )}
  </div>
);

GlossaryList.defaultProps = {
  notes: null,
};

GlossaryList.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  notes: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default GlossaryList;
