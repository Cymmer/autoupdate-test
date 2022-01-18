import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from 'codechum-app-utils';
import LessonCard from './index';
import lessonTypes from '../constants/lessonTypes';

const LESSON = {
  title: 'How to Print',
  short_description: 'How to Print',
  items_count: 5,
  lesson_image: null,
  students_progress: {
    finished_count: 2,
    total_students: 4,
  },
  is_finished: true,
};

describe('RENDERING - SectionCourseTimelineV4 > LessonCard', () => {
  it('should render with default props', () => {
    const component = shallow(
      <LessonCard actions={[]} lesson={LESSON} type={lessonTypes.UNLOCKED} />
    );
    expect(component).toMatchSnapshot();
  });
});

describe('EVENTS - SectionCourseTimelineV4 > LessonCard', () => {
  it('should have a finished tag if the lesson is finished', () => {
    const component = shallow(
      <LessonCard actions={[]} lesson={LESSON} type={lessonTypes.UNLOCKED} />
    );

    const finishedTag = findByTestAttr(component, 'finishedTag');

    expect(finishedTag.exists()).toBeTruthy();
  });
});
