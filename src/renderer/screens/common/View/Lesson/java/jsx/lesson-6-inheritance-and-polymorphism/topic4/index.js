import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Compiler } from 'components/elements';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic4 = () => (
  <TopicContainer
    image={IntroImage}
    number={4}
    title="Polymorphism"
    titleJsx={
      <>
        <Text>
          We now know that a Student is a Person. But a Person is not
          necessarily always a Student. Check out the code below:
        </Text>
        <Compiler
          initialSourceCodes={[
            {
              code: `import inheritance.Student;\nimport inheritance.Person;\nimport inheritance.Gender;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\t\tStudent s = new Student(\n\t\t\t"Alimyon", \n\t\t\t"Cabahug", \n\t\t\t"Calipayan", \n\t\t\tGender.FEMALE,\n\t\t\t19,\n\t\t\t130,\n\t\t\t60,\n\t\t\t"BS Biology",\n\t\t\t"2020-10002",\n\t\t\t2\n\t\t);\n\t\t\n\t\tPerson p = new Student(\n\t\t\t"Ambongan", \n\t\t\t"Cabahug", \n\t\t\t"Calipayan", \n\t\t\tGender.MALE,\n\t\t\t18,\n\t\t\t140,\n\t\t\t68,\n\t\t\t"BS PolSci",\n\t\t\t"2020-10003",\n\t\t\t1\n\t\t);\n\t\t\n\t\ts.display();\n\t\tp.display();\n\t}\n}`,
              file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
              file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
            },
            {
              code: `package inheritance;\n\npublic class Student extends Person {\n\tString program;\n\tString studentNumber;\n\tint yearLevel;\n\n\tpublic Student() {\n\t\tprogram = "BS Computer Science";\n\t\tstudentNumber = "2020-10001";\n\t\tyearLevel = 1;\n\t}\n\t\n\tpublic Student(\n\t\tString firstName, \n\t\tString middleName, \n\t\tString lastName, \n\t\tGender gender, \n\t\tint age, \n\t\tdouble height, \n\t\tdouble weight,\n\t\tString program, \n\t\tString studentNumber, \n\t\tint yearLevel\n\t) {\n\t\tsuper(firstName, middleName, lastName, gender, age, height, weight);\n\t\tthis.program = program;\n\t\tthis.studentNumber = studentNumber;\n\t\tthis.yearLevel = yearLevel;\n\t}\n\t\n\tpublic void display(){\n\t\tsuper.display();\n\t\tSystem.out.println("Program: " + program);\n\t\tSystem.out.println("Student Number: " + studentNumber);\n\t\tSystem.out.println("Year Level: " + yearLevel);\n\t\t\n\t\t// to demonstrate, let's print the value of firstName here\n\t\tSystem.out.println("First Name again: " + firstName);\n\t}\n}`,
              file_name: 'Student',
              file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
            },
            {
              code: `package inheritance;\n\npublic class Person {\n\tprotected String firstName;\n\tprotected String middleName;\n\tprotected String lastName;\n\tprotected Gender gender;\n\tprotected int age;\n\tprotected double height; // cm\n\tprotected double weight; // kg\n\n\tpublic Person() {\n\t\tSystem.out.println("Inside constructor of Person.");\n\t\tfirstName = "Ambongan";\n\t\tmiddleName = "Adlawon";\n\t\tlastName = "Gatus";\n\t\tgender = Gender.MALE;\n\t\tage = 0;\n\t\theight = 50;\n\t\tweight = 6;\n\t}\n\n\tpublic Person(\n\t\tString firstName, \n\t\tString middleName, \n\t\tString lastName, \n\t\tGender gender, \n\t\tint age, \n\t\tdouble height, \n\t\tdouble weight\n\t) {\n\t\tthis.firstName = firstName;\n\t\tthis.middleName = middleName;\n\t\tthis.lastName = lastName;\n\t\tthis.gender = gender;\n\t\tthis.age = age;\n\t\tthis.height = height;\n\t\tthis.weight = weight;\n\t}\n\t\n\tpublic void display() {\n\t\tSystem.out.println("First Name: " + firstName);\n\t\tSystem.out.println("Middle Name: " + middleName);\n\t\tSystem.out.println("Last Name: " + lastName);\n\t\tSystem.out.println("Gender: " + gender);\n\t\tSystem.out.println("Age: " + age);\n\t\tSystem.out.println("Height: " + height);\n\t\tSystem.out.println("Weight: " + weight);\n\t}\n\t\n\tpublic String getFirstName() {\n\t\treturn firstName;\n\t}\n\n\tpublic String getMiddleName() {\n\t\treturn middleName;\n\t}\n\n\tpublic String getLastName() {\n\t\treturn lastName;\n\t}\n\n\tpublic Gender getGender() {\n\t\treturn gender;\n\t}\n\n\tpublic int getAge() {\n\t\treturn age;\n\t}\n\n\tpublic double getHeight() {\n\t\treturn height;\n\t}\n\n\tpublic double getWeight() {\n\t\treturn weight;\n\t}\n}`,
              file_name: 'Person',
              file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
            },
            {
              code: `package inheritance;\n\npublic enum Gender {\n\tMALE, FEMALE;\n}`,
              file_name: 'Gender',
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
        Based on the code above, we have two references, <code>s</code> and{' '}
        <code>p</code>. <code>s</code> is a reference to a Student object, while{' '}
        <code>p</code> is a reference to a Person object. What is conspicuous
        here is that <code>p</code> is{' '}
        <strong>created via a constructor of Student</strong>. Why is this
        possible? Because Student is a Person. Imagine if another class has
        inherited from Person, say a class called Employee. Now both Student and
        Employee are Persons. We can then create instances of Person via the
        constructor of Employee. See, <strong>Person now has many forms</strong>{' '}
        (namely, Student, Employee, and Person itself). This ability of an
        object to take on many forms is called <strong>polymorphism</strong>.
        This is one of the major attributes that make programming languages
        object oriented.
        <br />
        <br />
        We are not quite done with sample code above just yet. There is no issue
        about invoking display of <code>s</code>. What is interesting here is
        that the <code>display()</code> invoked through <code>p</code>, did not
        only display information or fields of a Person object but fields of the
        Student as well. Let’s attack this on two fronts - compile-time and
        run-time.
        <br />
        <br />
        During compile-time, invoking <code>p.display()</code> did not produce
        an error. For the simple reason that Person has a display method.
        Person’s display method, though, prints the <code>name</code>,{' '}
        <code>gender</code>, <code>age</code>, <code>weight</code>, and{' '}
        <code>height</code> only but not the fields or data of a Student object.
        <br />
        <br />
        But during run-time, notice that what was invoked was the{' '}
        <code>display()</code> of the child class Student. How do we know this?
        Simply because there is no way for the Person <code>display()</code> to
        print information about the Student fields. In other words, although{' '}
        <code>p</code> is a Person reference, it is the overridden{' '}
        <code>display()</code> that was executed during run-time. This is what
        is called <strong>virtual method invocation</strong> which will be
        discussed in Abstraction, our next lesson. And by then, polymorphism
        will come full circle.
        <br />
        <br />
        At this point, it is worth mentioning that you have encountered some
        form of polymorphism early on. When a child class overrides a method of
        a parent class, that is one form of polymorphism.
        <br />
        <br />
        Take the display method. It has 2 forms: one for Person, and another for
        Student. If there was an Employee class inheriting from Person, it, too,
        will have its own version of display.
        <br />
        <br />
        Finally, notice the constructors that you have encountered so far. They
        come in many versions. There's the default, and the overloaded versions.
        This, too, is a form of polymorphism. There is more than one way (many
        forms) of creating an instance of a class. Apart from the constructors,
        the methods may also be overloaded. Methods can have the same name (like
        all the versions of a constructor) as long as they have different
        argument lists (exactly the same as in the different versions of the
        constructor - they differ in the argument list).
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic4;
