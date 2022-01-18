import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import GLOBALS from 'codechum-app-globals';

import { Container, Header, Text } from 'components/elements';
import { tabKinds, textTypes } from 'components/elements/constants';

import { LessonImage } from 'components';

import python from 'static/images/Icons/python.png';
import styles from './styles.module.scss';

import summaryTabs from './constants/summaryTabs';

const SummaryContainer = ({
  lesson,
  baseRoute,
  baseLink,
  glossarySyntaxList,
  glossaryTermsList,
  activeTab,
}) => {
  const tabs = [];
  if (glossarySyntaxList) {
    tabs.push({
      name: summaryTabs.SYNTAX.name,
      value: summaryTabs.SYNTAX.value,
      kind: tabKinds.LINK,
      action: `${baseLink}/${summaryTabs.SYNTAX.value}`,
    });
  }
  if (glossaryTermsList) {
    tabs.push({
      name: summaryTabs.TERMS.name,
      value: summaryTabs.TERMS.value,
      kind: tabKinds.LINK,
      action: `${baseLink}/${summaryTabs.TERMS.value}`,
    });
  }

  const link = glossarySyntaxList
    ? `${baseLink}/${summaryTabs.SYNTAX.value}`
    : `${baseLink}/${summaryTabs.TERMS.value}`;

  return (
    <>
      <Header activeTab={activeTab} tabs={tabs}>
        <div className={styles.Summary_title}>
          <LessonImage
            className={styles.Summary_title_image}
            colorName={GLOBALS.COLOR_NAMES.BLUE}
            image={python}
          />
          <div>
            <Text
              colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
              type={textTypes.BODY.MD}
            >
              Lesson Summary
            </Text>
            <Text type={textTypes.HEADING.MD}>{lesson.title}</Text>
          </div>
        </div>
      </Header>

      <Container className={styles.Summary_container}>
        <Switch>
          <Route
            name="Summary - Syntax"
            path={`${baseRoute}/${summaryTabs.SYNTAX.value}`}
            render={() => glossarySyntaxList}
          />
          <Route
            name="Summary - Terms"
            path={`${baseRoute}/${summaryTabs.TERMS.value}`}
            render={() => glossaryTermsList}
          />
          <Redirect to={link} />
        </Switch>
      </Container>
    </>
  );
};

SummaryContainer.propTypes = {
  lesson: PropTypes.object.isRequired,
  baseRoute: PropTypes.string.isRequired,
  baseLink: PropTypes.string.isRequired,

  activeTab: PropTypes.oneOf([
    summaryTabs.SYNTAX.value,
    summaryTabs.TERMS.value,
  ]).isRequired,

  // a JSX component containing the glossary syntax list
  glossarySyntaxList: PropTypes.node.isRequired,

  // a JSX component containing the glossary terms list
  glossaryTermsList: PropTypes.node.isRequired,
};

export default SummaryContainer;
