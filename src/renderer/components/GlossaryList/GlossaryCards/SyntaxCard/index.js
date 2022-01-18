import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.scss';

import { Text, Card, Code } from '../../../elements';
import { textTypes, programmingLanguages } from '../../../elements/constants';

const SyntaxCard = ({ title, codes, language }) => (
  <Card className={styles.GlossaryCard}>
    <div className={styles.GlossaryCard_title}>
      <Text
        className={styles.GlossaryCard_title_text}
        type={textTypes.HEADING.XXS}
      >
        {title}
      </Text>
    </div>
    <div className={styles.GlossaryCard_content}>
      {codes.map((code, index) => (
        <Code
          key={index}
          className={styles.GlossaryCard_content_code}
          language={language}
        >
          {code}
        </Code>
      ))}
    </div>
  </Card>
);

SyntaxCard.defaultProps = {
  language: null,
};

SyntaxCard.propTypes = {
  title: PropTypes.string.isRequired,
  codes: PropTypes.arrayOf(PropTypes.string).isRequired,
  language: PropTypes.oneOf([
    programmingLanguages.PYTHON,
    programmingLanguages.C,
    programmingLanguages.CPP,
  ]),
};

export default SyntaxCard;
