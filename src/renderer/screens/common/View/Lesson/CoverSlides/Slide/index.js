import React from 'react';
import PropTypes from 'prop-types';

import { Container, Cody, Text, Button } from 'components/elements';
import { textTypes, buttonTypes } from 'components/elements/constants';
import styles from './styles.module.scss';

const Slide = ({ imageSrc, title, bodyJsx, nextText, nextAction }) => (
  <Container className={styles.Slide}>
    <div className={styles.Slide_card}>
      <div className={styles.Slide_content}>
        <Cody className={styles.Slide_content_cody} src={imageSrc} />
        <div>
          <Text
            className={styles.Slide_content_title}
            type={textTypes.HEADING.XS}
          >
            {title}
          </Text>
          {bodyJsx}
        </div>
      </div>
      <div className={styles.Slide_buttonContainer}>
        <Button
          className={styles.Slide_buttonContainer_button}
          type={buttonTypes.PRIMARY.GREEN}
          onClick={nextAction}
        >
          {nextText}
        </Button>
      </div>
    </div>
  </Container>
);

Slide.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bodyJsx: PropTypes.string.isRequired,
  nextText: PropTypes.string.isRequired,
  nextAction: PropTypes.func.isRequired,
};

export default Slide;
