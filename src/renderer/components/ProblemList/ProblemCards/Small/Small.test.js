import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from 'codechum-app-utils';
import Small from './index';

const DEFAULT_PROBLEM = {
  name: 'Dummy Problem',
  tags: [
    {
      id: 1,
      name: 'DummyTag1',
    },
    {
      id: 2,
      name: 'DummyTag2',
    },
  ],
};

describe('RENDERING - ProblemList > ProblemCards > Small', () => {
  it('should render with default props', () => {
    const component = shallow(<Small problem={DEFAULT_PROBLEM} score={10} />);
    expect(component).toMatchSnapshot();
  });

  it('should render the used in badge if the problem has already been used in other activities', () => {
    const component = shallow(
      <Small
        problem={DEFAULT_PROBLEM}
        score={10}
        usedIn={[
          // since the shape of the used in objects are not necessary in the
          // context of this card, we just add empty objects
          {
            problem_id: 1,
            section: {},
            task: {},
          },
        ]}
      />
    );
    expect(component).toMatchSnapshot();
  });
});

describe('EVENTS - ProblemList > ProblemCards > Small', () => {
  it('should be able to click the problem if there is an onclick handler and is not disabled', () => {
    const clickFn = jest.fn();
    const component = shallow(
      <Small
        disabled={false}
        problem={DEFAULT_PROBLEM}
        score={10}
        onClick={clickFn}
      />
    );

    findByTestAttr(component, 'problemCardSmallContainer').simulate('click');

    expect(clickFn).toHaveBeenCalled();
  });

  it('should be able to view the problem if there is an view problem handler handler and is not disabled', () => {
    const clickFn = jest.fn();
    const component = shallow(
      <Small
        disabled={false}
        problem={DEFAULT_PROBLEM}
        score={10}
        viewProblem={clickFn}
      />
    );

    findByTestAttr(component, 'problemCardSmallContainer').simulate('click');

    expect(clickFn).toHaveBeenCalled();
  });

  it('should not be able to view or click the problem if disabled', () => {
    const viewFn = jest.fn();
    const clickFn = jest.fn();
    const component = shallow(
      <Small
        disabled
        problem={DEFAULT_PROBLEM}
        score={10}
        viewProblem={viewFn}
        onClick={clickFn}
      />
    );

    findByTestAttr(component, 'problemCardSmallContainer').simulate('click');

    expect(viewFn).not.toHaveBeenCalled();
    expect(clickFn).not.toHaveBeenCalled();
  });
});
