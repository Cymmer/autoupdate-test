import React from 'react';
import PropTypes from 'prop-types';
import { getUsedInString } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import { Card, Text, Tags, Data, Badge } from '../../../elements';

import { textTypes } from '../../../elements/constants';

const ProblemCardSmall = ({
  score,
  problem: { name, id, tags },
  usedIn,
  viewProblem,
  onClick,
  disabled,
}) => (
  <Card
    className={styles.ProblemCardSmall}
    data-test="problemCardSmallContainer"
    id={`problemCardSmall_${id}`}
    onClick={!disabled ? onClick || viewProblem : () => {}}
  >
    <div className={styles.ProblemCardSmall_score}>
      <Data colorClass={GLOBALS.COLOR_CLASSES.BLUE['300']} label="Score">
        {score}
      </Data>
    </div>
    <div className={styles.ProblemCardSmall_title}>
      <Text type={textTypes.HEADING.XXS}>{name}</Text>
      <Tags
        className={styles.ProblemCardSmall_tags}
        id={tags.map((tag) => tag.id)}
        tags={tags.map((tag) => ({
          name: tag.name,
        }))}
      />
      {usedIn?.length > 0 && (
        <Badge
          className={styles.ProblemCardSmall_badge}
          colorName={GLOBALS.COLOR_NAMES.RED}
          text={getUsedInString(usedIn)}
        />
      )}
    </div>
  </Card>
);

ProblemCardSmall.defaultProps = {
  viewProblem: null,
  onClick: null,
  disabled: false,
};

ProblemCardSmall.propTypes = {
  score: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,

  problem: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,

  disabled: PropTypes.bool,

  // the used in data of this problem with the user
  // in relation to the selected section
  usedIn: PropTypes.arrayOf(
    PropTypes.shape({
      problem_id: PropTypes.number,
      section: PropTypes.object,
      task: PropTypes.object,
    })
  ),

  viewProblem: PropTypes.func,

  // this is an optional override onclick function to this card
  onClick: PropTypes.func,
};

export default ProblemCardSmall;
