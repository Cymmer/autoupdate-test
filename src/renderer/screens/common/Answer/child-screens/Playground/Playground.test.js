import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import GLOBALS from 'codechum-app-globals';
import { findByTestAttr, waitForAsync } from 'codechum-app-utils';
import { wrapWithStoreAndRouter } from 'utils/testing';
import { BASE_URL as CODE_EXECUTIONS_BASE_URL } from 'services/CodeExecutionsService';
import { BASE_URL as MIXPANEL_TRACK_BASE_URL } from 'services/MixpanelTrackService';
import { BASE_URL as PROGRAMMING_LANGUAGES_BASE_URL } from 'services/ProgrammingLanguagesService';
import { actions as usersActions } from 'ducks/reducers/users';
import { actions as programmingLanguageActions } from 'ducks/reducers/programmingLanguages';
import config from 'services/config';

import Playground from './index';
import {
  USER,
  EXECUTION_OUTPUT,
  PROGRAMMING_LANGUAGES,
} from '../../tests/constants';
import { modals } from '../../constants';

const mockAxios = new MockAdapter(axios);

const setupMockAxios = () => {
  mockAxios
    .onGet(PROGRAMMING_LANGUAGES_BASE_URL)
    .reply(200, { results: PROGRAMMING_LANGUAGES });

  mockAxios
    .onPost(`${config.RUN_CODE_URL}${CODE_EXECUTIONS_BASE_URL}execute/`)
    .reply(200, EXECUTION_OUTPUT);

  mockAxios.onPost(MIXPANEL_TRACK_BASE_URL).reply(200);
};

describe('RENDERING - Playground', () => {
  beforeEach(() => {
    setupMockAxios();
  });

  it('should call programming languages service if programming languages prop is null', async () => {
    const getRequestSpy = jest.spyOn(axios, 'get');

    const component = mount(
      wrapWithStoreAndRouter(<Playground cachedResult={null} />, [
        () =>
          usersActions.loginActions.loginUpdate({
            user: USER,
          }),
        () =>
          programmingLanguageActions.listActions.listProgrammingLanguagesSuccess(
            { programmingLanguages: null }
          ),
      ])
    );

    await act(async () => {
      await waitForAsync();
    });

    component.update();

    await act(async () => {
      await waitForAsync();
    });

    component.update();

    expect(getRequestSpy).toHaveBeenCalledWith(PROGRAMMING_LANGUAGES_BASE_URL);

    component.unmount();
  });

  it('should be able to switch to non-interactive mode and vice versa', async () => {
    const component = mount(
      wrapWithStoreAndRouter(<Playground cachedResult={null} />, [
        () =>
          usersActions.loginActions.loginUpdate({
            user: USER,
          }),
        () =>
          programmingLanguageActions.listActions.listProgrammingLanguagesSuccess(
            { programmingLanguages: PROGRAMMING_LANGUAGES }
          ),
      ])
    );

    await act(async () => {
      await waitForAsync();
    });

    component.update();

    await act(async () => {
      await waitForAsync();
    });

    component.update();

    let inputOutput = findByTestAttr(component, 'inputOutput').first();
    expect(inputOutput.prop('isInteractive')).toEqual(true);

    await act(() => {
      inputOutput.prop('setIsInteractive')(false);
    });

    component.update();

    inputOutput = findByTestAttr(component, 'inputOutput').first();
    expect(inputOutput.prop('isInteractive')).toEqual(false);

    await act(() => {
      inputOutput.prop('setIsInteractive')(true);
    });

    component.update();

    inputOutput = findByTestAttr(component, 'inputOutput').first();
    expect(inputOutput.prop('isInteractive')).toEqual(true);

    component.unmount();
  });

  it('should open terminal modal on execute code if interactive mode', async () => {
    const component = mount(
      wrapWithStoreAndRouter(<Playground cachedResult={null} />, [
        () =>
          usersActions.loginActions.loginUpdate({
            user: USER,
          }),
        () =>
          programmingLanguageActions.listActions.listProgrammingLanguagesSuccess(
            { programmingLanguages: PROGRAMMING_LANGUAGES }
          ),
      ])
    );

    await act(async () => {
      await waitForAsync();
    });

    component.update();

    await act(async () => {
      await waitForAsync();
    });

    component.update();

    let inputOutput = findByTestAttr(component, 'inputOutput').first();
    expect(inputOutput.prop('isInteractive')).toEqual(true);

    let answerTask = findByTestAttr(component, 'answerTask').first();

    await act(() => {
      answerTask.prop('methods').onSourceCodeChange(1, 'code');
    });

    component.update();

    inputOutput = findByTestAttr(component, 'inputOutput').first();

    await act(() => {
      inputOutput.prop('executeCode')(GLOBALS.EXECUTION_MODES.RUN);
    });

    component.update();

    answerTask = findByTestAttr(component, 'answerTask').first();
    expect(answerTask.prop('state').modalToggled).toEqual(modals.TERMINAL);

    component.unmount();
  });
});
