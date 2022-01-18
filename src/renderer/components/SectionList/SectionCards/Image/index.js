import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';

import python from '../../../../static/images/Icons/python.png';
import c from '../../../../static/images/Icons/c.png';
import cpp from '../../../../static/images/Icons/cpp.png';
import csharp from '../../../../static/images/Icons/csharp.png';
import java from '../../../../static/images/Icons/java.png';
import js from '../../../../static/images/Icons/js.png';
import cody from '../../../../static/images/Icons/cody.png';
import structure from '../../../../static/images/Icons/structure.png';
import tag from '../../../../static/images/Icons/tag.png';

import sectionIcons from '../../constants/sectionIcons';
import sectionColors from '../../constants/sectionColors';
import sectionListTypes from '../../constants/sectionListTypes';

const generateStyleFromIcon = (icon) => {
  let img = cody;

  switch (icon?.value) {
    case sectionIcons.TAG.value:
      img = tag;
      break;
    case sectionIcons.STRUCTURE.value:
      img = structure;
      break;
    case sectionIcons.PYTHON.value:
      img = python;
      break;
    case sectionIcons.C.value:
      img = c;
      break;
    case sectionIcons.CPP.value:
      img = cpp;
      break;
    case sectionIcons.CSHARP.value:
      img = csharp;
      break;
    case sectionIcons.JAVA.value:
      img = java;
      break;
    case sectionIcons.JS.value:
      img = js;
      break;
    default:
      break;
  }

  return {
    backgroundImage: `url(${img})`,
  };
};

const SectionImage = ({ icon, className, size, color }) => (
  <div
    className={cn(
      styles.SectionImage,
      styles[`SectionImage___${color?.value}`],
      styles[`SectionImage___${size}`],
      className
    )}
    style={generateStyleFromIcon(icon)}
  />
);

SectionImage.defaultProps = {
  className: null,
  size: sectionListTypes.LARGE,
};

SectionImage.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(Object.values(sectionIcons)).isRequired,
  color: PropTypes.oneOf(Object.values(sectionColors)).isRequired,
  size: PropTypes.oneOf([sectionListTypes.LARGE, sectionListTypes.SMALL]),
};

export default SectionImage;
