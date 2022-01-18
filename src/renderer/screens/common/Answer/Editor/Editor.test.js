import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from 'codechum-app-utils';
import { wrapWithStoreAndRouter } from 'utils/testing';
import { actions as usersActions } from 'ducks/reducers/users';

import { USER, TASK, ANSWER } from '../tests/constants';

import Editor from './index';

const PROPS = {
  task: {
    id: 1,
    programming_languages: [
      ...TASK.programming_languages,
      {
        id: 7,
        name: 'Assembly',
        extension: 'cs',
        icon: 'https://www.pinclipart.com/picdir/middle/519-5198165_pepehands-png-clipart.png',
      },
    ],
  },
  answer: ANSWER,
  onSourceCodeChange: () => {},
  onLanguageChange: () => {},
  createSourceCode: () => {},
  deleteSourceCode: () => {},
  languagesRef: null,
  languagesActiveOnboarding: null,
  className: null,
  isInteractive: true,
};

describe('EVENTS - Editor', () => {
  it('should not pass assembly in programming languages dropdown if interactive', () => {
    const component = mount(
      wrapWithStoreAndRouter(<Editor {...PROPS} />, [
        () =>
          usersActions.loginActions.loginUpdate({
            user: USER,
          }),
      ])
    );

    const languagesDropdown = findByTestAttr(
      component,
      'languagesDropdown'
    ).first();
    expect(languagesDropdown.prop('options')).toEqual(
      TASK.programming_languages.map((language) => ({
        value: language.id,
        label: language.name,
      }))
    );

    component.unmount();
  });
});
