import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import { Modal, Text, ButtonGroup, Cody } from '../../elements';
import {
  modalSizes,
  modalPositions,
  textTypes,
  buttonTypes,
  buttonGroupDirections,
} from '../../elements/constants';

const determineColorClass = (codyType) => {
  switch (codyType) {
    case GLOBALS.CODY_TYPES.FAIL:
    case GLOBALS.CODY_TYPES.ERROR:
      return GLOBALS.COLOR_CLASSES.RED['300'];
    case GLOBALS.CODY_TYPES.PERFECT:
    case GLOBALS.CODY_TYPES.CORRECT:
      return GLOBALS.COLOR_CLASSES.GREEN['300'];
    case GLOBALS.CODY_TYPES.OK:
    case GLOBALS.CODY_TYPES.THINKING:
      return GLOBALS.COLOR_CLASSES.BLUE['300'];
    default:
      return GLOBALS.COLOR_CLASSES.NEUTRAL['400'];
  }
};

const CodyModal = ({
  isOpen,
  handleClose,
  actions,
  title,
  body,
  codyType,
  isReversed,
  parentSelector,
}) => (
  <Modal
    className={cn({
      [styles.CodyModal]: !isReversed,
      [styles.CodyModal___reversed]: isReversed,
    })}
    handleClose={handleClose}
    hasCloseButton={false}
    isOpen={isOpen}
    parentSelector={parentSelector}
    position={modalPositions.CENTER}
    size={modalSizes.SM}
  >
    <div
      className={cn({
        [styles.CodyModal_cody]: !isReversed,
        [styles.CodyModal_cody___reversed]: isReversed,
      })}
    >
      <Cody className={styles.CodyModal_cody_image} type={codyType} />
    </div>
    <div className={styles.CodyModal_content}>
      <div className={styles.CodyModal_text}>
        <Text
          className={styles.CodyModal_text_title}
          colorClass={determineColorClass(codyType)}
          type={textTypes.HEADING.XS}
        >
          {title}
        </Text>
        <Text
          className={styles.CodyModal_text_info}
          colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
          type={textTypes.BODY.SM}
        >
          {body}
        </Text>
      </div>
      {actions && (
        <ButtonGroup
          buttons={actions}
          direction={buttonGroupDirections.VERTICAL}
        />
      )}
    </div>
  </Modal>
);

CodyModal.defaultProps = {
  isReversed: false,
  actions: null,
  parentSelector: null,
};

CodyModal.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  codyType: PropTypes.oneOf(Object.values(GLOBALS.CODY_TYPES)),
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
        .isRequired,
      type: PropTypes.oneOf([
        buttonTypes.PRIMARY.BLUE,
        buttonTypes.PRIMARY.RED,
        buttonTypes.PRIMARY.GREEN,
        buttonTypes.SECONDARY.BLUE,
        buttonTypes.SECONDARY.GREEN,
        buttonTypes.SECONDARY.RED,
        buttonTypes.TEXT.BLUE,
        buttonTypes.TEXT.RED,
        buttonTypes.TEXT.GREEN,
        buttonTypes.TERTIARY,
      ]),
      disabled: PropTypes.bool,
      onClick: PropTypes.func.isRequired,
    })
  ),
  isReversed: PropTypes.bool,
  parentSelector: PropTypes.string,
};

export default CodyModal;
