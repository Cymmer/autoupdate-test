import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';

const Anchor = ({ className, href, willOpenNewTab, children, onClick }) => (
  // eslint-disable-next-line
  <a
    className={cn(styles.Anchor, className)}
    data-test="anchor"
    href={href}
    rel={willOpenNewTab ? 'noreferrer' : null}
    target={willOpenNewTab ? '_blank' : '_self'}
    onClick={onClick}
  >
    {children}
  </a>
);

Anchor.defaultProps = {
  willOpenNewTab: false,
  className: null,
  onClick: null,
};

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  willOpenNewTab: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Anchor;
