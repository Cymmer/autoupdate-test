import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

import Breadcrumb from './Breadcrumb';

const Breadcrumbs = ({ className, links }) => (
  <div className={cn(styles.Breadcrumbs, className)}>
    {links &&
      links.map((link, index) => (
        <Breadcrumb
          key={link.name}
          active={index === links.length - 1}
          link={link.link}
        >
          {link.name}
        </Breadcrumb>
      ))}
  </div>
);

Breadcrumbs.propTypes = {
  className: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};

export default Breadcrumbs;
