import React from 'react';
import PropTypes from 'prop-types';
import GLOBALS from 'codechum-app-globals';
import { NoResults } from '../../../../../components/elements';

// Python Topics
import PythonLesson1Topic1 from '../python/jsx/lesson-1-how-to-print/topic1';
import PythonLesson1Topic2 from '../python/jsx/lesson-1-how-to-print/topic2';
import PythonLesson1Topic3 from '../python/jsx/lesson-1-how-to-print/topic3';

import PythonLesson2Topic1 from '../python/jsx/lesson-2-variables/topic1';
import PythonLesson2Topic2 from '../python/jsx/lesson-2-variables/topic2';

import PythonLesson3Topic1 from '../python/jsx/lesson-3-strings/topic1';
import PythonLesson3Topic2 from '../python/jsx/lesson-3-strings/topic2';
import PythonLesson3Topic3 from '../python/jsx/lesson-3-strings/topic3';

import PythonLesson4Topic1 from '../python/jsx/lesson-4-arithmetic/topic1';
import PythonLesson4Topic2 from '../python/jsx/lesson-4-arithmetic/topic2';
import PythonLesson4Topic3 from '../python/jsx/lesson-4-arithmetic/topic3';

import PythonLesson5Topic1 from '../python/jsx/lesson-5-asking-for-input/topic1';
import PythonLesson5Topic2 from '../python/jsx/lesson-5-asking-for-input/topic2';

import PythonLesson6Topic1 from '../python/jsx/lesson-6-conditions/topic1';
import PythonLesson6Topic2 from '../python/jsx/lesson-6-conditions/topic2';
import PythonLesson6Topic3 from '../python/jsx/lesson-6-conditions/topic3';

import PythonLesson7Topic1 from '../python/jsx/lesson-7-loops/topic1';
import PythonLesson7Topic2 from '../python/jsx/lesson-7-loops/topic2';
import PythonLesson7Topic3 from '../python/jsx/lesson-7-loops/topic3';

import PythonTopic1 from '../python/jsx/lesson-8-lists/topic1';
import PythonTopic2 from '../python/jsx/lesson-8-lists/topic2';
import PythonTopic3 from '../python/jsx/lesson-8-lists/topic3';

// C Topics
import CLesson1Topic1 from '../c/jsx/lesson-1-basic-c-structure/topic1';

import CLesson2Topic1 from '../c/jsx/lesson-2-how-to-print/topic1';
import CLesson2Topic2 from '../c/jsx/lesson-2-how-to-print/topic2';
import CLesson2Topic3 from '../c/jsx/lesson-2-how-to-print/topic3';

import CLesson3Topic1 from '../c/jsx/lesson-3-variables/topic1';
import CLesson3Topic2 from '../c/jsx/lesson-3-variables/topic2';

import CLesson4Topic1 from '../c/jsx/lesson-4-arithmetic/topic1';
import CLesson4Topic2 from '../c/jsx/lesson-4-arithmetic/topic2';
import CLesson4Topic3 from '../c/jsx/lesson-4-arithmetic/topic3';

import CLesson5Topic1 from '../c/jsx/lesson-5-asking-for-input/topic1';

import CLesson6Topic1 from '../c/jsx/lesson-6-conditions/topic1';
import CLesson6Topic2 from '../c/jsx/lesson-6-conditions/topic2';
import CLesson6Topic3 from '../c/jsx/lesson-6-conditions/topic3';
import CLesson6Topic4 from '../c/jsx/lesson-6-conditions/topic4';

import CLesson7Topic1 from '../c/jsx/lesson-7-loops/topic1';
import CLesson7Topic2 from '../c/jsx/lesson-7-loops/topic2';
import CLesson7Topic3 from '../c/jsx/lesson-7-loops/topic3';
import CLesson7Topic4 from '../c/jsx/lesson-7-loops/topic4';

import CLesson8Topic1 from '../c/jsx/lesson-8-arrays/topic1';
import CLesson8Topic2 from '../c/jsx/lesson-8-arrays/topic2';
import CLesson8Topic3 from '../c/jsx/lesson-8-arrays/topic3';

// Java (OOP) Topics
import JavaLesson1Topic1 from '../java/jsx/lesson-1-java-basics/topic1';
import JavaLesson1Topic2 from '../java/jsx/lesson-1-java-basics/topic2';
import JavaLesson1Topic3 from '../java/jsx/lesson-1-java-basics/topic3';
import JavaLesson1Topic4 from '../java/jsx/lesson-1-java-basics/topic4';

import JavaLesson2Topic1 from '../java/jsx/lesson-2-java-conditionals/topic1';
import JavaLesson2Topic2 from '../java/jsx/lesson-2-java-conditionals/topic2';
import JavaLesson2Topic3 from '../java/jsx/lesson-2-java-conditionals/topic3';

import JavaLesson3Topic1 from '../java/jsx/lesson-3-java-loops/topic1';
import JavaLesson3Topic2 from '../java/jsx/lesson-3-java-loops/topic2';
import JavaLesson3Topic3 from '../java/jsx/lesson-3-java-loops/topic3';
import JavaLesson3Topic4 from '../java/jsx/lesson-3-java-loops/topic4';
import JavaLesson3Topic5 from '../java/jsx/lesson-3-java-loops/topic5';

import JavaLesson4Topic1 from '../java/jsx/lesson-4-java-arrays/topic1';
import JavaLesson4Topic2 from '../java/jsx/lesson-4-java-arrays/topic2';
import JavaLesson4Topic3 from '../java/jsx/lesson-4-java-arrays/topic3';
import JavaLesson4Topic4 from '../java/jsx/lesson-4-java-arrays/topic4';

import JavaLesson5Part1Topic1 from '../java/jsx/lesson-5-encapsulation-part-1/topic1';
import JavaLesson5Part1Topic2 from '../java/jsx/lesson-5-encapsulation-part-1/topic2';
import JavaLesson5Part1Topic3 from '../java/jsx/lesson-5-encapsulation-part-1/topic3';
import JavaLesson5Part1Topic4 from '../java/jsx/lesson-5-encapsulation-part-1/topic4';
import JavaLesson5Part1Topic5 from '../java/jsx/lesson-5-encapsulation-part-1/topic5';

import JavaLesson5Part2Topic1 from '../java/jsx/lesson-5-encapsulation-part-2/topic1';
import JavaLesson5Part2Topic2 from '../java/jsx/lesson-5-encapsulation-part-2/topic2';
import JavaLesson5Part2Topic3 from '../java/jsx/lesson-5-encapsulation-part-2/topic3';
import JavaLesson5Part2Topic4 from '../java/jsx/lesson-5-encapsulation-part-2/topic4';
import JavaLesson5Part2Topic5 from '../java/jsx/lesson-5-encapsulation-part-2/topic5';
import JavaLesson5Part2Topic6 from '../java/jsx/lesson-5-encapsulation-part-2/topic6';

import JavaLesson6Topic1 from '../java/jsx/lesson-6-inheritance-and-polymorphism/topic1';
import JavaLesson6Topic2 from '../java/jsx/lesson-6-inheritance-and-polymorphism/topic2';
import JavaLesson6Topic3 from '../java/jsx/lesson-6-inheritance-and-polymorphism/topic3';
import JavaLesson6Topic4 from '../java/jsx/lesson-6-inheritance-and-polymorphism/topic4';

import JavaLesson7Topic1 from '../java/jsx/lesson-7-abstraction/topic1';
import JavaLesson7Topic2 from '../java/jsx/lesson-7-abstraction/topic2';
import JavaLesson7Topic3 from '../java/jsx/lesson-7-abstraction/topic3';

import JavaLesson8Topic1 from '../java/jsx/lesson-8-bonus-labours/topic1';
import JavaLesson8Topic2 from '../java/jsx/lesson-8-bonus-labours/topic2';

// C-2 Topics
import C2Lesson1Topic1 from '../c-ii/jsx/lesson-1-on-basic-functions/topic1';
import C2Lesson1Topic2 from '../c-ii/jsx/lesson-1-on-basic-functions/topic2';

import C2Lesson2Topic1 from '../c-ii/jsx/lesson-2-arrays/topic1';
import C2Lesson2Topic2 from '../c-ii/jsx/lesson-2-arrays/topic2';
import C2Lesson2Topic3 from '../c-ii/jsx/lesson-2-arrays/topic3';
import C2Lesson2Topic4 from '../c-ii/jsx/lesson-2-arrays/topic4';

import C2Lesson3Topic1 from '../c-ii/jsx/lesson-3-n-dimensional-arrays/topic1';
import C2Lesson3Topic2 from '../c-ii/jsx/lesson-3-n-dimensional-arrays/topic2';

import C2Lesson4Topic1 from '../c-ii/jsx/lesson-4-pointers/topic1';
import C2Lesson4Topic2 from '../c-ii/jsx/lesson-4-pointers/topic2';

import C2Lesson5Topic1 from '../c-ii/jsx/lesson-5-recursions/topic1';
import C2Lesson5Topic2 from '../c-ii/jsx/lesson-5-recursions/topic2';
import C2Lesson5Topic3 from '../c-ii/jsx/lesson-5-recursions/topic3';

import C2Lesson6Topic1 from '../c-ii/jsx/lesson-6-structure-and-enumerations/topic1';
import C2Lesson6Topic2 from '../c-ii/jsx/lesson-6-structure-and-enumerations/topic2';
import C2Lesson6Topic3 from '../c-ii/jsx/lesson-6-structure-and-enumerations/topic3';
import C2Lesson6Topic4 from '../c-ii/jsx/lesson-6-structure-and-enumerations/topic4';

// C++ Topics
import CPPLesson1Topic1 from '../cpp/jsx/lesson-1-basic-cpp-structure/topic1';

import CPPLesson2Topic1 from '../cpp/jsx/lesson-2-how-to-print/topic1';
import CPPLesson2Topic2 from '../cpp/jsx/lesson-2-how-to-print/topic2';
import CPPLesson2Topic3 from '../cpp/jsx/lesson-2-how-to-print/topic3';

import CPPLesson3Topic1 from '../cpp/jsx/lesson-3-variables/topic1';
import CPPLesson3Topic2 from '../cpp/jsx/lesson-3-variables/topic2';

import CPPLesson4Topic1 from '../cpp/jsx/lesson-4-arithmetic/topic1';
import CPPLesson4Topic2 from '../cpp/jsx/lesson-4-arithmetic/topic2';
import CPPLesson4Topic3 from '../cpp/jsx/lesson-4-arithmetic/topic3';

import CPPLesson5Topic1 from '../cpp/jsx/lesson-5-asking-for-input/topic1';

import CPPLesson6Topic1 from '../cpp/jsx/lesson-6-conditions/topic1';
import CPPLesson6Topic2 from '../cpp/jsx/lesson-6-conditions/topic2';
import CPPLesson6Topic3 from '../cpp/jsx/lesson-6-conditions/topic3';
import CPPLesson6Topic4 from '../cpp/jsx/lesson-6-conditions/topic4';

import CPPLesson7Topic1 from '../cpp/jsx/lesson-7-loops/topic1';
import CPPLesson7Topic2 from '../cpp/jsx/lesson-7-loops/topic2';
import CPPLesson7Topic3 from '../cpp/jsx/lesson-7-loops/topic3';
import CPPLesson7Topic4 from '../cpp/jsx/lesson-7-loops/topic4';

import CPPLesson8Topic1 from '../cpp/jsx/lesson-8-arrays/topic1';
import CPPLesson8Topic2 from '../cpp/jsx/lesson-8-arrays/topic2';
import CPPLesson8Topic3 from '../cpp/jsx/lesson-8-arrays/topic3';

const Topic = ({ lesson, course, lessonObject }) => {
  const courseCode = course.parent_course?.code || course.code;

  if (courseCode === 'Python') {
    if (lesson.slug === 'how-to-print') {
      if (lessonObject.slug === 'how-to-talk') {
        return <PythonLesson1Topic1 />;
      }
      if (lessonObject.slug === 'when-to-pause') {
        return <PythonLesson1Topic2 />;
      }
      if (lessonObject.slug === 'reading-the-situation') {
        return <PythonLesson1Topic3 />;
      }
    } else if (lesson.slug === 'variables') {
      if (lessonObject.slug === 'no-dead-airs') {
        return <PythonLesson2Topic1 />;
      }
      if (lessonObject.slug === 'how-should-i-name-you') {
        return <PythonLesson2Topic2 />;
      }
    } else if (lesson.slug === 'strings') {
      if (lessonObject.slug === 'speech-dictionary') {
        return <PythonLesson3Topic1 />;
      }
      if (lessonObject.slug === 'friends-lingo') {
        return <PythonLesson3Topic2 />;
      }
      if (lessonObject.slug === 'compound-words') {
        return <PythonLesson3Topic3 />;
      }
    } else if (lesson.slug === 'arithmetic') {
      if (lessonObject.slug === 'basic-math') {
        return <PythonLesson4Topic1 />;
      }
      if (lessonObject.slug === 'like-a-scientific-calculator') {
        return <PythonLesson4Topic2 />;
      }
      if (lessonObject.slug === 'which-to-solve-first') {
        return <PythonLesson4Topic3 />;
      }
    } else if (lesson.slug === 'asking-for-input') {
      if (lessonObject.slug === 'learn-to-listen') {
        return <PythonLesson5Topic1 />;
      }
      if (lessonObject.slug === 'a-lot-of-things-to-listen') {
        return <PythonLesson5Topic2 />;
      }
    } else if (lesson.slug === 'conditions') {
      if (lessonObject.slug === 'making-decisions') {
        return <PythonLesson6Topic1 />;
      }
      if (lessonObject.slug === 'torn-between-the-two') {
        return <PythonLesson6Topic2 />;
      }
      if (lessonObject.slug === 'if-not-that-then-what') {
        return <PythonLesson6Topic3 />;
      }
    } else if (lesson.slug === 'loops') {
      if (lessonObject.slug === 'counting') {
        return <PythonLesson7Topic1 />;
      }
      if (lessonObject.slug === 'until-it-doesnt-fit') {
        return <PythonLesson7Topic2 />;
      }
      if (lessonObject.slug === 'stop-and-skip') {
        return <PythonLesson7Topic3 />;
      }
    } else if (lesson.slug === 'lists') {
      if (lessonObject.slug === 'how-to-make-a-list') {
        return <PythonTopic1 />;
      }
      if (lessonObject.slug === 'listing-skills') {
        return <PythonTopic2 />;
      }
      if (lessonObject.slug === 'listing-one-at-a-time') {
        return <PythonTopic3 />;
      }
    } else {
      return <PythonLesson1Topic1 />;
    }
  } else if (courseCode === 'C 1') {
    if (lesson.slug === 'basic-c-structure') {
      if (lessonObject.slug === 'c-anatomy') {
        return <CLesson1Topic1 />;
      }
    } else if (lesson.slug === 'how-to-print') {
      if (lessonObject.slug === 'how-to-talk') {
        return <CLesson2Topic1 />;
      }
      if (lessonObject.slug === 'when-to-pause') {
        return <CLesson2Topic2 />;
      }
      if (lessonObject.slug === 'reading-the-situation') {
        return <CLesson2Topic3 />;
      }
    } else if (lesson.slug === 'variables') {
      if (lessonObject.slug === 'no-dead-airs') {
        return <CLesson3Topic1 />;
      }
      if (lessonObject.slug === 'how-should-i-name-you') {
        return <CLesson3Topic2 />;
      }
    } else if (lesson.slug === 'arithmetic') {
      if (lessonObject.slug === 'basic-math') {
        return <CLesson4Topic1 />;
      }
      if (lessonObject.slug === 'like-a-scientific-calculator') {
        return <CLesson4Topic2 />;
      }
      if (lessonObject.slug === 'which-to-solve-first') {
        return <CLesson4Topic3 />;
      }
    } else if (lesson.slug === 'asking-for-input') {
      if (lessonObject.slug === 'learn-to-listen') {
        return <CLesson5Topic1 />;
      }
    } else if (lesson.slug === 'conditions') {
      if (lessonObject.slug === 'making-decisions') {
        return <CLesson6Topic1 />;
      }
      if (lessonObject.slug === 'torn-between-the-two') {
        return <CLesson6Topic2 />;
      }
      if (lessonObject.slug === 'if-not-that-then-what') {
        return <CLesson6Topic3 />;
      }
      if (lessonObject.slug === 'finding-the-one') {
        return <CLesson6Topic4 />;
      }
    } else if (lesson.slug === 'loops') {
      if (lessonObject.slug === 'until-it-doesnt-fit') {
        return <CLesson7Topic1 />;
      }
      if (lessonObject.slug === 'until-you-say-so') {
        return <CLesson7Topic2 />;
      }
      if (lessonObject.slug === 'counting') {
        return <CLesson7Topic3 />;
      }
      if (lessonObject.slug === 'stop-and-skip') {
        return <CLesson7Topic4 />;
      }
    } else if (lesson.slug === 'arrays') {
      if (lessonObject.slug === 'how-to-make-an-array') {
        return <CLesson8Topic1 />;
      }
      if (lessonObject.slug === 'an-array-element') {
        return <CLesson8Topic2 />;
      }
      if (lessonObject.slug === 'traversing-the-array') {
        return <CLesson8Topic3 />;
      }
    } else {
      return <CLesson1Topic1 />;
    }
  } else if (courseCode === 'C 2') {
    if (lesson.slug === 'on-basic-functions') {
      if (lessonObject.slug === 'declare-define-and-call') {
        return <C2Lesson1Topic1 />;
      }
      if (lessonObject.slug === 'variable-scopes') {
        return <C2Lesson1Topic2 />;
      }
    } else if (lesson.slug === 'arrays') {
      if (lessonObject.slug === 'defining-arrays') {
        return <C2Lesson2Topic1 />;
      }
      if (lessonObject.slug === 'sorting') {
        return <C2Lesson2Topic2 />;
      }
      if (lessonObject.slug === 'strings') {
        return <C2Lesson2Topic3 />;
      }
      if (lessonObject.slug === 'problem-solving-with-arrays') {
        return <C2Lesson2Topic4 />;
      }
    } else if (lesson.slug === 'n-dimensional-arrays') {
      if (lessonObject.slug === '2d-arrays') {
        return <C2Lesson3Topic1 />;
      }
      if (lessonObject.slug === '3d-arrays') {
        return <C2Lesson3Topic2 />;
      }
    } else if (lesson.slug === 'n-dimensional-arrays') {
      if (lessonObject.slug === '2d-arrays') {
        return <C2Lesson3Topic1 />;
      }
      if (lessonObject.slug === '3d-arrays') {
        return <C2Lesson3Topic2 />;
      }
    } else if (lesson.slug === 'pointers') {
      if (lessonObject.slug === 'intro-to-pointers') {
        return <C2Lesson4Topic1 />;
      }
      if (lessonObject.slug === 'more-on-pointers') {
        return <C2Lesson4Topic2 />;
      }
    } else if (lesson.slug === 'recursions') {
      if (lessonObject.slug === 'recursion-cases') {
        return <C2Lesson5Topic1 />;
      }
      if (lessonObject.slug === 'recursion-applications') {
        return <C2Lesson5Topic2 />;
      }
      if (lessonObject.slug === 'functions-and-header-files') {
        return <C2Lesson5Topic3 />;
      }
    } else if (lesson.slug === 'structure-and-enumerations') {
      if (lessonObject.slug === 'the-struct-data-type') {
        return <C2Lesson6Topic1 />;
      }
      if (lessonObject.slug === 'creating-data-types') {
        return <C2Lesson6Topic2 />;
      }
      if (lessonObject.slug === 'the-enum-data-type') {
        return <C2Lesson6Topic3 />;
      }
      if (lessonObject.slug === 'applying-enums') {
        return <C2Lesson6Topic4 />;
      }
    }
  } else if (courseCode === 'Java') {
    if (lesson.slug === 'java-basics') {
      if (lessonObject.slug === 'java-main') {
        return <JavaLesson1Topic1 />;
      }
      if (lessonObject.slug === 'primitive-data-types') {
        return <JavaLesson1Topic2 />;
      }
      if (lessonObject.slug === 'operators') {
        return <JavaLesson1Topic3 />;
      }
      if (lessonObject.slug === 'taking-inputs') {
        return <JavaLesson1Topic4 />;
      }
    } else if (lesson.slug === 'java-conditionals') {
      if (lessonObject.slug === 'if-statement') {
        return <JavaLesson2Topic1 />;
      }
      if (lessonObject.slug === 'if-else-statement') {
        return <JavaLesson2Topic2 />;
      }
      if (lessonObject.slug === 'compound-conditions-and-logical-operators') {
        return <JavaLesson2Topic3 />;
      }
    } else if (lesson.slug === 'java-loops') {
      if (lessonObject.slug === 'what-are-loops') {
        return <JavaLesson3Topic1 />;
      }
      if (lessonObject.slug === 'while-loop') {
        return <JavaLesson3Topic2 />;
      }
      if (lessonObject.slug === 'for-loop') {
        return <JavaLesson3Topic3 />;
      }
      if (lessonObject.slug === 'do-while-loop') {
        return <JavaLesson3Topic4 />;
      }
      if (lessonObject.slug === 'nested-loops') {
        return <JavaLesson3Topic5 />;
      }
    } else if (lesson.slug === 'java-arrays') {
      if (lessonObject.slug === 'what-are-arrays') {
        return <JavaLesson4Topic1 />;
      }
      if (lessonObject.slug === 'garbage-collection') {
        return <JavaLesson4Topic2 />;
      }
      if (lessonObject.slug === 'accessing-elements') {
        return <JavaLesson4Topic3 />;
      }
      if (lessonObject.slug === 'for-each-array-traversal') {
        return <JavaLesson4Topic4 />;
      }
    } else if (lesson.slug === 'encapsulation-part-1') {
      if (lessonObject.slug === 'what-are-classes-and-objects') {
        return <JavaLesson5Part1Topic1 />;
      }
      if (lessonObject.slug === 'instance-variables') {
        return <JavaLesson5Part1Topic2 />;
      }
      if (lessonObject.slug === 'constructors') {
        return <JavaLesson5Part1Topic3 />;
      }
      if (lessonObject.slug === 'overloaded-constructors') {
        return <JavaLesson5Part1Topic4 />;
      }
      if (lessonObject.slug === 'methods') {
        return <JavaLesson5Part1Topic5 />;
      }
    } else if (lesson.slug === 'encapsulation-part-2') {
      if (lessonObject.slug === 'access-modifiers') {
        return <JavaLesson5Part2Topic1 />;
      }
      if (lessonObject.slug === 'getters-and-setters') {
        return <JavaLesson5Part2Topic2 />;
      }
      if (lessonObject.slug === 'enumeration') {
        return <JavaLesson5Part2Topic3 />;
      }
      if (lessonObject.slug === 'packages') {
        return <JavaLesson5Part2Topic4 />;
      }
      if (lessonObject.slug === 'strings') {
        return <JavaLesson5Part2Topic5 />;
      }
      if (lessonObject.slug === 'static-variables') {
        return <JavaLesson5Part2Topic6 />;
      }
    } else if (lesson.slug === 'inheritance-and-polymorphism') {
      if (lessonObject.slug === 'composition-and-inheritance') {
        return <JavaLesson6Topic1 />;
      }
      if (lessonObject.slug === 'method-overloading-and-overriding') {
        return <JavaLesson6Topic2 />;
      }
      if (lessonObject.slug === 'protected-access-modifier') {
        return <JavaLesson6Topic3 />;
      }
      if (lessonObject.slug === 'polymorphism') {
        return <JavaLesson6Topic4 />;
      }
    } else if (lesson.slug === 'abstraction') {
      if (lessonObject.slug === 'what-is-abstraction') {
        return <JavaLesson7Topic1 />;
      }
      if (lessonObject.slug === 'abstract-classes') {
        return <JavaLesson7Topic2 />;
      }
      if (lessonObject.slug === 'interfaces') {
        return <JavaLesson7Topic3 />;
      }
    } else if (lesson.slug === 'bonus-labours') {
      if (lessonObject.slug === 'java-data-structures') {
        return <JavaLesson8Topic1 />;
      }
      if (lessonObject.slug === 'exceptions') {
        return <JavaLesson8Topic2 />;
      }
    } else {
      return (
        <NoResults
          codyType={GLOBALS.CODY_TYPES.OK}
          text="This lesson will be up soon!"
        />
      );
    }
  } else if (courseCode === 'CPP') {
    if (lesson.slug === 'basic-cpp-structure') {
      if (lessonObject.slug === 'cpp-anatomy') {
        return <CPPLesson1Topic1 />;
      }
    } else if (lesson.slug === 'how-to-print') {
      if (lessonObject.slug === 'how-to-talk') {
        return <CPPLesson2Topic1 />;
      }
      if (lessonObject.slug === 'when-to-pause') {
        return <CPPLesson2Topic2 />;
      }
      if (lessonObject.slug === 'manipulating-the-situation') {
        return <CPPLesson2Topic3 />;
      }
    } else if (lesson.slug === 'variables') {
      if (lessonObject.slug === 'no-dead-airs') {
        return <CPPLesson3Topic1 />;
      }
      if (lessonObject.slug === 'how-should-i-name-you') {
        return <CPPLesson3Topic2 />;
      }
    } else if (lesson.slug === 'arithmetic') {
      if (lessonObject.slug === 'basic-math') {
        return <CPPLesson4Topic1 />;
      }
      if (lessonObject.slug === 'like-a-scientific-calculator') {
        return <CPPLesson4Topic2 />;
      }
      if (lessonObject.slug === 'which-to-solve-first') {
        return <CPPLesson4Topic3 />;
      }
    } else if (lesson.slug === 'asking-for-input') {
      if (lessonObject.slug === 'learn-to-listen') {
        return <CPPLesson5Topic1 />;
      }
    } else if (lesson.slug === 'conditions') {
      if (lessonObject.slug === 'making-decisions') {
        return <CPPLesson6Topic1 />;
      }
      if (lessonObject.slug === 'torn-between-the-two') {
        return <CPPLesson6Topic2 />;
      }
      if (lessonObject.slug === 'if-not-that-then-what') {
        return <CPPLesson6Topic3 />;
      }
      if (lessonObject.slug === 'finding-the-one') {
        return <CPPLesson6Topic4 />;
      }
    } else if (lesson.slug === 'loops') {
      if (lessonObject.slug === 'until-it-doesnt-fit') {
        return <CPPLesson7Topic1 />;
      }
      if (lessonObject.slug === 'until-you-say-so') {
        return <CPPLesson7Topic2 />;
      }
      if (lessonObject.slug === 'counting') {
        return <CPPLesson7Topic3 />;
      }
      if (lessonObject.slug === 'stop-and-skip') {
        return <CPPLesson7Topic4 />;
      }
    } else if (lesson.slug === 'arrays') {
      if (lessonObject.slug === 'how-to-make-an-array') {
        return <CPPLesson8Topic1 />;
      }
      if (lessonObject.slug === 'an-array-element') {
        return <CPPLesson8Topic2 />;
      }
      if (lessonObject.slug === 'traversing-an-array') {
        return <CPPLesson8Topic3 />;
      }
    } else {
      return <CPPLesson1Topic1 />;
    }
  }
};

Topic.propTypes = {
  lesson: PropTypes.object.isRequired,
  course: PropTypes.object.isRequired,
  lessonObject: PropTypes.object.isRequired,
};

export default Topic;
