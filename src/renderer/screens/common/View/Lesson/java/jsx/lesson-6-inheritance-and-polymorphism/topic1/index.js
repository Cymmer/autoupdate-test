import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic1 = () => (
  <TopicContainer
    image={IntroImage}
    number={1}
    title="Composition and Inheritance"
    titleJsx={
      <Text>
        Are you ready to morph into my forms, inheriting the attributes of gods?
        <br />
        <br />
        In most programming languages, even when the language is not OOP, code
        reuse is an important implementation. It allows for new pieces of code
        or software to reuse existing code. As they say, why reinvent the wheel?
      </Text>
    }
  >
    <Section>
      <Text>
        Imagine we are to create a class Movie. A movie would have a director.
        There are two possible implementations we could do.
        <br />
        <br />
        Add all the attributes a director would have in the class Movie, like
        its first name, last name, gender, etc. like this:
        <br />
        <br />
        <Code language={programmingLanguages.JAVA}>
          {`class Movie {\n\tString name; // name of the movie\n\tint duration; // duration of the movie\n\t\n\tString directorFirstName; // first name of the director\n\tString directorLastName; // last name of the director\n\tGender directorGender; // gender of the director\n\t// add all other attributes of the director here\n}`}
        </Code>
        <br />
        As you can see, the implementation above is a bit clattered because the
        class Movie <strong>should only contain</strong> attributes that it
        should have. The attributes of the director should belong to its own
        class. And since we have previously implemented the Person class, why
        don't we use that here:
        <br />
        <br />
        <Code language={programmingLanguages.JAVA}>
          {`class Movie {\n\tString name; // name of the movie\n\tint duration; // duration of the movie\n\t\n\tPerson director;\n}`}
        </Code>
        <br />
        Pretty neat isn't it!
      </Text>
    </Section>
    <Section>
      <Text>
        What you have just seen is a form of code reuse. Instead of including a
        first name, last name, gender, and all the other attributes of a Person
        in the class Movie, we use the Person class instead. This is called{' '}
        <strong>aggregation</strong>. And this is also referred to as a{' '}
        <strong>has-a relationship</strong>. The Movie object{' '}
        <strong>has a</strong> Person object. There!
        <br />
        <br />
        There is also another form of code reuse implemented in Java. And that
        is the heart of this labour.
        <br />
        <br />
        We are not going to let go of the Person class just yet.
        <br />
        <br />
        Imagine you were tasked to create classes that would represent people in
        a University. For now, let's limit the people in university to only two
        types: the students and the employees. Students and employees all have
        names, genders, ages, weights, and heights. Check the codes below.
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`class Student {\n\tString firstName;\n\tString middleName;\n\tString lastName;\n\tchar gender;\n\tint age;\n\tint height;\n\tint weight;\n\tString program;\n\tString studentNumber;\n\tint yearLevel;\n}`}
      </Code>
      <Code language={programmingLanguages.JAVA}>
        {`class Employee {\n\tString firstName;\n\tString middleName;\n\tString lastName;\n\tchar gender;\n\tint age;\n\tint height;\n\tint weight;\n\tString employeeNUmber;\n\tString jobDescription;\n\tString department;\n\tdouble salary;\n}`}
      </Code>
      <Text>
        Notice that both class Student and class Employee share the same
        attributes as that of class Person.
        <br />
        <br />
        Based on what we know so far, can we use aggregation and create a Person
        object inside class Student and class Employee?
        <br />
        <br />
        You guessed it! We would not! Because it would not make sense. In
        effect, if we did that, it will mean Student has a Person, and Employee
        has a Person. That couldn't be right!
        <br />
        <br />
        Instead, we say Student <strong>is a</strong> Person, and Employee{' '}
        <strong>is a</strong> Person. And there is a way to do that in Java. And
        that is through <strong>inheritance</strong>.
        <br />
        <br />
        All OOP languages implement a version of inheritance. Essentially,
        inheritance allows for objects to be based on existing objects by{' '}
        <strong>
          acquiring the attributes or properties and the behaviour of these
          existing objects.
        </strong>
        <br />
        <br />
        Based on our discussion above, this is exactly what we need. The
        existing class or basis class for Student and Employee is Person.
        Formally, Person is called the <strong>base class</strong> or the{' '}
        <strong>parent class</strong> and Student and Employee are the{' '}
        <strong>derived classes</strong>, <strong>sub-classes</strong>, or{' '}
        <strong>children classes</strong>. <br />
        <br />
        It is clever! And very much like in the real world where then children
        inherit from their parents some attributes based on their genes, and
        certain characteristics or behaviors for some. It goes without saying
        that the child class or subclass has attributes unique to it and
        different from the parent class.
        <br />
        <br />
        This is the template of inheriting from a class in Java:
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`class <ChildClassName> extends <ParentClassName>`}
      </Code>
      <Text>
        Let's do this with Student. The child class is Student and the parent
        class is Person. See the code below:
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`public class Student extends Person {\n\tString program;\n\tString studentNumber;\n\tint yearLevel;\n}`}
      </Code>
      <Text>
        The keyword for inheritance in Java is <code>extends</code>. This means
        that Student inherits from Person. And a notable change in the class
        definition apart from the <code>extends</code> is that the{' '}
        <code>name</code>,<code>gender</code>, <code>age</code>,{' '}
        <code>weight</code>, and <code>height</code> were no longer defined in
        class Student.
        <br />
        <br />
        Because Student inherits from Person, this means that Student is a
        Person and therefore has the <code>name</code>, <code>gender</code>,{' '}
        <code>age</code>, <code>weight</code>, and <code>height</code> as well.
        Why? Because again, Student has inherited these attributes from Person.
        <br />
        <br />
        Check the code below. Compile it. The revised Person class is included
        for reference. <br />
        <br />
        When a naming conflict happens between the arguments in methods or
        overloaded constructors, there is an operator called <code>
          this
        </code>. <code>this</code> is a reference to the object. Check the use
        of <code>this</code> in the overloaded constructor of Person below.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `public class Student extends Person {\n\tString program;\n\tString studentNumber;\n\tint yearLevel;\n}`,
            file_name: 'Student',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `enum Gender {\n\tMALE, FEMALE;\n}\n\npublic class Person {\n\tString firstName;\n\tString middleName;\n\tString lastName;\n\tGender gender;\n\tint age;\n\tdouble height; // cm\n\tdouble weight; // kg\n\n\tPerson() {\n\t\tfirstName = "Ambongan";\n\t\tmiddleName = "Adlawon";\n\t\tlastName = "Gatus";\n\t\tgender = Gender.MALE;\n\t\tage = 0;\n\t\theight = 50;\n\t\tweight = 6;\n\t}\n\n\tPerson(\n\t\tString firstName, \n\t\tString middleName, \n\t\tString lastName, \n\t\tGender gender, \n\t\tint age, \n\t\tdouble height, \n\t\tdouble weight\n\t) {\n\t\tthis.firstName = firstName;\n\t\tthis.middleName = middleName;\n\t\tthis.lastName = lastName;\n\t\tthis.gender = gender;\n\t\tthis.age = age;\n\t\tthis.height = height;\n\t\tthis.weight = weight;\n\t}\n}`,
            file_name: 'Person',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `class Main {\n\tpublic static void main(String args[]) {\n\t\tStudent s = new Student();\n\t\ts.firstName = "Alimyon";\n\t\ts.middleName = "Cabahug";\n\t\ts.lastName = "Calipayan";\n\t\ts.gender = Gender.FEMALE;\n\t\ts.age = 19;\n\t\ts.height = 130;\n\t\ts.weight = 60;\n\t\ts.program = "BS Computer Science";\n\t\ts.studentNumber = "2020-10001";\n\t\ts.yearLevel = 1;\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <br />
      <Text>
        Notice that the compiler did not complain anything, especially on the
        <code>name</code>, <code>gender</code>, <code>age</code>,{' '}
        <code>height</code>, and <code>weight</code>. If Student did not inherit
        this, the compiler should complain that these are unknown identifiers
        and that they do not exist and are not members of Student. No
        complaints, and therefore the assignment of the different member data
        not explicitly defined in Student, but inherited from Person, is
        successful!
        <br />
        <br />
        Member data or attributes are not the only things that are inherited.
        Behavior is inherited as well. That means{' '}
        <strong>methods are inherited as well!</strong> Let's add a display
        method in Person that simply displays all its attributes.
      </Text>
      <br />
      <br />
      <Compiler
        initialSourceCodes={[
          {
            code: `public class Student extends Person {\n\tString program;\n\tString studentNumber;\n\tint yearLevel;\n\n\tStudent() {\n\t\tprogram = "BS Computer Science";\n\t\tstudentNumber = "2020-10001";\n\t\tyearLevel = 1;\n\t}\n}`,
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
        Notice that there is no definition of display in Student. But calling it
        is a success. And what did you observe about the output? What was
        displayed?
        <br />
        <br />
        There should be two sets of things you should notice. The first being
        the display method as mentioned above. The second is that only{' '}
        <code>program</code>,<code>studentNumber</code>, and{' '}
        <code>yearLevel</code> were explicitly assigned in the constructor of
        Student. And the values for the <code>firstName</code>,{' '}
        <code>middleName</code>, <code>lastName</code>, <code>gender</code>,
        <code>age</code>, <code>height</code>, and <code>weight</code> are the
        default values set in the constructor of Person.
        <br />
        <br />
        What has happened here? When an instance of a child class is created,
        its constructor is invoked. But because it inherits from a parent class,{' '}
        <strong>
          the parent's constructor is invoked before any of the statements in
          the child's constructor is executed.
        </strong>
        <br />
        <br />
        In the Student sample, remember that Student is a Person. So its
        "Person-ness" has to be constructed first, hence Person's constructor is
        invoked prior to executing any of the statements in Student's
        constructor.
        <br />
        <br />
        To confirm this, let's add a print statement in both the default
        constructor of Person and Student as shown below:
      </Text>
      <br />
      <br />
      <Compiler
        initialSourceCodes={[
          {
            code: `public class Student extends Person {\n\tString program;\n\tString studentNumber;\n\tint yearLevel;\n\n\tStudent() {\n\t\tSystem.out.println("Inside constructor of Student.");\n\t\tprogram = "BS Computer Science";\n\t\tstudentNumber = "2020-10001";\n\t\tyearLevel = 1;\n\t}\n}`,
            file_name: 'Student',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `enum Gender {\n\tMALE, FEMALE;\n}\n\npublic class Person {\n\tString firstName;\n\tString middleName;\n\tString lastName;\n\tGender gender;\n\tint age;\n\tdouble height; // cm\n\tdouble weight; // kg\n\n\tPerson() {\n\t\tSystem.out.println("Inside constructor of Person.");\n\t\tfirstName = "Ambongan";\n\t\tmiddleName = "Adlawon";\n\t\tlastName = "Gatus";\n\t\tgender = Gender.MALE;\n\t\tage = 0;\n\t\theight = 50;\n\t\tweight = 6;\n\t}\n\n\tPerson(\n\t\tString firstName, \n\t\tString middleName, \n\t\tString lastName, \n\t\tGender gender, \n\t\tint age, \n\t\tdouble height, \n\t\tdouble weight\n\t) {\n\t\tthis.firstName = firstName;\n\t\tthis.middleName = middleName;\n\t\tthis.lastName = lastName;\n\t\tthis.gender = gender;\n\t\tthis.age = age;\n\t\tthis.height = height;\n\t\tthis.weight = weight;\n\t}\n\t\n\tvoid display() {\n\t\tSystem.out.println("First Name: " + firstName);\n\t\tSystem.out.println("Middle Name: " + middleName);\n\t\tSystem.out.println("Last Name: " + lastName);\n\t\tSystem.out.println("Gender: " + gender);\n\t\tSystem.out.println("Age: " + age);\n\t\tSystem.out.println("Height: " + height);\n\t\tSystem.out.println("Weight: " + weight);\n\t}\n}`,
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
        After creating an instance of Student, the first line of output seen is
        the line "Inside the constructor of Person." confirming that, indeed,
        the control of the program was given to the constructor of Person first,
        before relinquishing it back to the constructor of Student and
        proceeding to printing "Inside the constructor of Student.". And finally
        finishing with assigning the default values for <code>program</code>,{' '}
        <code>studentNumber</code>, and <code>yearLevel</code>.
        <br />
        <br />
        And when the display is invoked in the main method, the default values
        set in the constructor of Person are printed.
        <br />
        <br />
        You might have also noticed that the <code>program</code>,{' '}
        <code>studentNumber</code>, and
        <code>yearLevel</code> were not printed at all. This is as it should be.
        Because one look at the display method, indeed, it prints all the member
        data of Person. And there is no way for Person to know in advance which
        classes will inherit from it.
        <br />
        <br />
        This means that Student needs its own display method so{' '}
        <code>program</code>, <code>studentNumber</code>, and{' '}
        <code>yearLevel</code> may be displayed as well.
        <br />
        <br />
        For this, we need to "override" the display method.
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic1;
