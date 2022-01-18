import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { determinePercentageColorClass } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';

import { Span, Tooltip } from 'components/elements';
import { textTypes, tooltipPlacement } from 'components/elements/constants';
import styles from './styles.module.scss';

const ProblemLink = ({ answer, number, onClick, link, task }) => (
  <NavLink
    activeClassName={styles.ProblemLink___active}
    className={styles.ProblemLink}
    to={link}
    onClick={onClick}
  >
    <Span>
      {number}. {answer.question.problem.name}
    </Span>
    {task?.is_delayed_grading ? (
      <Tooltip
        content="Your teacher has chosen to check your work manually. Your score will be available once your teacher is finished grading your work."
        placement={tooltipPlacement.RIGHT}
      >
        <Span
          colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
          type={textTypes.DATA.MD}
        >
          -/{answer.question.max_score}
        </Span>
      </Tooltip>
    ) : (
      <Span
        colorClass={determinePercentageColorClass(
          parseInt(answer.score),
          answer.question.max_score
        )}
        type={textTypes.DATA.MD}
      >
        {parseInt(answer.score)}/{answer.question.max_score}
      </Span>
    )}
  </NavLink>
);

ProblemLink.defaultProps = {
  onClick: () => {},
};

ProblemLink.propTypes = {
  link: PropTypes.string.isRequired,
  answer: PropTypes.object.isRequired,
  number: PropTypes.number.isRequired,
  task: PropTypes.object,

  // additional on click handler
  onClick: PropTypes.func,
};

export default ProblemLink;
