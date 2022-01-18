import React from 'react';
import { mount, shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { findByTestAttr } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { wrapWithStoreAndRouter } from 'utils';
import Search from './index';
import { configureStore } from '../../configureStore';

jest.useFakeTimers();

describe('RENDERING - Search', () => {
  it('should render with default props', () => {
    const component = shallow(<Search setFilters={() => {}} />);
    expect(component).toMatchSnapshot();
  });

  it('should render the sort options if there is/are sort option/s', () => {
    // test first with an empty array for sortOptions (this should not render
    // the sort options dropdown)
    let component = shallow(<Search setFilters={() => {}} sortOptions={[]} />);
    expect(component).toMatchSnapshot();

    // then test with a non-empty array for sortOptions
    component = shallow(
      <Search
        setFilters={() => {}}
        sortOptions={[
          {
            value: 1,
            label: 'Dummy Label',
          },
        ]}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the filter options if there is/are filter option/s', () => {
    // test first with an empty array for filterOptions (this should not render
    // the filter options dropdown)
    let component = shallow(
      <Search filterOptions={[]} setFilters={() => {}} />
    );
    expect(component).toMatchSnapshot();

    // then test with a non-empty array for filterOptions
    component = shallow(
      <Search
        filterOptions={[
          {
            value: 1,
            label: 'Dummy Label',
          },
        ]}
        setFilters={() => {}}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the search filter if it has a search filter', () => {
    const component = shallow(<Search hasSearch setFilters={() => {}} />);
    expect(component).toMatchSnapshot();
  });

  it('should toggle the filters properly', () => {
    const store = configureStore();
    const component = mount(
      <Provider store={store}>
        <Search
          filterOptions={[
            {
              value: 1,
              label: 'Dummy Label',
            },
          ]}
          setFilters={() => {}}
        />
      </Provider>
    );
    expect(findByTestAttr(component, 'filtersDropdown').exists()).toEqual(
      false
    );

    const openFiltersButton = findByTestAttr(component, 'openFiltersButton');
    const closeFiltersButton = findByTestAttr(component, 'closeFiltersButton');

    // open the filters
    act(() => {
      openFiltersButton.simulate('click');
    });
    component.update();
    expect(findByTestAttr(component, 'filtersDropdown').exists()).toEqual(true);

    // close the filters
    act(() => {
      closeFiltersButton.simulate('click');
    });
    component.update();
    expect(findByTestAttr(component, 'filtersDropdown').exists()).toEqual(
      false
    );
  });

  it('should not show the exact checkbox if the filters are opened and there is no exact change handler', () => {
    const store = configureStore();
    const component = mount(
      <Provider store={store}>
        <Search
          filterOptions={[
            {
              value: 1,
              label: 'Dummy Label',
            },
          ]}
          setFilters={() => {}}
        />
      </Provider>
    );
    expect(findByTestAttr(component, 'exactCheckbox').exists()).toEqual(false);

    const openFiltersButton = findByTestAttr(component, 'openFiltersButton');
    const closeFiltersButton = findByTestAttr(component, 'closeFiltersButton');

    // open the filters
    act(() => {
      openFiltersButton.simulate('click');
    });
    component.update();
    expect(findByTestAttr(component, 'exactCheckbox').exists()).toEqual(false);

    // close the filters
    act(() => {
      closeFiltersButton.simulate('click');
    });
    component.update();
    expect(findByTestAttr(component, 'exactCheckbox').exists()).toEqual(false);
  });

  it('should show the exact checkbox if the filters are opened and there is an exact change handler', () => {
    const store = configureStore();
    const component = mount(
      <Provider store={store}>
        <Search
          filterOptions={[
            {
              value: 1,
              label: 'Dummy Label',
            },
          ]}
          setFilters={() => {}}
          onExactChange={() => {}}
        />
      </Provider>
    );
    expect(findByTestAttr(component, 'exactCheckbox').exists()).toEqual(false);

    const openFiltersButton = findByTestAttr(component, 'openFiltersButton');
    const closeFiltersButton = findByTestAttr(component, 'closeFiltersButton');

    // open the filters
    act(() => {
      openFiltersButton.simulate('click');
    });
    component.update();
    expect(findByTestAttr(component, 'exactCheckbox').exists()).toEqual(true);

    // close the filters
    act(() => {
      closeFiltersButton.simulate('click');
    });
    component.update();
    expect(findByTestAttr(component, 'exactCheckbox').exists()).toEqual(false);
  });
});

describe('EVENTS - Search', () => {
  it('should be able to change the sorting', () => {
    const existingFilters = {
      [GLOBALS.FILTER_KEYS.SEARCH_STRING]: 'Dummy Search String',
    };

    const setFiltersFn = jest.fn();
    const store = configureStore();
    const component = mount(
      <Provider store={store}>
        <Search
          filters={existingFilters}
          setFilters={setFiltersFn}
          sortOptions={[
            {
              value: 1,
              label: 'Dummy Label',
            },
          ]}
        />
      </Provider>
    );

    const newValue = {
      value: 2,
      label: 'New Dummy Label',
    };

    findByTestAttr(component, 'sortDropdown').first().prop('onChange')(
      newValue
    );

    expect(setFiltersFn).toHaveBeenCalledWith({
      ...existingFilters,
      [GLOBALS.FILTER_KEYS.SORT_VALUE]: newValue,
    });
  });

  it('should be able to change the search string', async () => {
    const existingFilters = {
      [GLOBALS.FILTER_KEYS.SORT_VALUE]: {
        value: 1,
        label: 'Dummy Label',
      },
    };

    const setFiltersFn = jest.fn();
    const component = mount(
      wrapWithStoreAndRouter(
        <Search
          hasSearch
          filters={existingFilters}
          setFilters={setFiltersFn}
          sortOptions={[
            {
              value: 1,
              label: 'Dummy Label',
            },
          ]}
        />
      )
    );

    const newSearchString = 'Dummy Search String';

    await act(async () => {
      await findByTestAttr(component, 'searchFilterInput').prop('onChange')({
        target: {
          value: newSearchString,
        },
      });

      // advance the timer by 500 to immediately finish the 500ms waiting
      // time for the debounce function of the service call
      jest.advanceTimersByTime(500);
    });

    expect(setFiltersFn).toHaveBeenCalledWith({
      ...existingFilters,
      [GLOBALS.FILTER_KEYS.SEARCH_STRING]: newSearchString,
    });
  });

  it('should be able to change the filters', () => {
    const existingFilters = {
      [GLOBALS.FILTER_KEYS.SORT_VALUE]: {
        value: 1,
        label: 'Dummy Label',
      },
    };

    const setFiltersFn = jest.fn();
    const store = configureStore();
    const component = mount(
      <Provider store={store}>
        <Search
          hasSearch
          filterOptions={[
            {
              value: 1,
              label: 'Dummy Label',
            },
          ]}
          filters={existingFilters}
          setFilters={setFiltersFn}
          sortOptions={[
            {
              value: 1,
              label: 'Dummy Label',
            },
          ]}
        />
      </Provider>
    );

    // open the filters
    act(() => {
      findByTestAttr(component, 'openFiltersButton').simulate('click');
    });
    component.update();

    const newFilterValue = {
      value: 1,
      label: 'Dummy Label',
    };

    findByTestAttr(component, 'filtersDropdown').first().prop('onChange')(
      newFilterValue
    );

    expect(setFiltersFn).toHaveBeenCalledWith({
      ...existingFilters,
      [GLOBALS.FILTER_KEYS.FILTER_VALUES]: newFilterValue,
    });
  });

  it('should be able to change the exact checkbox', () => {
    const existingFilters = {
      [GLOBALS.FILTER_KEYS.SORT_VALUE]: {
        value: 1,
        label: 'Dummy Label',
      },
    };

    const setFiltersFn = jest.fn();
    const exactChangeFn = jest.fn();
    const store = configureStore();
    const component = mount(
      <Provider store={store}>
        <Search
          hasSearch
          filterOptions={[
            {
              value: 1,
              label: 'Dummy Label',
            },
          ]}
          filters={existingFilters}
          isExact={false}
          setFilters={setFiltersFn}
          sortOptions={[
            {
              value: 1,
              label: 'Dummy Label',
            },
          ]}
          onExactChange={exactChangeFn}
        />
      </Provider>
    );

    // open the filters
    act(() => {
      findByTestAttr(component, 'openFiltersButton').simulate('click');
    });
    component.update();

    findByTestAttr(component, 'exactCheckbox').prop('onChange')();
    expect(exactChangeFn).toHaveBeenCalledWith(true);
  });
});
