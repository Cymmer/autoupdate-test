import GLOBALS from 'codechum-app-globals';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { SectionCardLarge, SectionList } from '../../../components';
import { sectionListTypes } from '../../../components/constants';
import { Container, Section } from '../../../components/elements';
import { getUser } from '../../../ducks';
import { useSectionsV4 } from '../../../hooks';
import { viewSectionTabs } from '../View/constants';

const Sections = ({ user: { id: userId } }) => {
  const { isLoading: isActiveSectionsLoading, data: activeSections } =
    useSectionsV4({
      isExtended: true,
      params: { hasStudentId: userId, isActive: true },
    });

  return (
    <Container>
      <Section id="activeClassesStudentSections" title="Active Classes">
        <SectionList
          isLoading={isActiveSectionsLoading}
          type={sectionListTypes.LARGE}
        >
          {activeSections?.map((section) => (
            <SectionCardLarge
              key={section.id}
              link={`/student/classes/${section.id}/${viewSectionTabs.TIMELINE.value}/`}
              section={section}
              userType={GLOBALS.USER_TYPES.STUDENT}
            />
          ))}
        </SectionList>
      </Section>
    </Container>
  );
};

Sections.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

const mapStateToProps = (store) => ({
  user: getUser(store),
});

export default connect(mapStateToProps, null)(Sections);
