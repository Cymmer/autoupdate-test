import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

import gridTypes from './constants/gridTypes';

const Grid = React.forwardRef(
  ({ className, type, rowGap, children, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn(
        className,
        styles[`Grid___${type}`],
        styles[`Grid___rowGap___${rowGap}`]
      )}
      {...rest}
    >
      {children}
    </div>
  )
);

Grid.displayName = 'Grid';

Grid.defaultProps = {
  className: null,
  type: gridTypes.THREE,
  rowGap: 16,
};

Grid.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf([
    gridTypes.ONE,
    gridTypes.TWO,
    gridTypes.THREE,
    gridTypes.FOUR,
  ]),

  // the value for the gap between rows
  rowGap: PropTypes.oneOf([8, 16]),

  // these are all the other props passed down from
  // react-beautiful-dnd's Droppable component
  rest: PropTypes.object,
};

export default Grid;
