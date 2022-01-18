import GLOBALS from 'codechum-app-globals';
import { formatSectionSchedule } from 'codechum-app-utils';
import { SectionImage } from 'components';
import {
  sectionColors,
  sectionIcons,
  sectionListTypes
} from 'components/constants';
import { Container, Header, SubInfo, Text } from 'components/elements';
import { tabKinds, textTypes } from 'components/elements/constants';
import { useSectionV4 } from 'hooks';
import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { STUDENT_ROUTES } from 'screen-wrappers/Student/constants';
import viewSectionTabs from '../constants/viewSectionTabs';
import Preloader from '../Preloader';
import Activities from './Activities';
import styles from './styles.module.scss';
import Timeline from './Timeline';

export const ViewSection = ({
  match: {
    params: { sectionId, activeTab },
  },
}) => {
  const { isLoading: isSectionLoading, section } = useSectionV4({
    isExtended: true,
    sectionId,
  });

  const {
    name: sectionName,
    schedules,
    is_active: isActive,
    icon,
    color,
    // teacher_id: teacherId,
    course_data_id: courseDataId,
  } = section || {};

  // const { isLoading: isTeacherLoading, user: teacher } = useUser({
  //   isExtended: false,
  //   userId: teacherId,
  //   params: {
  //     teachers: true,
  //     managers: true,
  //   },
  // });

  if (isSectionLoading) {
    return <Preloader />;
  }

  return (
    <>
      <Header
        activeTab={activeTab}
        breadcrumbs={[
          {
            name: 'My Classes',
            link: '/student/classes',
          },
          {
            name: sectionName,
            link: '#',
          },
        ]}
        tabs={[
          courseDataId
            ? {
                name: viewSectionTabs.TIMELINE.name,
                value: viewSectionTabs.TIMELINE.value,
                kind: tabKinds.LINK,
                action: `/student/classes/${sectionId}/${viewSectionTabs.TIMELINE.value}`,
              }
            : null,
          {
            name: viewSectionTabs.ACTIVITIES.name,
            value: viewSectionTabs.ACTIVITIES.value,
            kind: tabKinds.LINK,
            action: `/student/classes/${sectionId}/${viewSectionTabs.ACTIVITIES.value}`,
          },
        ].filter((tab) => tab !== null)}
      >
        <div className={styles.ViewSection_header}>
          <div className={styles.ViewSection_info}>
            <SectionImage
              className={styles.ViewSection_image}
              color={
                color
                  ? sectionColors[
                      [...Object.keys(sectionColors)].find(
                        (c) => sectionColors[c].value === color
                      )
                    ]
                  : sectionColors.GREEN
              }
              icon={
                icon
                  ? sectionIcons[
                      [...Object.keys(sectionIcons)].find(
                        (i) => sectionIcons[i].value === icon
                      )
                    ]
                  : sectionIcons.CODY
              }
              size={sectionListTypes.SMALL}
            />

            <div className={styles.ViewSection_text}>
              <div className={styles.ViewSection_name}>
                <Text type={textTypes.HEADING.SM}>{sectionName}</Text>
                <Text
                  className={
                    styles[
                      `ViewSection_status___${isActive ? 'active' : 'inactive'}`
                    ]
                  }
                  colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
                  type={textTypes.BODY.SM}
                >
                  {isActive ? 'Active' : 'Inactive'}
                </Text>
              </div>
              <div className={styles.ViewSection_subinfo}>
                <SubInfo
                  data={[
                    // {
                    //   icon: 'person',
                    //   text: formatTeacherName(teacher),
                    // },
                    {
                      icon: 'access_time',
                      text: formatSectionSchedule(schedules),
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </Header>
      <Container>
        <React.Suspense fallback={<div>loading</div>}>
          <Switch>
            {/*
              We do a special conditional redirect to the section's class overview for
              the student side because the `enroll` endpoint doesn't return the section
              enrolled so we always redirect the student from the Join Section screen
              to the section's timeline because we don't know if the section that the
              student just joined has a course data or not
            */}
            {courseDataId ? (
              <Route
                name="Class - Timeline"
                path={`/student/classes/:sectionId/${viewSectionTabs.TIMELINE.value}`}
                render={(props) => (
                  <Timeline
                    courseDataId={courseDataId}
                    section={section}
                    {...props}
                  />
                )}
              />
            ) : (
              <Route
                name="Class - Activities"
                path={`/student/classes/:sectionId/${viewSectionTabs.TIMELINE.value}`}
                render={() => (
                  <Redirect
                    to={`/student/classes/${sectionId}/${viewSectionTabs.ACTIVITIES.value}`}
                  />
                )}
              />
            )}
            <Route
              name="Class - Activities"
              path={`/student/classes/:sectionId/${viewSectionTabs.ACTIVITIES.value}`}
              render={(props) => <Activities section={section} {...props} />}
            />

            <Redirect to={STUDENT_ROUTES.VIEW_CLASS} />
          </Switch>
        </React.Suspense>
      </Container>
    </>
  );
};

ViewSection.propTypes = {
  match: PropTypes.object.isRequired,
};

export default ViewSection;
