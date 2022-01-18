import React from 'react';
import PropTypes from 'prop-types';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import { Cody, Text, Container } from '../../../../../../components/elements';
import { textTypes } from '../../../../../../components/elements/constants';

const TopicContainer = ({ number, title, titleJsx, image, children }) => (
  <Container className={styles.TopicContainer}>
    <Text
      className={styles.TopicContainer_topic}
      colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['300']}
      type={textTypes.HEADING.XXS}
    >
      Topic {number}
    </Text>

    <div className={styles.TopicContainer_title}>
      <Cody className={styles.TopicContainer_title_cody} src={image} />
      <div className={styles.TopicContainer_title_content}>
        <Text
          className={styles.TopicContainer_title_text}
          type={textTypes.HEADING.MD}
        >
          {title}
        </Text>
        {titleJsx}
      </div>
    </div>

    {children}
  </Container>
);

TopicContainer.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  titleJsx: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default TopicContainer;
