const viewSectionTabs = {
  TIMELINE: {
    name: 'Timeline',
    value: 'timeline',
    id: 'timeline',
  },
};

export default viewSectionTabs;

const BASE_ROUTE = '/student/';

export const STUDENT_ROUTES = {
  HOME: `${BASE_ROUTE}home`,
  CLASSES: `${BASE_ROUTE}classes`,
  ACTIVITIES: `${BASE_ROUTE}activities`,
  JOIN_CLASS: `${BASE_ROUTE}join-class`,
  TASK_RESULT: `${BASE_ROUTE}task-result`,
  VIEW_CLASS: `${BASE_ROUTE}classes/:sectionId/:activeTab`,
  VIEW_CLASS_ACTIVITY: `${BASE_ROUTE}classes/:sectionId/activities/:taskId/:activeTab`,
  VIEW_ACTIVITY: `${BASE_ROUTE}activities/:taskId/:activeTab`,
  VIEW_LESSON: `${BASE_ROUTE}classes/:sectionId/${viewSectionTabs.TIMELINE.value}/lessons/:lessonSlug/:lessonObjectSlug`,
  VIEW_LESSON_SUMMARY: `${BASE_ROUTE}classes/:sectionId/${viewSectionTabs.TIMELINE.value}/lessons/:lessonSlug/:lessonObjectSlug/:activeTab`,
  MY_ACCOUNT: '/:userType/account/:activeTab',
};
