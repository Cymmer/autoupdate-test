import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Compiler } from 'components/elements';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic3 = () => (
  <TopicContainer
    image={IntroImage}
    number={3}
    title="Protected Access Modifier"
    titleJsx={
      <Text>
        We mentioned early on that both attributes and methods are inherited.
        And we have seen that the subclass has access to the methods and
        attributes of the super class. Since we are talking about access, what
        happens when the attributes and methods of the super class are private?
        Recall that when they are set to be private, they can be accessed only
        inside the class. What if we try to access them in the subclass?
      </Text>
    }
  >
    <Section>
      <Text>As always, study the code below. Compile and run it.</Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `public class Student extends Person {\n\tString program;\n\tString studentNumber;\n\tint yearLevel;\n\n\tStudent() {\n\t\tprogram = "BS Computer Science";\n\t\tstudentNumber = "2020-10001";\n\t\tyearLevel = 1;\n\t}\n\t\n\tStudent(\n\t\tString firstName, \n\t\tString middleName, \n\t\tString lastName, \n\t\tGender gender, \n\t\tint age, \n\t\tdouble height, \n\t\tdouble weight,\n\t\tString program, \n\t\tString studentNumber, \n\t\tint yearLevel\n\t) {\n\t\tsuper(firstName, middleName, lastName, gender, age, height, weight);\n\t\tthis.program = program;\n\t\tthis.studentNumber = studentNumber;\n\t\tthis.yearLevel = yearLevel;\n\t}\n\t\n\tvoid display(){\n\t\tsuper.display();\n\t\tSystem.out.println("Program: " + program);\n\t\tSystem.out.println("Student Number: " + studentNumber);\n\t\tSystem.out.println("Year Level: " + yearLevel);\n\t\t\n\t\t// to demonstrate, let's print the value of firstName here\n\t\tSystem.out.println("First Name again: " + firstName);\n\t}\n}`,
            file_name: 'Student',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `enum Gender {\n\tMALE, FEMALE;\n}\n\npublic class Person {\n\tprivate String firstName;\n\tprivate String middleName;\n\tprivate String lastName;\n\tprivate Gender gender;\n\tprivate int age;\n\tprivate double height; // cm\n\tprivate double weight; // kg\n\n\tPerson() {\n\t\tSystem.out.println("Inside constructor of Person.");\n\t\tfirstName = "Ambongan";\n\t\tmiddleName = "Adlawon";\n\t\tlastName = "Gatus";\n\t\tgender = Gender.MALE;\n\t\tage = 0;\n\t\theight = 50;\n\t\tweight = 6;\n\t}\n\n\tPerson(\n\t\tString firstName, \n\t\tString middleName, \n\t\tString lastName, \n\t\tGender gender, \n\t\tint age, \n\t\tdouble height, \n\t\tdouble weight\n\t) {\n\t\tthis.firstName = firstName;\n\t\tthis.middleName = middleName;\n\t\tthis.lastName = lastName;\n\t\tthis.gender = gender;\n\t\tthis.age = age;\n\t\tthis.height = height;\n\t\tthis.weight = weight;\n\t}\n\t\n\tvoid display() {\n\t\tSystem.out.println("First Name: " + firstName);\n\t\tSystem.out.println("Middle Name: " + middleName);\n\t\tSystem.out.println("Last Name: " + lastName);\n\t\tSystem.out.println("Gender: " + gender);\n\t\tSystem.out.println("Age: " + age);\n\t\tSystem.out.println("Height: " + height);\n\t\tSystem.out.println("Weight: " + weight);\n\t}\n\t\n\tpublic String getFirstName() {\n\t\treturn firstName;\n\t}\n\n\tpublic String getMiddleName() {\n\t\treturn middleName;\n\t}\n\n\tpublic String getLastName() {\n\t\treturn lastName;\n\t}\n\n\tpublic Gender getGender() {\n\t\treturn gender;\n\t}\n\n\tpublic int getAge() {\n\t\treturn age;\n\t}\n\n\tpublic double getHeight() {\n\t\treturn height;\n\t}\n\n\tpublic double getWeight() {\n\t\treturn weight;\n\t}\n}`,
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
        In the display method, first name is printed again. And guess what?
        Compilation error! <code>firstName</code> has private access in Person.
        Does this mean that Student was not able to inherit{' '}
        <code>firstName</code> because it is private? No. <code>firstName</code>{' '}
        was still inherited but Student cannot directly access it, since it is
        private in Person.
        <br />
        <br />
        To prove that there is inheritance here, instead of accessing firstName
        directly, replace it with its corresponding getter method,{' '}
        <strong>getFirstName()</strong>. And voila! It now compiles!
        <br />
        <br />
        When the member data are declared private in a super class, it might be
        cumbersome to always use the corresponding getter and setter methods in
        the subclass. It is also not helpful to simply set the member data as
        public or package.
        <br />
        <br />
        In Java, there is a fourth access modifier. It is called{' '}
        <code>protected</code>. Data members and methods defined to be protected
        can only be accessed within the class, the inheritance hierarchy, and
        within the package. Like a real-world inheritance, it has to stay in the
        family!
        <br />
        <br />
        Check the code below. Study it, compile it, then run it!
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `public class Student extends Person {\n\tString program;\n\tString studentNumber;\n\tint yearLevel;\n\n\tStudent() {\n\t\tprogram = "BS Computer Science";\n\t\tstudentNumber = "2020-10001";\n\t\tyearLevel = 1;\n\t}\n\t\n\tStudent(\n\t\tString firstName, \n\t\tString middleName, \n\t\tString lastName, \n\t\tGender gender, \n\t\tint age, \n\t\tdouble height, \n\t\tdouble weight,\n\t\tString program, \n\t\tString studentNumber, \n\t\tint yearLevel\n\t) {\n\t\tsuper(firstName, middleName, lastName, gender, age, height, weight);\n\t\tthis.program = program;\n\t\tthis.studentNumber = studentNumber;\n\t\tthis.yearLevel = yearLevel;\n\t}\n\t\n\tvoid display(){\n\t\tsuper.display();\n\t\tSystem.out.println("Program: " + program);\n\t\tSystem.out.println("Student Number: " + studentNumber);\n\t\tSystem.out.println("Year Level: " + yearLevel);\n\t\t\n\t\t// to demonstrate, let's print the value of firstName here\n\t\tSystem.out.println("First Name again: " + firstName);\n\t}\n}`,
            file_name: 'Student',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `enum Gender {\n\tMALE, FEMALE;\n}\n\npublic class Person {\n\tprotected String firstName;\n\tprotected String middleName;\n\tprotected String lastName;\n\tprotected Gender gender;\n\tprotected int age;\n\tprotected double height; // cm\n\tprotected double weight; // kg\n\n\tPerson() {\n\t\tSystem.out.println("Inside constructor of Person.");\n\t\tfirstName = "Ambongan";\n\t\tmiddleName = "Adlawon";\n\t\tlastName = "Gatus";\n\t\tgender = Gender.MALE;\n\t\tage = 0;\n\t\theight = 50;\n\t\tweight = 6;\n\t}\n\n\tPerson(\n\t\tString firstName, \n\t\tString middleName, \n\t\tString lastName, \n\t\tGender gender, \n\t\tint age, \n\t\tdouble height, \n\t\tdouble weight\n\t) {\n\t\tthis.firstName = firstName;\n\t\tthis.middleName = middleName;\n\t\tthis.lastName = lastName;\n\t\tthis.gender = gender;\n\t\tthis.age = age;\n\t\tthis.height = height;\n\t\tthis.weight = weight;\n\t}\n\t\n\tvoid display() {\n\t\tSystem.out.println("First Name: " + firstName);\n\t\tSystem.out.println("Middle Name: " + middleName);\n\t\tSystem.out.println("Last Name: " + lastName);\n\t\tSystem.out.println("Gender: " + gender);\n\t\tSystem.out.println("Age: " + age);\n\t\tSystem.out.println("Height: " + height);\n\t\tSystem.out.println("Weight: " + weight);\n\t}\n\t\n\tpublic String getFirstName() {\n\t\treturn firstName;\n\t}\n\n\tpublic String getMiddleName() {\n\t\treturn middleName;\n\t}\n\n\tpublic String getLastName() {\n\t\treturn lastName;\n\t}\n\n\tpublic Gender getGender() {\n\t\treturn gender;\n\t}\n\n\tpublic int getAge() {\n\t\treturn age;\n\t}\n\n\tpublic double getHeight() {\n\t\treturn height;\n\t}\n\n\tpublic double getWeight() {\n\t\treturn weight;\n\t}\n}`,
            file_name: 'Person',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `class Main {\n\tpublic static void main(String args[]) {\n\t\tStudent s = new Student(\n\t\t\t"Alimyon", \n\t\t\t"Cabahug", \n\t\t\t"Calipayan", \n\t\t\tGender.FEMALE,\n\t\t\t19,\n\t\t\t130,\n\t\t\t60, \n\t\t\t"BS Biology", \n\t\t\t"2020-10002",\n\t\t\t1\n\t\t);\n\t\t\n\t\ts.display();\n\t\t\n\t\tSystem.out.println("Last name of student in main: " + s.lastName);\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
    </Section>
  </TopicContainer>
);

export default Topic3;
