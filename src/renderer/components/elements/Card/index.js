import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
const Card = React.forwardRef(
  (
    { id, children, className, onClick, onMouseEnter, onMouseLeave, ...rest },
    ref
  ) => {
    const keyPressHandler = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        onClick();
      }
    };

    return (
      <div
        {...rest}
        ref={ref}
        className={cn(styles.Card, className, {
          [styles.Card___clickable]: onClick !== null,
        })}
        data-test="card"
        id={id}
        role={onClick ? 'button' : null}
        tabIndex={onClick ? 0 : null}
        onClick={onClick}
        onKeyPress={onClick ? keyPressHandler : null}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </div>
    );
  }
);

Card.defaultProps = {
  id: null,
  children: null,
  className: null,
  onClick: null,
  onMouseEnter: null,
  onMouseLeave: null,
};

Card.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

Card.displayName = 'Card';

export default Card;
