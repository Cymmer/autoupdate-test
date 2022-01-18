import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

import IconButton from '../Button/IconButton';
import iconButtonTypes from '../Button/constants/iconButtonTypes';
import Numbers from './Numbers';

const SKIP_NAVIGATE_STEP = 5;

const Pagination = ({
  currentPage,
  totalPages,
  pageJump,
  hasNewUnloadedData,
}) =>
  totalPages > 1 && (
    <div className={styles.Pagination}>
      <IconButton
        className={styles.Pagination_iconButton}
        disabled={currentPage === 1}
        icon="first_page"
        type={iconButtonTypes.OUTLINE.SM}
        onClick={() => {
          pageJump(
            currentPage - SKIP_NAVIGATE_STEP >= 1
              ? currentPage - SKIP_NAVIGATE_STEP
              : 1
          );
        }}
      />

      <IconButton
        className={styles.Pagination_iconButton}
        disabled={currentPage === 1}
        icon="chevron_left"
        id="chevronLeftButton"
        type={iconButtonTypes.OUTLINE.SM}
        onClick={() => {
          pageJump(currentPage - 1 === 0 ? 1 : currentPage - 1);
        }}
      />

      <Numbers
        currentPage={currentPage}
        hasNewUnloadedData={hasNewUnloadedData}
        pageJump={pageJump}
        totalPages={totalPages}
      />

      <IconButton
        className={styles.Pagination_iconButton}
        disabled={currentPage === totalPages}
        icon="chevron_right"
        id="chevronRightButton"
        type={iconButtonTypes.OUTLINE.SM}
        onClick={() => {
          pageJump(currentPage + 1 > totalPages ? totalPages : currentPage + 1);
        }}
      />

      <IconButton
        className={styles.Pagination_iconButton}
        disabled={currentPage === totalPages}
        icon="last_page"
        id="lastPageButton"
        type={iconButtonTypes.OUTLINE.SM}
        onClick={() => {
          pageJump(
            currentPage + SKIP_NAVIGATE_STEP <= totalPages
              ? currentPage + SKIP_NAVIGATE_STEP
              : totalPages
          );
        }}
      />
    </div>
  );

Pagination.defaultProps = {
  hasNewUnloadedData: false,
};

Pagination.propTypes = {
  // the current page number being accessed (1 - based)
  currentPage: PropTypes.number.isRequired,

  // the total number of pages
  totalPages: PropTypes.number.isRequired,

  // function that updates the current page number
  pageJump: PropTypes.func.isRequired,

  // true if there is new unloaded data in page 1
  hasNewUnloadedData: PropTypes.bool,
};

export default Pagination;
