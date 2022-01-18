import React from 'react';
import PropTypes from 'prop-types';

import GLOBALS from 'codechum-app-globals';
import PythonLesson1Summary from '../python/jsx/lesson-1-how-to-print/summary';
import PythonLesson2Summary from '../python/jsx/lesson-2-variables/summary';
import PythonLesson3Summary from '../python/jsx/lesson-3-strings/summary';
import PythonLesson4Summary from '../python/jsx/lesson-4-arithmetic/summary';
import PythonLesson5Summary from '../python/jsx/lesson-5-asking-for-input/summary';
import PythonLesson6Summary from '../python/jsx/lesson-6-conditions/summary';
import PythonLesson7Summary from '../python/jsx/lesson-7-loops/summary';
import PythonLesson8Summary from '../python/jsx/lesson-8-lists/summary';

import CLesson1Summary from '../c/jsx/lesson-1-basic-c-structure/summary';
import CLesson2Summary from '../c/jsx/lesson-2-how-to-print/summary';
import CLesson3Summary from '../c/jsx/lesson-3-variables/summary';
import CLesson4Summary from '../c/jsx/lesson-4-arithmetic/summary';
import CLesson5Summary from '../c/jsx/lesson-5-asking-for-input/summary';
import CLesson6Summary from '../c/jsx/lesson-6-conditions/summary';
import CLesson7Summary from '../c/jsx/lesson-7-loops/summary';
import CLesson8Summary from '../c/jsx/lesson-8-arrays/summary';

import C2Lesson1Summary from '../c-ii/jsx/lesson-1-on-basic-functions/summary';
import C2Lesson2Summary from '../c-ii/jsx/lesson-2-arrays/summary';
import C2Lesson3Summary from '../c-ii/jsx/lesson-3-n-dimensional-arrays/summary';
import C2Lesson4Summary from '../c-ii/jsx/lesson-4-pointers/summary';
import C2Lesson5Summary from '../c-ii/jsx/lesson-5-recursions/summary';
import C2Lesson6Summary from '../c-ii/jsx/lesson-6-structure-and-enumerations/summary';

import CPPLesson1Summary from '../cpp/jsx/lesson-1-basic-cpp-structure/summary';
import CPPLesson2Summary from '../cpp/jsx/lesson-2-how-to-print/summary';
import CPPLesson3Summary from '../cpp/jsx/lesson-3-variables/summary';
import CPPLesson4Summary from '../cpp/jsx/lesson-4-arithmetic/summary';
import CPPLesson5Summary from '../cpp/jsx/lesson-5-asking-for-input/summary';
import CPPLesson6Summary from '../cpp/jsx/lesson-6-conditions/summary';
import CPPLesson7Summary from '../cpp/jsx/lesson-7-loops/summary';
import CPPLesson8Summary from '../cpp/jsx/lesson-8-arrays/summary';

import summaryTabs from './Container/constants/summaryTabs';
import { NoResults } from '../../../../../components/elements';

const Summary = ({
  lesson,
  baseLink,
  courseTimelineLink,
  course,
  baseRoute,
  activeTab,
}) => {
  const courseCode = course.parent_course?.code || course.code;

  if (courseCode === 'Python') {
    if (lesson.slug === 'how-to-print') {
      return (
        <PythonLesson1Summary
          activeTab={activeTab}
          baseLink={baseLink}
          baseRoute={baseRoute}
          lesson={lesson}
        />
      );
    }
    if (lesson.slug === 'variables') {
      return (
        <PythonLesson2Summary
          activeTab={activeTab}
          baseLink={baseLink}
          baseRoute={baseRoute}
          lesson={lesson}
        />
      );
    }
    if (lesson.slug === 'strings') {
      return (
        <PythonLesson3Summary
          activeTab={activeTab}
          baseLink={baseLink}
          baseRoute={baseRoute}
          lesson={lesson}
        />
      );
    }
    if (lesson.slug === 'arithmetic') {
      return (
        <PythonLesson4Summary
          activeTab={activeTab}
          baseLink={baseLink}
          baseRoute={baseRoute}
          lesson={lesson}
        />
      );
    }
    if (lesson.slug === 'asking-for-input') {
      return (
        <PythonLesson5Summary
          activeTab={activeTab}
          baseLink={baseLink}
          baseRoute={baseRoute}
          lesson={lesson}
        />
      );
    }
    if (lesson.slug === 'conditions') {
      return (
        <PythonLesson6Summary
          activeTab={activeTab}
          baseLink={baseLink}
          baseRoute={baseRoute}
          lesson={lesson}
        />
      );
    }
    if (lesson.slug === 'loops') {
      return (
        <PythonLesson7Summary
          activeTab={activeTab}
          baseLink={baseLink}
          baseRoute={baseRoute}
          lesson={lesson}
        />
      );
    }
    if (lesson.slug === 'lists') {
      return (
        <PythonLesson8Summary
          activeTab={activeTab}
          baseLink={baseLink}
          baseRoute={baseRoute}
          lesson={lesson}
        />
      );
    }
  } else if (courseCode === 'C 1') {
    if (lesson.slug === 'basic-c-structure') {
      return (
        <CLesson1Summary
          activeTab={activeTab}
          baseLink={baseLink}
          baseRoute={baseRoute}
          lesson={lesson}
        />
      );
    }
    if (lesson.slug === 'how-to-print') {
      return (
        <CLesson2Summary
          activeTab={activeTab}
          baseLink={baseLink}
          baseRoute={baseRoute}
          lesson={lesson}
        />
      );
    }
    if (lesson.slug === 'variables') {
      return (
        <CLesson3Summary
          activeTab={activeTab}
          baseLink={baseLink}
          baseRoute={baseRoute}
          lesson={lesson}
        />
      );
    }
    if (lesson.slug === 'arithmetic') {
      return (
        <CLesson4Summary
          activeTab={activeTab}
          baseLink={baseLink}
          baseRoute={baseRoute}
          lesson={lesson}
        />
      );
    }
    if (lesson.slug === 'asking-for-input') {
      return (
        <CLesson5Summary
          activeTab={activeTab}
          baseLink={baseLink}
          baseRoute={baseRoute}
          lesson={lesson}
        />
      );
    }
    if (lesson.slug === 'conditions') {
      return (
        <CLesson6Summary
          activeTab={activeTab}
          baseLink={baseLink}
          baseRoute={baseRoute}
          lesson={lesson}
        />
      );
    }
    if (lesson.slug === 'loops') {
      return (
        <CLesson7Summary
          activeTab={activeTab}
          baseLink={baseLink}
          baseRoute={baseRoute}
          lesson={lesson}
        />
      );
    }
    if (lesson.slug === 'arrays') {
      return (
        <CLesson8Summary
          activeTab={activeTab}
          baseLink={baseLink}
          baseRoute={baseRoute}
          lesson={lesson}
        />
      );
    }
  } else if (courseCode === 'C 2') {
    if (lesson.slug === 'on-basic-functions') {
      return (
        <C2Lesson1Summary
          activeTab={activeTab}
          baseLink={baseLink}
          baseRoute={baseRoute}
          lesson={lesson}
        />
      );
    }
    if (lesson.slug === 'arrays') {
      return (
        <C2Lesson2Summary
          activeTab={activeTab}
          baseLink={baseLink}
          baseRoute={baseRoute}
          lesson={lesson}
        />
      );
    }
    if (lesson.slug === 'n-dimensional-arrays') {
      return (
        <C2Lesson3Summary
          activeTab={activeTab}
          baseLink={baseLink}
          baseRoute={baseRoute}
          lesson={lesson}
        />
      );
    }
    if (lesson.slug === 'pointers') {
      return (
        <C2Lesson4Summary
          activeTab={activeTab}
          baseLink={baseLink}
          baseRoute={baseRoute}
          lesson={lesson}
        />
      );
    }
    if (lesson.slug === 'recursions') {
      return (
        <C2Lesson5Summary
          activeTab={activeTab}
          baseLink={baseLink}
          baseRoute={baseRoute}
          lesson={lesson}
        />
      );
    }
    if (lesson.slug === 'structure-and-enumerations') {
      return (
        <C2Lesson6Summary
          activeTab={activeTab}
          baseLink={baseLink}
          baseRoute={baseRoute}
          lesson={lesson}
        />
      );
    }
  } else if (courseCode === 'Java') {
    return (
      <NoResults
        action={{
          action: courseTimelineLink,
          text: 'Back to Course Timeline',
        }}
        codyType={GLOBALS.CODY_TYPES.PERFECT}
        text="You've successfully completed the lesson!"
      />
    );
  } else if (courseCode === 'CPP') {
    if (lesson.slug === 'basic-cpp-structure') {
      return (
        <CPPLesson1Summary
          activeTab={activeTab}
          baseLink={baseLink}
          baseRoute={baseRoute}
          lesson={lesson}
        />
      );
    }
    if (lesson.slug === 'how-to-print') {
      return (
        <CPPLesson2Summary
          activeTab={activeTab}
          baseLink={baseLink}
          baseRoute={baseRoute}
          lesson={lesson}
        />
      );
    }
    if (lesson.slug === 'variables') {
      return (
        <CPPLesson3Summary
          activeTab={activeTab}
          baseLink={baseLink}
          baseRoute={baseRoute}
          lesson={lesson}
        />
      );
    }
    if (lesson.slug === 'arithmetic') {
      return (
        <CPPLesson4Summary
          activeTab={activeTab}
          baseLink={baseLink}
          baseRoute={baseRoute}
          lesson={lesson}
        />
      );
    }
    if (lesson.slug === 'asking-for-input') {
      return (
        <CPPLesson5Summary
          activeTab={activeTab}
          baseLink={baseLink}
          baseRoute={baseRoute}
          lesson={lesson}
        />
      );
    }
    if (lesson.slug === 'conditions') {
      return (
        <CPPLesson6Summary
          activeTab={activeTab}
          baseLink={baseLink}
          baseRoute={baseRoute}
          lesson={lesson}
        />
      );
    }
    if (lesson.slug === 'loops') {
      return (
        <CPPLesson7Summary
          activeTab={activeTab}
          baseLink={baseLink}
          baseRoute={baseRoute}
          lesson={lesson}
        />
      );
    }
    if (lesson.slug === 'arrays') {
      return (
        <CPPLesson8Summary
          activeTab={activeTab}
          baseLink={baseLink}
          baseRoute={baseRoute}
          lesson={lesson}
        />
      );
    }
  }
};

Summary.propTypes = {
  lesson: PropTypes.object.isRequired,
  baseRoute: PropTypes.string.isRequired,
  course: PropTypes.object.isRequired,
  baseLink: PropTypes.string.isRequired,
  courseTimelineLink: PropTypes.string.isRequired,
  activeTab: PropTypes.oneOf([
    summaryTabs.SYNTAX.value,
    summaryTabs.TERMS.value,
  ]).isRequired,
};

export default Summary;
