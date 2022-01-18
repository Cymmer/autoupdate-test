import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

import Tabs from '../Tabs';
import Breadcrumbs from '../Breadcrumbs';
import Container from '../Container';
import tabKinds from '../Tabs/constants/tabKinds';
import tabTypes from '../Tabs/constants/tabTypes';

const Header = ({ id, tabs, activeTab, breadcrumbs, children }) => (
  <div className={styles.Header}>
    <Container>
      {breadcrumbs && (
        <Breadcrumbs
          className={styles.Header_breadcrumbs}
          links={breadcrumbs}
        />
      )}
      <div
        className={cn({
          [styles.Header_children]: tabs !== null,
          [styles.Header_children___noTabs]: tabs === null,
        })}
      >
        {children}
      </div>
      {tabs && (
        <Tabs
          activeTab={activeTab}
          className={styles.Header_tabs}
          data-test="tabs"
          id={id}
          tabs={tabs}
          type={tabTypes.HORIZONTAL.LG}
        />
      )}
    </Container>
  </div>
);

Header.defaultProps = {
  id: null,
  tabs: null,
  activeTab: null,
  breadcrumbs: null,
};

Header.propTypes = {
  id: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      isLocked: PropTypes.bool,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      kind: PropTypes.oneOf([tabKinds.BUTTON, tabKinds.LINK]),
      // if type is BUTTON -> func, else if type is LINK -> string
      action: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    })
  ),
  activeTab: PropTypes.string,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  children: PropTypes.any.isRequired,
};

export default Header;
