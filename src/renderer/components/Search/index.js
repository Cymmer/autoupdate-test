import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import GLOBALS from 'codechum-app-globals';
import { useDebouncedCallback } from 'use-debounce/lib';
import styles from './styles.module.scss';

import {
  ControlledInput,
  ControlledDropdown,
  Text,
  Button,
  IconButton,
  Checkbox,
  Tooltip,
} from '../elements';

import {
  inputTypes,
  dropdownTypes,
  textTypes,
  buttonTypes,
  iconButtonTypes,
} from '../elements/constants';

import searchTypes from './constants/searchTypes';

const Search = ({
  className,
  type,
  filters,
  setFilters,
  filterOptions,
  sortOptions,
  hasSearch,
  isExact,
  onExactChange,
}) => {
  const [areFiltersToggled, toggleFilters] = useState(
    filters[GLOBALS.FILTER_KEYS.FILTER_VALUES]?.length > 0
  );
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setSearchValue(filters[GLOBALS.FILTER_KEYS.SEARCH_STRING] || '');
  }, []);

  const [onSearch] = useDebouncedCallback((value) => {
    setFilters({
      ...filters,
      [GLOBALS.FILTER_KEYS.SEARCH_STRING]: value,
    });
  }, 500);

  return (
    <div className={cn(styles[`Search___${type}`], className)}>
      <div className={styles.Search_upper}>
        <div className={styles.Search_upper_left}>
          {sortOptions?.length > 0 && (
            <div className={styles.Search_group}>
              <Text
                className={styles.Search_label}
                colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
                type={textTypes.BODY.MD}
              >
                Sort by:
              </Text>
              <ControlledDropdown
                className={styles.Search_upper_dropdown}
                data-test="sortDropdown"
                name="sort"
                options={sortOptions}
                type={dropdownTypes.SLIM}
                value={filters[GLOBALS.FILTER_KEYS.SORT_VALUE]}
                onChange={(val) => {
                  setFilters({
                    ...filters,
                    [GLOBALS.FILTER_KEYS.SORT_VALUE]: val,
                  });
                }}
              />
            </div>
          )}

          {filterOptions?.length > 0 && (
            <Button
              className={styles.Search_button___large}
              data-test="openFiltersButton"
              icon="tune"
              id="filtersButton"
              type={buttonTypes.TEXT.BLUE}
              onClick={() => toggleFilters(!areFiltersToggled)}
            >
              Filters
            </Button>
          )}
        </div>
        <div className={styles.Search_upper_right}>
          {filterOptions?.length > 0 && (
            <IconButton
              className={styles.Search_button___small}
              data-test="closeFiltersButton"
              icon="tune"
              id="filtersButton"
              type={iconButtonTypes.OUTLINE.MD}
              onClick={() => toggleFilters(!areFiltersToggled)}
            >
              Filters
            </IconButton>
          )}
          {hasSearch && (
            <ControlledInput
              className={styles.Search_search}
              data-test="searchFilterInput"
              icon="search"
              name="search"
              placeholder="Search"
              type={inputTypes.SLIM}
              value={searchValue}
              onChange={(e) => {
                const { value } = e.target;
                setSearchValue(value);
                onSearch(value);
              }}
            />
          )}
        </div>
      </div>

      {areFiltersToggled && (
        <div className={styles.Search_lower}>
          <div className={styles.Search_group}>
            <Text
              className={styles.Search_label}
              colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
              type={textTypes.BODY.MD}
            >
              Filter by:
            </Text>
            <ControlledDropdown
              isMulti
              className={styles.Search_lower_dropdown}
              data-test="filtersDropdown"
              name="filters"
              options={filterOptions}
              placeholder="Select filters"
              type={dropdownTypes.SLIM}
              value={filters[GLOBALS.FILTER_KEYS.FILTER_VALUES]}
              onChange={(val) => {
                setFilters({
                  ...filters,
                  [GLOBALS.FILTER_KEYS.FILTER_VALUES]: val || [],
                });
              }}
            />
            {onExactChange != null && (
              <>
                <Tooltip
                  content="If checked, only the results that exactly match the filters will be shown."
                  placement="bottom"
                >
                  <Checkbox
                    checked={isExact === true}
                    className={styles.Search_lower_exact}
                    data-test="exactCheckbox"
                    label="Exact"
                    name="exact"
                    onChange={() => onExactChange(!isExact)}
                  />
                </Tooltip>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

Search.defaultProps = {
  className: null,
  type: searchTypes.CARD,
  filterOptions: null,
  filters: {},
  sortOptions: null,
  hasSearch: true,
  isExact: false,
  onExactChange: null,
};

Search.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf([searchTypes.BARE, searchTypes.CARD]),

  // The options to be shown in the filters.
  // The values of each of the items in this array
  // matches with the `options` props of our own
  // custom Dropdown component
  filterOptions: PropTypes.oneOfType([
    // Proptype for the non-grouped options
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        label: PropTypes.string.isRequired,

        // custom icon in each option (a custom component)
        icon: PropTypes.element,
      })
    ),

    // Proptype for the grouped options
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(
          PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
              .isRequired,
            label: PropTypes.string.isRequired,

            // custom icon in each option (a custom component)
            icon: PropTypes.element,
          })
        ),
      })
    ),
  ]),

  // an object with keys that match the keys
  // in the global `GLOBALS.FILTER_KEYS` which holds all
  // the current filter values
  filters: PropTypes.object,

  // updates the value of the filters
  setFilters: PropTypes.func.isRequired,

  // The options to be shown in the sort.
  // The values of each of the items in this array
  // matches with the `options` props of our own
  // custom Dropdown component
  sortOptions: PropTypes.oneOfType([
    // Proptype for the non-grouped options
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        label: PropTypes.string.isRequired,

        // custom icon in each option (a custom component)
        icon: PropTypes.element,
      })
    ),

    // Proptype for the grouped options
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(
          PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
              .isRequired,
            label: PropTypes.string.isRequired,

            // custom icon in each option (a custom component)
            icon: PropTypes.element,
          })
        ),
      })
    ),
  ]),

  // if true, there is a search filter
  hasSearch: PropTypes.bool,

  // these 2 props are for exact filtering
  isExact: PropTypes.bool,
  onExactChange: PropTypes.func,
};

export default Search;
