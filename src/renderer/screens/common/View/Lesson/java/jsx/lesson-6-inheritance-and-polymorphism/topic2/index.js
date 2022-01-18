import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Compiler } from 'components/elements';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic2 = () => (
  <TopicContainer
    image={IntroImage}
    number={2}
    title="Method Overloading and Overriding"
    titleJsx={
      <>
        <Text>
          Check the code below. As always, compile and run it.
          <br />
          <br />
        </Text>
        <Compiler
          initialSourceCodes={[
            {
              code: `public class Student extends Person {\n\tString program;\n\tString studentNumber;\n\tint yearLevel;\n\n\tStudent() {\n\t\tprogram = "BS Computer Science";\n\t\tstudentNumber = "2020-10001";\n\t\tyearLevel = 1;\n\t}\n\t\n\tvoid display(){\n\t\tSystem.out.println("Program: " + program);\n\t\tSystem.out.println("Student Number: " + studentNumber);\n\t\tSystem.out.println("Year Level: " + yearLevel);\n\t}\n}`,
              file_name: 'Student',
              file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
            },
            {
              code: `enum Gender {\n\tMALE, FEMALE;\n}\n\npublic class Person {\n\tString firstName;\n\tString middleName;\n\tString lastName;\n\tGender gender;\n\tint age;\n\tdouble height; // cm\n\tdouble weight; // kg\n\n\tPerson() {\n\t\tfirstName = "Ambongan";\n\t\tmiddleName = "Adlawon";\n\t\tlastName = "Gatus";\n\t\tgender = Gender.MALE;\n\t\tage = 0;\n\t\theight = 50;\n\t\tweight = 6;\n\t}\n\n\tPerson(\n\t\tString firstName, \n\t\tString middleName, \n\t\tString lastName, \n\t\tGender gender, \n\t\tint age, \n\t\tdouble height, \n\t\tdouble weight\n\t) {\n\t\tthis.firstName = firstName;\n\t\tthis.middleName = middleName;\n\t\tthis.lastName = lastName;\n\t\tthis.gender = gender;\n\t\tthis.age = age;\n\t\tthis.height = height;\n\t\tthis.weight = weight;\n\t}\n\t\n\tvoid display() {\n\t\tSystem.out.println("First Name: " + firstName);\n\t\tSystem.out.println("Middle Name: " + middleName);\n\t\tSystem.out.println("Last Name: " + lastName);\n\t\tSystem.out.println("Gender: " + gender);\n\t\tSystem.out.println("Age: " + age);\n\t\tSystem.out.println("Height: " + height);\n\t\tSystem.out.println("Weight: " + weight);\n\t}\n}`,
              file_name: 'Person',
              file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
            },
            {
              code: `class Main {\n\tpublic static void main(String args[]) {\n\t\tStudent s = new Student();\n\t\ts.display();\n\t}\n}`,
              file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
              file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
            },
          ]}
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
        />
      </>
    }
  >
    <Section>
      <Text>
        Based on the output, display of Person was not the method that was
        invoked. Instead, it was the display of Student as it was only the{' '}
        <strong>program</strong>, <strong>studentNumber</strong>, and{' '}
        <strong>yearLevel</strong> that were printed. What happened to the
        display of Person that should have been inherited by Student?
        <br />
        <br />
        Since the exact same method was defined in class Student, the display of
        Person has now been overridden. This is called{' '}
        <strong>method overriding</strong>. This means that every time display
        is invoked by a Student object, it is the display of Student that has to
        be executed, not the parent's.
        <br />
        <br />
        With this, the attributes inherited from Person will not be displayed.
        One thing that can be done is to print these in the display of Student
        as shown below.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `public class Student extends Person {\n\tString program;\n\tString studentNumber;\n\tint yearLevel;\n\n\tStudent() {\n\t\tprogram = "BS Computer Science";\n\t\tstudentNumber = "2020-10001";\n\t\tyearLevel = 1;\n\t}\n\t\n\tvoid display(){\n\t\tSystem.out.println("First Name: " + firstName);\n\t\tSystem.out.println("Middle Name: " + middleName);\n\t\tSystem.out.println("Last Name: " + lastName);\n\t\tSystem.out.println("Gender: " + gender);\n\t\tSystem.out.println("Age: " + age);\n\t\tSystem.out.println("Height: " + height);\n\t\tSystem.out.println("Weight: " + weight);\n\t\tSystem.out.println("Program: " + program);\n\t\tSystem.out.println("Student Number: " + studentNumber);\n\t\tSystem.out.println("Year Level: " + yearLevel);\n\t}\n}`,
            file_name: 'Student',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `enum Gender {\n\tMALE, FEMALE;\n}\n\npublic class Person {\n\tString firstName;\n\tString middleName;\n\tString lastName;\n\tGender gender;\n\tint age;\n\tdouble height; // cm\n\tdouble weight; // kg\n\n\tPerson() {\n\t\tfirstName = "Ambongan";\n\t\tmiddleName = "Adlawon";\n\t\tlastName = "Gatus";\n\t\tgender = Gender.MALE;\n\t\tage = 0;\n\t\theight = 50;\n\t\tweight = 6;\n\t}\n\n\tPerson(\n\t\tString firstName, \n\t\tString middleName, \n\t\tString lastName, \n\t\tGender gender, \n\t\tint age, \n\t\tdouble height, \n\t\tdouble weight\n\t) {\n\t\tthis.firstName = firstName;\n\t\tthis.middleName = middleName;\n\t\tthis.lastName = lastName;\n\t\tthis.gender = gender;\n\t\tthis.age = age;\n\t\tthis.height = height;\n\t\tthis.weight = weight;\n\t}\n\t\n\tvoid display() {\n\t\tSystem.out.println("First Name: " + firstName);\n\t\tSystem.out.println("Middle Name: " + middleName);\n\t\tSystem.out.println("Last Name: " + lastName);\n\t\tSystem.out.println("Gender: " + gender);\n\t\tSystem.out.println("Age: " + age);\n\t\tSystem.out.println("Height: " + height);\n\t\tSystem.out.println("Weight: " + weight);\n\t}\n}`,
            file_name: 'Person',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `class Main {\n\tpublic static void main(String args[]) {\n\t\tStudent s = new Student();\n\t\ts.display();\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <br />
      <Text>
        But why implement it this way? This defeats the reuse of code benefit of
        inheritance. Although Student has overridden the display of Person, that
        doesn't mean Student no longer has access to the Person's display.
        <br />
        <br />A base class or a parent class is referred to as the{' '}
        <strong>super class</strong> as well. And Java, this is the same keyword
        that refers to the parent class. If <code>this</code> is for the class
        itself, then <code>super</code> refers to the parent.
        <br />
        <br />
        Check the code below:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `public class Student extends Person {\n\tString program;\n\tString studentNumber;\n\tint yearLevel;\n\n\tStudent() {\n\t\tprogram = "BS Computer Science";\n\t\tstudentNumber = "2020-10001";\n\t\tyearLevel = 1;\n\t}\n\t\n\tvoid display(){\n\t\tsuper.display();\n\t\tSystem.out.println("Program: " + program);\n\t\tSystem.out.println("Student Number: " + studentNumber);\n\t\tSystem.out.println("Year Level: " + yearLevel);\n\t}\n}`,
            file_name: 'Student',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `enum Gender {\n\tMALE, FEMALE;\n}\n\npublic class Person {\n\tString firstName;\n\tString middleName;\n\tString lastName;\n\tGender gender;\n\tint age;\n\tdouble height; // cm\n\tdouble weight; // kg\n\n\tPerson() {\n\t\tfirstName = "Ambongan";\n\t\tmiddleName = "Adlawon";\n\t\tlastName = "Gatus";\n\t\tgender = Gender.MALE;\n\t\tage = 0;\n\t\theight = 50;\n\t\tweight = 6;\n\t}\n\n\tPerson(\n\t\tString firstName, \n\t\tString middleName, \n\t\tString lastName, \n\t\tGender gender, \n\t\tint age, \n\t\tdouble height, \n\t\tdouble weight\n\t) {\n\t\tthis.firstName = firstName;\n\t\tthis.middleName = middleName;\n\t\tthis.lastName = lastName;\n\t\tthis.gender = gender;\n\t\tthis.age = age;\n\t\tthis.height = height;\n\t\tthis.weight = weight;\n\t}\n\t\n\tvoid display() {\n\t\tSystem.out.println("First Name: " + firstName);\n\t\tSystem.out.println("Middle Name: " + middleName);\n\t\tSystem.out.println("Last Name: " + lastName);\n\t\tSystem.out.println("Gender: " + gender);\n\t\tSystem.out.println("Age: " + age);\n\t\tSystem.out.println("Height: " + height);\n\t\tSystem.out.println("Weight: " + weight);\n\t}\n}`,
            file_name: 'Person',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `class Main {\n\tpublic static void main(String args[]) {\n\t\tStudent s = new Student();\n\t\ts.display();\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <br />
      <Text>
        There. Compile the code, and run it. Boom!
        <br />
        <br />
        Let's complete the constructor of Student. Let's build an overloaded
        constructor for it.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `public class Student extends Person {\n\tString program;\n\tString studentNumber;\n\tint yearLevel;\n\n\tStudent() {\n\t\tprogram = "BS Computer Science";\n\t\tstudentNumber = "2020-10001";\n\t\tyearLevel = 1;\n\t}\n\t\n\tStudent(\n\t\tString firstName, \n\t\tString middleName, \n\t\tString lastName, \n\t\tGender gender, \n\t\tint age, \n\t\tdouble height, \n\t\tdouble weight,\n\t\tString program, \n\t\tString studentNumber, \n\t\tint yearLevel\n\t) {\n\t\tthis.firstName = firstName;\n\t\tthis.middleName = middleName;\n\t\tthis.lastName = lastName;\n\t\tthis.gender = gender;\n\t\tthis.age = age;\n\t\tthis.height = height;\n\t\tthis.weight = weight;\n\t\tthis.program = program;\n\t\tthis.studentNumber = studentNumber;\n\t\tthis.yearLevel = yearLevel;\n\t}\n\t\n\tvoid display(){\n\t\tsuper.display();\n\t\tSystem.out.println("Program: " + program);\n\t\tSystem.out.println("Student Number: " + studentNumber);\n\t\tSystem.out.println("Year Level: " + yearLevel);\n\t}\n}`,
            file_name: 'Student',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `enum Gender {\n\tMALE, FEMALE;\n}\n\npublic class Person {\n\tString firstName;\n\tString middleName;\n\tString lastName;\n\tGender gender;\n\tint age;\n\tdouble height; // cm\n\tdouble weight; // kg\n\n\tPerson() {\n\t\tSystem.out.println("Inside constructor of Person.");\n\t\tfirstName = "Ambongan";\n\t\tmiddleName = "Adlawon";\n\t\tlastName = "Gatus";\n\t\tgender = Gender.MALE;\n\t\tage = 0;\n\t\theight = 50;\n\t\tweight = 6;\n\t}\n\n\tPerson(\n\t\tString firstName, \n\t\tString middleName, \n\t\tString lastName, \n\t\tGender gender, \n\t\tint age, \n\t\tdouble height, \n\t\tdouble weight\n\t) {\n\t\tthis.firstName = firstName;\n\t\tthis.middleName = middleName;\n\t\tthis.lastName = lastName;\n\t\tthis.gender = gender;\n\t\tthis.age = age;\n\t\tthis.height = height;\n\t\tthis.weight = weight;\n\t}\n\t\n\tvoid display() {\n\t\tSystem.out.println("First Name: " + firstName);\n\t\tSystem.out.println("Middle Name: " + middleName);\n\t\tSystem.out.println("Last Name: " + lastName);\n\t\tSystem.out.println("Gender: " + gender);\n\t\tSystem.out.println("Age: " + age);\n\t\tSystem.out.println("Height: " + height);\n\t\tSystem.out.println("Weight: " + weight);\n\t}\n}`,
            file_name: 'Person',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `class Main {\n\tpublic static void main(String args[]) {\n\t\tStudent s = new Student(\n\t\t\t"Alimyon", \n\t\t\t"Cabahug", \n\t\t\t"Calipayan", \n\t\t\tGender.FEMALE,\n\t\t\t19,\n\t\t\t130,\n\t\t\t60, \n\t\t\t"BS Biology", \n\t\t\t"2020-10002",\n\t\t\t1\n\t\t);\n\t\t\n\t\ts.display();\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <br />
      <Text>
        Notice that similar to display, we should not redo what the overloaded
        constructor of Person already does. Time for some reusing of code! But
        before that, notice that the line "Inside constructor of Person." is
        still printed even if the Student was created using the overloaded
        constructor. This tells us that{' '}
        <strong>
          the default constructor of the super class is always invoked
        </strong>
        . How can this be? We can call a specific constructor of a super class
        by using the <code>super()</code> inside the constructor of a child
        class.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `public class Student extends Person {\n\tString program;\n\tString studentNumber;\n\tint yearLevel;\n\n\tStudent() {\n\t\tprogram = "BS Computer Science";\n\t\tstudentNumber = "2020-10001";\n\t\tyearLevel = 1;\n\t}\n\t\n\tStudent(\n\t\tString firstName, \n\t\tString middleName, \n\t\tString lastName, \n\t\tGender gender, \n\t\tint age, \n\t\tdouble height, \n\t\tdouble weight,\n\t\tString program, \n\t\tString studentNumber, \n\t\tint yearLevel\n\t) {\n\t\tsuper(firstName, middleName, lastName, gender, age, height, weight);\n\t\tthis.program = program;\n\t\tthis.studentNumber = studentNumber;\n\t\tthis.yearLevel = yearLevel;\n\t}\n\t\n\tvoid display(){\n\t\tsuper.display();\n\t\tSystem.out.println("Program: " + program);\n\t\tSystem.out.println("Student Number: " + studentNumber);\n\t\tSystem.out.println("Year Level: " + yearLevel);\n\t}\n}`,
            file_name: 'Student',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `enum Gender {\n\tMALE, FEMALE;\n}\n\npublic class Person {\n\tString firstName;\n\tString middleName;\n\tString lastName;\n\tGender gender;\n\tint age;\n\tdouble height; // cm\n\tdouble weight; // kg\n\n\tPerson() {\n\t\tSystem.out.println("Inside constructor of Person.");\n\t\tfirstName = "Ambongan";\n\t\tmiddleName = "Adlawon";\n\t\tlastName = "Gatus";\n\t\tgender = Gender.MALE;\n\t\tage = 0;\n\t\theight = 50;\n\t\tweight = 6;\n\t}\n\n\tPerson(\n\t\tString firstName, \n\t\tString middleName, \n\t\tString lastName, \n\t\tGender gender, \n\t\tint age, \n\t\tdouble height, \n\t\tdouble weight\n\t) {\n\t\tthis.firstName = firstName;\n\t\tthis.middleName = middleName;\n\t\tthis.lastName = lastName;\n\t\tthis.gender = gender;\n\t\tthis.age = age;\n\t\tthis.height = height;\n\t\tthis.weight = weight;\n\t}\n\t\n\tvoid display() {\n\t\tSystem.out.println("First Name: " + firstName);\n\t\tSystem.out.println("Middle Name: " + middleName);\n\t\tSystem.out.println("Last Name: " + lastName);\n\t\tSystem.out.println("Gender: " + gender);\n\t\tSystem.out.println("Age: " + age);\n\t\tSystem.out.println("Height: " + height);\n\t\tSystem.out.println("Weight: " + weight);\n\t}\n}`,
            file_name: 'Person',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `class Main {\n\tpublic static void main(String args[]) {\n\t\tStudent s = new Student(\n\t\t\t"Alimyon", \n\t\t\t"Cabahug", \n\t\t\t"Calipayan", \n\t\t\tGender.FEMALE,\n\t\t\t19,\n\t\t\t130,\n\t\t\t60, \n\t\t\t"BS Biology", \n\t\t\t"2020-10002",\n\t\t\t1\n\t\t);\n\t\t\n\t\ts.display();\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <br />
      <Text>There you go! Wasn't that super?</Text>
    </Section>
  </TopicContainer>
);

export default Topic2;
