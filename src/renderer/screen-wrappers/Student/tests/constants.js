export const SECTION_ID = 1;

export const SECTION = {
  id: SECTION_ID,
  course_data_id: 2,
  course: {
    id: 5,
    code: 'C 1',
    name: 'Free C Course',
    description:
      'This course provides you with the foundational skill set required to write computer programs in C.',
    icon: null,
    parent_course_id: null,
    university_id: null,
    programming_language_id: 5,
    is_trial: true,
    is_guided: true,
    parent_course: null,
    programming_language: {
      id: 5,
      name: 'Python',
      extension: 'py',
      icon: null,
    },
  },
};

export const LESSON_SLUG = 'basic-c-structure';

export const USER_FOR_HOME = {
  login_count: 1,
};

export const USER_PROP = {
  id: 1,
  university: {
    logo: 'string',
  },
  login_count: 1,
};

export const TASKS = [
  {
    id: 21,
    name: 'Quiz #1',
    section: { id: 11, name: 'C 123' },
    programming_languages: [{ id: 1, name: 'C' }],
    start_time: '02/19/2021 09:17:11 GMT+0000',
    end_time: '02/24/2021 09:17:00 GMT+0000',
    max_score: 70,
    time_before_start: -1516,
    time_before_end: 430472,
    is_delayed_grading: false,
    is_leaderboard_hidden: false,
    is_course_task: true,
    is_disabled: true,
    analytics: {
      result: null,
      max_rank: 1,
      rank: null,
      questions_count: 7,
      problems_solved: 0,
    },
  },
];

export const LESSON = {
  id: 16,
  order: 2,
  title: 'Basic C Structure',
  short_description: 'Default C Program',
  is_locked: false,
  is_introduction: false,
  is_summary: false,
  lesson_image:
    'http://127.0.0.1:8000/media/courses/lesson/images/2-16-c-lesson1_flLbvFu.png',
  course_data_id: 2,
  slug: 'basic-c-structure',
  lesson_objects_count: 3,
  lesson_objects: [
    {
      id: 59,
      order: 1,
      slug: 'c-anatomy',
      title: 'C Anatomy',
      is_summary: false,
    },
    {
      id: 60,
      order: 2,
      slug: 'activity-1',
      number: 1,
      task: { id: 35, name: 'Basic C Structure - Activity #1' },
    },
    { id: 61, order: 3, slug: 'summary', title: 'Summary', is_summary: true },
  ],
  next_lesson: {
    slug: 'how-to-print',
    is_summary: false,
    first_lesson_object: { id: 62, slug: 'how-to-talk' },
  },
};
