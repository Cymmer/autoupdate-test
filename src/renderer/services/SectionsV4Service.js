import axios from 'axios';
import { removeUndefined } from 'codechum-app-utils';

export const BASE_URL = '/v1/sections-v4/';
export const BASE_URL_EXTENDED = '/v1/sections-v4/extended/';

/* eslint-disable camelcase */
const SectionsV4Service = {
  list: ({
    isExtended = false,
    params: {
      courseId,
      courseIds,
      hasStudentId,
      isActive,
      isOnboarding,
      ordering,
      page,
      pageSize,
      searchString,
      teacherId,
      termId,
      termIds,
      universityId,
    } = {},
  } = {}) =>
    axios.get(isExtended ? BASE_URL_EXTENDED : BASE_URL, {
      params: removeUndefined({
        course_id: courseId,
        course_ids: courseIds,
        has_student_id: hasStudentId,
        is_active: isActive,
        is_onboarding: isOnboarding,
        ordering,
        page,
        page_size: pageSize,
        search: searchString,
        teacher_id: teacherId,
        term_id: termId,
        term_ids: termIds,
        university_id: universityId,
      }),
    }),
  retrieve: ({ sectionId, isExtended = false }) =>
    axios.get(
      isExtended
        ? `${BASE_URL}${sectionId}/extended/`
        : `${BASE_URL}${sectionId}/`
    ),
};

export default SectionsV4Service;
