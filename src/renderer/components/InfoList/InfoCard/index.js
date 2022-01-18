import React from 'react';
import PropTypes from 'prop-types';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import { Card, Text, Icon, Code } from '../../elements';
import {
  textTypes,
  getSyntaxHighlighterLanguageFromExtension,
} from '../../elements/constants';

const InfoCard = ({
  title,
  info,
  syntax,
  code,
  output,
  languageExtension,
  additionalInfo,
}) => (
  <>
    <Card className={styles.InfoCard}>
      <div className={styles.InfoCard_accent} />
      <div className={styles.InfoCard_content}>
        <Text
          className={styles.InfoCard_subject}
          colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
          type={textTypes.HEADING.XS}
        >
          {title}
        </Text>
        <Text
          className={styles.InfoCard_description}
          colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['600']}
          type={textTypes.BODY.MD}
        >
          <span dangerouslySetInnerHTML={{ __html: info }} />
        </Text>
        {syntax && (
          <div className={styles.InfoCard_syntax}>
            <Text
              colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}
              type={textTypes.BODY.MD}
            >
              Syntax:
            </Text>
            {syntax.map((text, index) => (
              <Code
                key={index}
                className={styles.InfoCard_syntax_code}
                language={getSyntaxHighlighterLanguageFromExtension(
                  languageExtension
                )}
              >
                {text}
              </Code>
            ))}
          </div>
        )}

        {code && (
          <div className={styles.InfoCard_code}>
            <Code
              language={getSyntaxHighlighterLanguageFromExtension(
                languageExtension
              )}
            >
              {code}
            </Code>
            {output && (
              <>
                <Text type={textTypes.HEADING.XXXS}>Output:</Text>
                <Code>{output}</Code>
              </>
            )}
          </div>
        )}
      </div>
    </Card>

    {additionalInfo && (
      <Card className={styles.InfoCard_additional}>
        <Icon className={styles.InfoCard_additional_icon} icon="info" />
        <Text className={styles.InfoCard_additional_text}>
          {additionalInfo}
        </Text>
      </Card>
    )}
  </>
);

InfoCard.defaultProps = {
  syntax: null,
  output: null,
  additionalInfo: null,
  code: null,
  languageExtension: null,
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,

  // an array of strings that contains all the possible
  // syntaxes for this current info
  syntax: PropTypes.arrayOf(PropTypes.string),

  // an actual sample code for this current info
  code: PropTypes.string,

  // the output of the actual sample code. This only
  // contains some value if there is a sample code.
  output: PropTypes.string,

  // the programming language set for this editor
  languageExtension: PropTypes.oneOf(GLOBALS.LANGUAGE_EXTENSIONS_PROP_TYPES),

  // any additional information
  additionalInfo: PropTypes.string,
};

export default InfoCard;
