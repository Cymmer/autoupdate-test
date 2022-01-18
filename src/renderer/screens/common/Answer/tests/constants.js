import moment from 'moment';
import GLOBALS from 'codechum-app-globals';

export const USER = {
  id: 1,
};

export const RESULT = ({ isInteractive }) => ({
  id: 1,
  answers: [
    {
      id: 1,
      score: 'string',
      percent_score: 1,
      is_perfect: true,
      number: 1,
      time: -2147483648,
      datetime_submitted: '2029-08-24T14:15:22Z',
      submissions: 1,
      question_id: 1,
      student_id: 1,
      result_id: 1,
      programming_language_id: 1,
      programming_language: {
        id: 1,
        name: 'C',
        extension: 'c',
        icon: 'https://www.pinclipart.com/picdir/middle/519-5198165_pepehands-png-clipart.png',
      },
      question: {
        id: 1,
        max_score: 1,
        task_id: 1,
        problem_id: 1,
        problem: {
          test_cases: [
            {
              id: 1,
              inputs: [
                {
                  value: 'string',
                },
              ],
              output: 'string',
              is_shown: true,
              hidden: true,
            },
          ],
          creator: {
            id: 1,
            first_name: 'string',
            last_name: 'string',
          },
          inputs: [
            {
              input_name: 'string',
              input_description: 'string',
              input_sample: 'string',
              input_constraints: 'string',
            },
          ],
          output_format: 'string',
          sample_output: 'string',
          problem_type: isInteractive
            ? GLOBALS.PROBLEM_TYPES.INTERACTIVE
            : GLOBALS.PROBLEM_TYPES.NON_INTERACTIVE,
        },
        question_additional_info: {},
      },
      student: {
        id: 1,
        first_name: 'string',
        last_name: 'string',
        display_name: 'string',
      },
      source_codes: [
        {
          id: 1,
          answer_id: 1,
          programming_language_id: 1,
          problem_id: 1,
          code: 'string',
          file_name: 'string',
          file_extension: 'strin',
          programming_language: {
            id: 1,
            name: 'C',
            extension: 'c',
            icon: 'https://www.pinclipart.com/picdir/middle/519-5198165_pepehands-png-clipart.png',
          },
        },
      ],
    },
  ],
});

export const ANSWER = RESULT({ isInteractive: true }).answers[0];

export const TASK = {
  id: 1,
  name: 'string',
  section: {
    id: 1,
    name: 'string',
    provide_certificate_method: {},
  },
  programming_languages: [
    {
      id: 1,
      name: 'C',
      extension: 'c',
      icon: 'https://www.pinclipart.com/picdir/middle/519-5198165_pepehands-png-clipart.png',
    },
    {
      id: 2,
      name: 'C#',
      extension: 'cs',
      icon: 'https://www.pinclipart.com/picdir/middle/519-5198165_pepehands-png-clipart.png',
    },
  ],
  start_time: '10/10/2019 01:25:31 GMT+0737',
  end_time: '10/10/2025 01:25:31 GMT+0737',
  max_score: 0,
  time_before_start: 0,
  time_before_end: 1000000,
  is_delayed_grading: false,
  is_leaderboard_hidden: false,
  is_course_task: true,
  is_disabled: true,
  is_exam: false,
  analytics: {
    result: {
      id: RESULT({ isInteractive: false }).answers[0].id,
      datetime_submitted: null,
      exempted: false,
      score: 'string',
    },
    max_rank: 0,
    rank: 0,
    questions_count: 0,
    problems_solved: 0,
  },
  answers: RESULT.answers,
};

export const EXECUTION_OUTPUT = {
  submissions: [
    {
      stdout: 'string',
      time: 0,
      memory: 0,
      stderr: 'string',
      token: 'string',
      compile_output: 'string',
      message: 'string',
      status: {
        id: 0,
        description: 'string',
      },
    },
  ],
};

export const SERVER_EXECUTION_OUTPUT = {
  id: 5,
  timestamp: '02/25/2021 13:08:35 GMT+0000',
  mode: 2,
  input: 'string',
  output: 'string',
  is_practice: true,
  run_score: 'string',
  perfect_score: 0,
  answer_id: ANSWER.id,
  programming_language_id: 2,
  status: 3,
  execution_time: 'string',
  memory_taken: 'string',
  programming_language: {
    id: 2,
    name: 'string',
    extension: 'string',
    icon: 'http://example.com',
  },
  test_case_statuses: [
    {
      id: 5,
      correct: true,
      actual_output: 'string',
      test_case_id: 1,
      status: 3,
      execution_time: 'string',
      memory_taken: 'string',
      test_case: {
        id: 1,
        inputs: [
          {
            value: 'string',
          },
        ],
        output: 'string',
        is_shown: true,
        hidden: true,
      },
    },
  ],
  source_codes: [
    {
      id: 5,
      execution_id: 5,
      code: 'string',
      file_name: 'string',
      file_extension: 'string',
    },
  ],
};

export const RESULT_OUTPUT = {
  rank: 1,
  score: 1,
};

export const SECTION = {
  provide_certificate_method: {
    method_type: 'automatic_2',
    passing_rate: 60,
  },
};

export const TEST_CASE_STATUSES = [
  {
    id: 1,
    correct: true,
    actual_output: 'string',
    test_case_id: 1,
    status: 3,
    execution_time: 'string',
    memory_taken: 'string',
  },
];

export const MATCH = {
  params: {
    taskId: TASK.id,
    questionNumber: 1,
  },
};

export const RANK = 2;

export const LATEST_EXECUTIONS = [
  // Executions for C#
  {
    id: 4,
    timestamp: '02/25/2021 13:08:35 GMT+0000',
    mode: 0,
    input: 'string',
    output: 'string',
    is_practice: true,
    run_score: 'string',
    perfect_score: 0,
    answer_id: ANSWER.id,
    programming_language_id: 2,
    status: 3,
    execution_time: 'string',
    memory_taken: 'string',
    programming_language: {
      id: 2,
      name: 'string',
      extension: 'string',
      icon: 'http://example.com',
    },
    test_case_statuses: [
      {
        id: 4,
        correct: true,
        actual_output: 'string',
        test_case_id: 1,
        status: 3,
        execution_time: 'string',
        memory_taken: 'string',
        test_case: {
          id: 1,
          inputs: [
            {
              value: 'string',
            },
          ],
          output: 'string',
          is_shown: true,
          hidden: true,
        },
      },
    ],
    source_codes: [
      {
        id: 4,
        execution_id: 4,
        code: 'C# Execution Code (ID = 4)',
        file_name: 'string',
        file_extension: 'string',
      },
    ],
  },
  {
    id: 3,
    timestamp: '02/25/2021 13:08:35 GMT+0000',
    mode: 0,
    input: 'string',
    output: 'string',
    is_practice: true,
    run_score: 'string',
    perfect_score: 0,
    answer_id: ANSWER.id,
    programming_language_id: 2,
    status: 3,
    execution_time: 'string',
    memory_taken: 'string',
    programming_language: {
      id: 2,
      name: 'string',
      extension: 'string',
      icon: 'http://example.com',
    },
    test_case_statuses: [
      {
        id: 1,
        correct: true,
        actual_output: 'string',
        test_case_id: 1,
        status: 3,
        execution_time: 'string',
        memory_taken: 'string',
        test_case: {
          id: 1,
          inputs: [
            {
              value: 'string',
            },
          ],
          output: 'string',
          is_shown: true,
          hidden: true,
        },
      },
    ],
    source_codes: [
      {
        id: 3,
        execution_id: 3,
        code: 'C# Execution Code (ID = 3)',
        file_name: 'string',
        file_extension: 'string',
      },
    ],
  },

  // Executions for C
  {
    id: 2,
    timestamp: '02/25/2021 13:08:35 GMT+0000',
    mode: 0,
    input: 'string',
    output: 'string',
    is_practice: true,
    run_score: 'string',
    perfect_score: 0,
    answer_id: ANSWER.id,
    programming_language_id: 1,
    status: 3,
    execution_time: 'string',
    memory_taken: 'string',
    programming_language: {
      id: 1,
      name: 'string',
      extension: 'string',
      icon: 'http://example.com',
    },
    test_case_statuses: [
      {
        id: 2,
        correct: true,
        actual_output: 'string',
        test_case_id: 1,
        status: 3,
        execution_time: 'string',
        memory_taken: 'string',
        test_case: {
          id: 1,
          inputs: [
            {
              value: 'string',
            },
          ],
          output: 'string',
          is_shown: true,
          hidden: true,
        },
      },
    ],
    source_codes: [
      {
        id: 2,
        execution_id: 2,
        code: 'C Execution Code (ID = 2)',
        file_name: 'string',
        file_extension: 'string',
      },
    ],
  },
  {
    id: 1,
    timestamp: '02/25/2021 13:08:35 GMT+0000',
    mode: 0,
    input: 'string',
    output: 'string',
    is_practice: true,
    run_score: 'string',
    perfect_score: 0,
    answer_id: ANSWER.id,
    programming_language_id: 1,
    status: 3,
    execution_time: 'string',
    memory_taken: 'string',
    programming_language: {
      id: 1,
      name: 'string',
      extension: 'string',
      icon: 'http://example.com',
    },
    test_case_statuses: [
      {
        id: 1,
        correct: true,
        actual_output: 'string',
        test_case_id: 1,
        status: 3,
        execution_time: 'string',
        memory_taken: 'string',
        test_case: {
          id: 1,
          inputs: [
            {
              value: 'string',
            },
          ],
          output: 'string',
          is_shown: true,
          hidden: true,
        },
      },
    ],
    source_codes: [
      {
        id: 1,
        execution_id: 1,
        code: 'C Execution Code (ID = 1)',
        file_name: 'string',
        file_extension: 'string',
      },
    ],
  },
];

export const ANSWER_COMMENTS_COUNT = 1;

export const SERVER_DATE_TIME = moment('2021-05-26T07:33:33.030Z');

export const PROGRAMMING_LANGUAGES = [
  {
    id: 1,
    name: 'C',
    extension: 'c',
    icon: 'https://storage.googleapis.com/codechum-production/programming_language/icons/c-horiztonal.png?Expires=1600501144&GoogleAccessId=cloud-storage%40code-chum.iam.gserviceaccount.com&Signature=mjut9n0mBjiiBVMZczO6yONneGDKrGQzND7YO90iYrqxyJHCEZerWP0aN0rdGkfRPpwfhC27ZZfcb2LH2mtrNphHdRkwrw9B2UNYxh%2BSmHKTXKApo8eenjH%2BozIUH%2FKljUYgsfvFMhGP%2BrxgHctAMur4%2BzoX9FciL7rABfA%2BMtfr5r4rSj62mU0VeXwQAyy2LHPXmA8jFLbizgMltizlDFPlyma7M%2BU%2BSlVEHfC4X3bC9r%2FbSTAcl2%2BiRF08TLa7KdbGtQOWDDwKWSEs33VFDCflAERDCYFzCT5dMeCsAwIY%2FRofRs%2BmiFU4csR%2FyKzvh%2BivRYC5bXa3b6EGH%2FhDKA%3D%3D',
  },
  {
    id: 2,
    name: 'C#',
    extension: 'cs',
    icon: 'https://storage.googleapis.com/codechum-production/programming_language/icons/csharp-horizontal.png?Expires=1600501144&GoogleAccessId=cloud-storage%40code-chum.iam.gserviceaccount.com&Signature=Tv9K8S%2BkE%2F2o0PnSByB2hqtYR1KyuQz03FIr20PtcEXuLncJgQvc8jXC2rI%2FXivpKHLMOiFnkrO0xpCHriw%2Fw00xKqB%2BNUtqJkYC3QSmmnb4bhakUcQ8sfRTl4Pr0i7ysNsxyF%2BomUSVF2i6LuEKjoVjSWrjoIbkn6Nql%2FsEbvYWBROF8p%2BDq8A11lSpike%2F%2BupJQ3nplHXqCgwPx72cpZNOhQwkKnGGiz7QY7E27j4dNwctTfv4fKvBeFEazArxJwcxoB518Wg4%2Bqpxq6mL%2BftL%2BQuZpHGoarQWsvJCEb56nyqXpNV8o5yNobuzkMBHwNW9%2FD%2FGKR1IRl1gaxikBA%3D%3D',
  },
  {
    id: 3,
    name: 'C++',
    extension: 'cpp',
    icon: 'https://storage.googleapis.com/codechum-production/programming_language/icons/C.png?Expires=1600501144&GoogleAccessId=cloud-storage%40code-chum.iam.gserviceaccount.com&Signature=YwZ0QpMmAcjDkPcize03SxfqC7oSYtvMsMXLLitJp5H8JRUCMVUpjC3NQ00UWJwUGwsgwyu8LlEI68uvS%2BDKzTDH%2F%2Bhk4hkeg2szeBJq%2BIPs%2FufR4JvQFwp0OfkI%2BaIoFamT2B9RZfjEupDWWzkopXV0oZLaV1FgGQLQDZzFQlbO9TpoZJ%2BLn5L4iina547n65rzSK5tF%2BeSM5j%2FLYaGC0mWvNMW6VzhOnip8oB%2FV7jWkrnuJDfHVRpQlum%2BWYIgL9C0iwTOim%2F4SvKac03MpdaZjozXxYuv3qq%2Bm0dEvGu5LkB1rK5MrWkI5iFcv8UDkDbH16Gnu3tW%2FOlhnQHsUQ%3D%3D',
  },
  {
    id: 4,
    name: 'Java',
    extension: 'java',
    icon: 'https://storage.googleapis.com/codechum-production/programming_language/icons/Java.png?Expires=1600501144&GoogleAccessId=cloud-storage%40code-chum.iam.gserviceaccount.com&Signature=K6dgMrfFQp9pPtJXkU7xT1tT5CICqii%2Bg6cGv3TuIBpQhmvncjf2j82jlRKOvarqZwrSOjHQ%2FVb62zltUy15IpcG6xGMJidmo4FprsT%2FvMeJOtZCncE5ZaCV0AZB1iG4LCbRdYmAUdAwZLP7f7bl7X5TN8gpIpo6iNccgDc9Rli5l0j8AKPBxwl9QtQadLtGknRIt948SId3U17ONrcieLFG1EXohI18ZuvX90P%2BKnSciBA6OiDSSyyOz%2B6P0afNgJeO8sBoaOreIwceFNEkSGE05hJ7uB1XxW6f99mkhnS3qiToVt3Kc5p82a129XDCYN%2FhsUtHKkIIg%2FfuXokLFQ%3D%3D',
  },
  {
    id: 5,
    name: 'Python',
    extension: 'py',
    icon: 'https://storage.googleapis.com/codechum-production/programming_language/icons/Python.png?Expires=1600501144&GoogleAccessId=cloud-storage%40code-chum.iam.gserviceaccount.com&Signature=Hqr%2FqH0pX5yMIb%2FQCz9q0foeW3WvliaqjVwZ1i6euf7S46FLRzaCX4DObUBgBs91tGpM%2BbeCqxNDzN6MVxOK2KwjFUpCUh0KMIHOS%2FryZunzfqf4V%2Fh9WIKSptpE4qR7h%2FQDLpe6DMdFr5B%2Bv0y8hGw4GQ7V%2FEH0a3M0BTNnqOneWpFei6VJfI%2BjGnJaPcJYWN9XrBJJqujWAs1b7ABAmZOw4Y5tZTnymQ0Dvisf3hXncJutjLN6QnqqsDxFWhjhnYxcCYWb2tdFbfzukQ9uqcihFQrIzyX6EkgL2l0lUISxmuDOz0vfoe0K1I%2FqnEy9WlPnqs4mbuWXUktj4LcG6A%3D%3D',
  },
  {
    id: 6,
    name: 'Javascript',
    extension: 'js',
    icon: 'https://storage.googleapis.com/codechum-production/programming_language/icons/Bitmap.png?Expires=1600501144&GoogleAccessId=cloud-storage%40code-chum.iam.gserviceaccount.com&Signature=I%2B6Lzyg8UePVuuEHNFpFqFYrMlfmfFReo7RkDdQVaPlAsmULg7ThdRBijvvSmcPCo9o0gIHwLM6i7RS940RSaaBvoW2mNcW2TO2fhJy%2BcVDAmoPOspg4RN2wCHxiRmAHmiZpSP%2BRvHZ1vtC0hPZG%2FmMLqNu2NdL6vnUO6rJgWY2%2BbVXzQobQsfsVdr8mmstc1som6c1WzZCCNBeRfAW4Z5GRycsNs8%2FsUZTlpKc07NXeYhLyMx0Mkz2xKkNjOqDQu1E%2Fi21rRkNbOX6265GWEBWTV%2FIbBNIYtEziisBjApk%2FD4XcnXoVusYsgiCaYlLxq6zeaQy%2Fq7xPM%2BHWd1KWHg%3D%3D',
  },
];

export const STUDENT_TASK = {
  id: 1,
  name: 'Asking For Input - Activity #1',
  is_delayed_grading: false,
  is_template: false,
  is_exam: false,
  is_disabled: false,
  is_randomized: false,
  is_problem_of_the_week: false,
  is_leaderboard_hidden: false,
  is_course_task: true,
  max_score: 60,
  start_time: '01/09/2021 09:23:54 GMT+0000',
  end_time: '05/27/2048 09:23:54 GMT+0000',
  creator_id: 1,
  section_id: 1,
  programming_language_ids: PROGRAMMING_LANGUAGES.map((pl) => pl.id),
  questions: [
    {
      id: 1,
      max_score: 10,
      task_id: 1,
      problem_id: 1,
      problem: {
        id: 1,
        name: 'No Input',
        slug: 'no-input1707822823',
        problem_solution: '',
        hidden: false,
        difficulty: 'B',
        must_be_perfect: false,
        calibrated_difficulty: 'B',
        output_format: 'Just "Hello World"',
        sample_output: 'Hello World',
        test_cases: [
          { id: 1, output: 'Hello World', is_shown: true, hidden: false },
          { id: 2, output: 'Hello World', is_shown: false, hidden: false },
        ],
        tag_ids: [1],
        creator_id: 1,
        description: '<p>Just print <code>Hello World</code>.</p>',
        creator_name_override: null,
        is_course_problem: false,
        boilerplates: [],
        creator: {
          id: 1,
          email: 'male.teacher@codechum.com',
          username: 'MaleTeacher',
          datetime_created: '2021-01-09T05:55:37.022000+08:00',
          last_login: '08/02/2021 16:17:30 GMT+0800',
          first_name: 'Male',
          last_name: 'Teacher',
          display_name: 'male_teacher',
          profile_pic: null,
          gender: 'M',
          contact_number: '+639876543210',
          blackboard_username: null,
          user_type: 'T',
          university_id: 1,
          program_id: 1,
          original_university_id: 1,
          is_verified: true,
          has_filled_up_form: false,
        },
        tags: [{ id: 1, name: 'Normal Tag', slug: 'normal-tag' }],
        problem_type: GLOBALS.PROBLEM_TYPES.INTERACTIVE,
      },
      question_additional_info: {
        id: 1,
        instruction:
          '<ol><li>Input one character and one integer. Make sure that they are typed on different lines.&nbsp;</li><li>Print out the inputted character and integer in one line, separated by a space. You may look at the sample output for your reference.</li></ol>',
        question_id: 1,
        source_codes: [],
      },
    },
  ],
  datetime_created: '01/09/2021 17:23:54 GMT+0800',
  time_before_start: -17710481,
  time_before_end: 846289518,
  status: 'present',
  questions_count: 1,
  creator: {
    id: 1,
    email: 'male.teacher@codechum.com',
    username: 'MaleTeacher',
    datetime_created: '2021-01-09T05:55:37.022000+08:00',
    last_login: '08/02/2021 16:17:30 GMT+0800',
    first_name: 'Male',
    last_name: 'Teacher',
    display_name: 'male_teacher',
    profile_pic: null,
    gender: 'M',
    contact_number: '+639876543210',
    blackboard_username: null,
    user_type: 'T',
    university_id: 1,
    program_id: 1,
    original_university_id: 1,
    is_verified: true,
    has_filled_up_form: false,
  },
  section: {
    id: 1,
    name: 'C Class',
    code: 'region',
    teacher_id: 1,
    course_id: 1,
    schedules: [
      {
        id: 1,
        start_time: '17:37:30 GMT+0737',
        end_time: '20:37:30 GMT+0737',
        day: 5,
      },
    ],
    is_active: true,
    icon: 'cody',
    color: 'green',
    course_data_id: 1,
  },
  programming_languages: PROGRAMMING_LANGUAGES,
  tags: [{ id: 1, name: 'Normal Tag', slug: 'normal-tag' }],
  difficulty: 'B',
};

export const STUDENT_TASK_DETAILS = {
  result: {
    id: 1,
    datetime_submitted: null,
    exempted: false,
    score: '60.0000',
  },
  max_rank: 1,
  rank: 1,
  questions_count: 1,
  problems_solved: 1,
  id: 1,
  has_result: true,
  has_submitted_result: false,
  is_exempted: false,
};

export const PROBLEM = {
  id: 1,
  test_cases: [
    {
      id: 1,
      inputs: [
        {
          value: 'string',
        },
      ],
      output: 'string',
      is_shown: true,
      hidden: true,
    },
  ],
  creator: {
    id: 1,
    first_name: 'string',
    last_name: 'string',
  },
  inputs: [
    {
      input_name: 'string',
      input_description: 'string',
      input_sample: 'string',
      input_constraints: 'string',
    },
  ],
  output_format: 'string',
  sample_output: 'string',
  problem_type: GLOBALS.PROBLEM_TYPES.INTERACTIVE,
};

export const INTERACTIVE_SUBMISSIONS = [
  [
    {
      compile_output: '',
      stdout: '',
      status: 3,
    },
  ],
];
