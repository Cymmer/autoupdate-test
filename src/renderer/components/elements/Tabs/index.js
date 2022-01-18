import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

import Shine from '../Shine';

import tabTypes from './constants/tabTypes';
import tabKinds from './constants/tabKinds';

import TabButton from './TabButton';
import TabLink from './TabLink';

const Tabs = ({
  type,
  activeTab,
  tabs,
  className,
  tabClassName,
  isLoading,
}) => (
  <div
    className={cn(className, styles[`Tabs___${type}`], {
      [styles.Tabs___loading]: isLoading,
    })}
  >
    {isLoading ? (
      <>
        <Shine className={styles.Tabs_shine} />
        <Shine className={styles.Tabs_shine} />
      </>
    ) : (
      tabs?.map(
        ({
          ref,
          name,
          value,
          kind,
          action,
          closeAction,
          id,
          hasNewData,
          isLocked,
        }) =>
          kind === tabKinds.BUTTON ? (
            <TabButton
              key={value}
              active={activeTab === value}
              className={cn(styles.Tabs_button, tabClassName)}
              closeAction={
                type === tabTypes.HORIZONTAL.SM && closeAction
                  ? closeAction
                  : null
              }
              hasNewData={hasNewData}
              id={id}
              innerRef={ref}
              type={type}
              onClick={action}
            >
              {name}
            </TabButton>
          ) : (
            <TabLink
              key={value}
              active={activeTab === value}
              className={cn(styles.Tabs_link, tabClassName)}
              closeAction={
                type === tabTypes.HORIZONTAL.SM && closeAction
                  ? closeAction
                  : null
              }
              hasNewData={hasNewData}
              id={id}
              isLocked={isLocked}
              to={action}
              type={type}
            >
              {name}
            </TabLink>
          )
      )
    )}
  </div>
);

Tabs.defaultProps = {
  className: null,
  tabClassName: null,
  isLoading: false,
  activeTab: null,
};

Tabs.propTypes = {
  className: PropTypes.string,
  tabClassName: PropTypes.string,
  isLoading: PropTypes.bool,
  type: PropTypes.oneOf([
    tabTypes.HORIZONTAL.LG,
    tabTypes.HORIZONTAL.SM,
    tabTypes.VERTICAL.LG,
    tabTypes.VERTICAL.SM,
  ]).isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      ref: PropTypes.object,
      name: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      kind: PropTypes.oneOf([tabKinds.BUTTON, tabKinds.LINK]).isRequired,
      // if type is BUTTON -> func, else if type is LINK -> string
      action: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
        .isRequired,
      isLocked: PropTypes.bool,
      closeAction: PropTypes.func,
      id: PropTypes.string,
    })
  ).isRequired,
  activeTab: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Tabs;
