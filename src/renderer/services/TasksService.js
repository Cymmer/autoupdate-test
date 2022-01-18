import axios from 'axios';
import { removeUndefined } from 'codechum-app-utils';

export const BASE_URL = '/v1/tasks/';
export const BASE_URL_EXTENDED = '/v1/tasks/extended/';

const TasksService = {
  listStudentTasksDetails: ({ studentId, params: { ids } } = {}) =>
    axios.get(`${BASE_URL}students/${studentId}/details/`, {
      params: {
        ids,
      },
    }),
  count: ({
    params: {
      isTemplate,
      createdBefore,
      createdAfter,
      universityId,
      creatorId,
      sectionId,
      studentId,
      lessonStatusId,
      excludedIds,
      status,
      searchString,
      termId,
      sectionIds,
      includeEmpty = true,
      tagIds,
      isExam,
      isCourseTask,
      hasBeenAnsweredByStudents,
    } = {},
  } = {}) =>
    axios.get(`${BASE_URL}count/`, {
      params: removeUndefined({
        e_ids: excludedIds,
        is_template: isTemplate,
        is_exam: isExam,
        created_before: createdBefore,
        created_after: createdAfter,
        university_id: universityId,
        creator_id: creatorId,
        section_id: sectionId,
        student_id: studentId,
        term_id: termId,
        lesson_status_id: lessonStatusId,
        status,
        search: searchString,
        section_ids: sectionIds,
        include_empty: includeEmpty,
        is_course_task: isCourseTask,
        tag_ids: tagIds,
        has_been_answered_by_students: hasBeenAnsweredByStudents,
      }),
    }),
  listStudentTasks: ({
    studentId,
    params: {
      ids,
      page,
      pageSize,
      status,
      ordering,
      sectionId,
      includeAssociatedToLessonTasks,
      isCourseTask,
      isCourseActivity,
    },
  } = {}) =>
    axios.get(`${BASE_URL}students/${studentId}/`, {
      params: removeUndefined({
        ids,
        page,
        page_size: pageSize,
        status,
        ordering,
        section_id: sectionId,
        include_associated_to_lesson_tasks: includeAssociatedToLessonTasks,
        is_course_task: isCourseTask,
        is_course_activity: isCourseActivity,
      }),
    }),
};

TasksService.compounded = {
  listStudentTasksWithDetails: async ({
    params: {
      page,
      pageSize,
      isTemplate,
      createdBefore,
      createdAfter,
      universityId,
      creatorId,
      sectionId,
      studentId,
      lessonStatusId,
      ids,
      excludedIds,
      status,
      searchString,
      termId,
      termIds,
      sectionIds,
      includeEmpty = true,
      tagIds,
      ordering,
      includeAssociatedToLessonTasks,
      hasBeenAnsweredByStudents,
      isCourseTask,
    } = {},
  } = {}) => {
    const {
      data: { results: retrievedTasks, count },
    } = await axios.get(`${BASE_URL}students/${studentId}/`, {
      params: removeUndefined({
        page,
        page_size: pageSize,
        ids,
        e_ids: excludedIds,
        is_template: isTemplate,
        created_before: createdBefore,
        created_after: createdAfter,
        university_id: universityId,
        creator_id: creatorId,
        section_id: sectionId,
        student_id: studentId,
        term_id: termId,
        lesson_status_id: lessonStatusId,
        status,
        search: searchString,
        term_ids: termIds,
        section_ids: sectionIds,
        include_empty: includeEmpty,
        tag_ids: tagIds,
        is_course_task: isCourseTask,
        ordering,
        include_associated_to_lesson_tasks: includeAssociatedToLessonTasks,
        has_been_answered_by_students: hasBeenAnsweredByStudents,
      }),
    });

    let tasksDetails = null;
    if (retrievedTasks.length > 0 && studentId) {
      const {
        data: { results },
      } = await TasksService.listStudentTasksDetails({
        studentId,
        params: { ids: retrievedTasks.map((task) => task.id).join(',') },
      });

      tasksDetails = results;
    }

    return {
      data: {
        count,
        results: retrievedTasks.map((task) => ({
          ...task,
          details: tasksDetails.find((details) => details.id === task.id),
        })),
      },
    };
  },
};

export default TasksService;
