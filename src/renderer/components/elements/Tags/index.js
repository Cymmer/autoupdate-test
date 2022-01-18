import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';

import Tag from './Tag';
import { tagColors } from './Tag/constants';

const Tags = ({ tags, className }) => (
  <div className={cn(className, styles.Tags)}>
    {tags.map((tag, index) => (
      <Fragment key={tag.name}>
        <Tag
          className={styles.Tags_tag}
          color={tag.color}
          data-test={tag?.dataTestId}
          id={index}
          withIcon={tag.icon != null}
        >
          {tag.icon}
          {tag.name}
        </Tag>
      </Fragment>
    ))}
  </div>
);

Tags.defaultProps = {
  className: null,
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      dataTestId: PropTypes.string,
      name: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.node]),
      icon: PropTypes.node,
      color: PropTypes.oneOf([tagColors.BLUE, tagColors.LIGHT_BLUE]),
    })
  ).isRequired,
  className: PropTypes.string,
};

export default Tags;
