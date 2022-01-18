import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { EnrollmentV4Service, SectionsV4Service } from 'services';
import GLOBALS from 'codechum-app-globals';

import PythonIntroductionSlide1 from '../python/jsx/introduction/slide1';
import PythonIntroductionSlide2 from '../python/jsx/introduction/slide2';
import PythonIntroductionSlide3 from '../python/jsx/introduction/slide3';
import PythonIntroductionSlide4 from '../python/jsx/introduction/slide4';
import PythonIntroductionSlide5 from '../python/jsx/introduction/slide5';
import PythonIntroductionSlide6 from '../python/jsx/introduction/slide6';

import PythonSummarySlide1 from '../python/jsx/summary/slide1';
import PythonSummarySlide2 from '../python/jsx/summary/slide2';

import CIntroductionSlide1 from '../c/jsx/introduction/slide1';
import CIntroductionSlide2 from '../c/jsx/introduction/slide2';
import CIntroductionSlide3 from '../c/jsx/introduction/slide3';
import CIntroductionSlide4 from '../c/jsx/introduction/slide4';
import CIntroductionSlide5 from '../c/jsx/introduction/slide5';
import CIntroductionSlide6 from '../c/jsx/introduction/slide6';

import CSummarySlide1 from '../c/jsx/summary/slide1';
import CSummarySlide2 from '../c/jsx/summary/slide2';

import JavaIntroductionSlide1 from '../java/jsx/introduction/slide1';
import JavaIntroductionSlide2 from '../java/jsx/introduction/slide2';
import JavaIntroductionSlide3 from '../java/jsx/introduction/slide3';
import JavaIntroductionSlide4 from '../java/jsx/introduction/slide4';
import JavaIntroductionSlide5 from '../java/jsx/introduction/slide5';

import C2IntroductionSlide1 from '../c-ii/jsx/introduction/slide1';
import C2IntroductionSlide2 from '../c-ii/jsx/introduction/slide2';
import C2IntroductionSlide3 from '../c-ii/jsx/introduction/slide3';
import C2IntroductionSlide4 from '../c-ii/jsx/introduction/slide4';
import C2IntroductionSlide5 from '../c-ii/jsx/introduction/slide5';

import C2SummarySlide1 from '../c-ii/jsx/summary/slide1';
import C2SummarySlide2 from '../c-ii/jsx/summary/slide2';

import CPPIntroductionSlide1 from '../cpp/jsx/introduction/slide1';
import CPPIntroductionSlide2 from '../cpp/jsx/introduction/slide2';
import CPPIntroductionSlide3 from '../cpp/jsx/introduction/slide3';
import CPPIntroductionSlide4 from '../cpp/jsx/introduction/slide4';
import CPPIntroductionSlide5 from '../cpp/jsx/introduction/slide5';
import CPPIntroductionSlide6 from '../cpp/jsx/introduction/slide6';

import CPPSummarySlide1 from '../cpp/jsx/summary/slide1';
import CPPSummarySlide2 from '../cpp/jsx/summary/slide2';

const CoverSlides = ({
  lesson,
  lessonObject,
  course,
  nextAction,
  studentId,
  sectionId,
}) => {
  const courseCode = course.parent_course?.code || course.code;
  const { is_summary: isSummary, is_introduction: isIntroduction } = lesson;
  const { slug } = lessonObject;

  useEffect(() => {
    if (isSummary) {
      SectionsV4Service.retrieve({
        sectionId,
      }).then(({ data: retrievedSection }) => {
        if (retrievedSection.provide_certificate_method !== null) {
          const {
            provide_certificate_method: { method_type: methodType },
          } = retrievedSection;

          if (methodType === GLOBALS.CERTIFICATION_METHODS.AUTOMATIC_1.name) {
            EnrollmentV4Service.createCertificate({ sectionId, studentId });
          }
        }
      });
    }
  }, []);

  if (courseCode === 'Python') {
    if (isIntroduction) {
      if (slug === 'slide-1') {
        return <PythonIntroductionSlide1 nextAction={nextAction} />;
      }

      if (slug === 'slide-2') {
        return <PythonIntroductionSlide2 nextAction={nextAction} />;
      }

      if (slug === 'slide-3') {
        return <PythonIntroductionSlide3 nextAction={nextAction} />;
      }

      if (slug === 'slide-4') {
        return <PythonIntroductionSlide4 nextAction={nextAction} />;
      }

      if (slug === 'slide-5') {
        return <PythonIntroductionSlide5 nextAction={nextAction} />;
      }

      if (slug === 'slide-6') {
        return <PythonIntroductionSlide6 nextAction={nextAction} />;
      }
    }
    if (isSummary) {
      if (slug === 'slide-1') {
        return <PythonSummarySlide1 nextAction={nextAction} />;
      }

      if (slug === 'slide-2') {
        return <PythonSummarySlide2 nextAction={nextAction} />;
      }
    }
  } else if (courseCode === 'C 1') {
    if (isIntroduction) {
      if (slug === 'slide-1') {
        return <CIntroductionSlide1 nextAction={nextAction} />;
      }

      if (slug === 'slide-2') {
        return <CIntroductionSlide2 nextAction={nextAction} />;
      }

      if (slug === 'slide-3') {
        return <CIntroductionSlide3 nextAction={nextAction} />;
      }

      if (slug === 'slide-4') {
        return <CIntroductionSlide4 nextAction={nextAction} />;
      }

      if (slug === 'slide-5') {
        return <CIntroductionSlide5 nextAction={nextAction} />;
      }

      if (slug === 'slide-6') {
        return <CIntroductionSlide6 nextAction={nextAction} />;
      }
    }
    if (isSummary) {
      if (slug === 'slide-1') {
        return <CSummarySlide1 nextAction={nextAction} />;
      }

      if (slug === 'slide-2') {
        return <CSummarySlide2 nextAction={nextAction} />;
      }
    }
  } else if (courseCode === 'Java') {
    if (isIntroduction) {
      if (slug === 'slide-1') {
        return <JavaIntroductionSlide1 nextAction={nextAction} />;
      }

      if (slug === 'slide-2') {
        return <JavaIntroductionSlide2 nextAction={nextAction} />;
      }

      if (slug === 'slide-3') {
        return <JavaIntroductionSlide3 nextAction={nextAction} />;
      }

      if (slug === 'slide-4') {
        return <JavaIntroductionSlide4 nextAction={nextAction} />;
      }

      if (slug === 'slide-5') {
        return <JavaIntroductionSlide5 nextAction={nextAction} />;
      }
    }
    if (isSummary) {
      if (slug === 'slide-1') {
        return <h1>TODO</h1>;
      }

      if (slug === 'slide-2') {
        return <h1>TODO</h1>;
      }
    }
  } else if (courseCode === 'C 2') {
    if (isIntroduction) {
      if (slug === 'slide-1') {
        return <C2IntroductionSlide1 nextAction={nextAction} />;
      }

      if (slug === 'slide-2') {
        return <C2IntroductionSlide2 nextAction={nextAction} />;
      }

      if (slug === 'slide-3') {
        return <C2IntroductionSlide3 nextAction={nextAction} />;
      }

      if (slug === 'slide-4') {
        return <C2IntroductionSlide4 nextAction={nextAction} />;
      }

      if (slug === 'slide-5') {
        return <C2IntroductionSlide5 nextAction={nextAction} />;
      }
    }
    if (isSummary) {
      if (slug === 'slide-1') {
        return <C2SummarySlide1 nextAction={nextAction} />;
      }

      if (slug === 'slide-2') {
        return <C2SummarySlide2 nextAction={nextAction} />;
      }
    }
  } else if (courseCode === 'CPP') {
    if (isIntroduction) {
      if (slug === 'slide-1') {
        return <CPPIntroductionSlide1 nextAction={nextAction} />;
      }

      if (slug === 'slide-2') {
        return <CPPIntroductionSlide2 nextAction={nextAction} />;
      }

      if (slug === 'slide-3') {
        return <CPPIntroductionSlide3 nextAction={nextAction} />;
      }

      if (slug === 'slide-4') {
        return <CPPIntroductionSlide4 nextAction={nextAction} />;
      }

      if (slug === 'slide-5') {
        return <CPPIntroductionSlide5 nextAction={nextAction} />;
      }

      if (slug === 'slide-6') {
        return <CPPIntroductionSlide6 nextAction={nextAction} />;
      }
    }
    if (isSummary) {
      if (slug === 'slide-1') {
        return <CPPSummarySlide1 nextAction={nextAction} />;
      }

      if (slug === 'slide-2') {
        return <CPPSummarySlide2 nextAction={nextAction} />;
      }
    }
  }

  return <p>Does not exist</p>;
};

CoverSlides.defaultProps = {
  studentId: null,
  sectionId: null,
};

CoverSlides.propTypes = {
  lesson: PropTypes.object.isRequired,
  lessonObject: PropTypes.object.isRequired,
  course: PropTypes.object.isRequired,
  nextAction: PropTypes.func.isRequired,
  studentId: PropTypes.number,
  sectionId: PropTypes.number,
};

export default CoverSlides;
