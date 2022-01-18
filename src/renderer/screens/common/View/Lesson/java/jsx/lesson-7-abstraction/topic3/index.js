import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic3 = () => (
  <TopicContainer
    image={IntroImage}
    number={3}
    title="Interfaces"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Let's say for instance that at the onset there is no knowledge as to
        what attributes a class should have. But there is knowledge about how it
        should operate (the operations may be different for every child class).
        Should an abstract class be constructed for this with methods only but
        no attributes at all? And since the behavior of the operations differ
        from one would-be child class to another, should all the methods be
        declared abstract?
      </Text>
    }
  >
    <Section>
      <Text>
        To put this into perspective, let's take a look at a vehicle.
        Essentially, a vehicle is a machine that brings people or objects from
        one place to another. They are transported through a vehicle , so to
        speak.
        <br />
        <br />
        Let's do the exercise we did with Appliance when Abstraction was
        introduced. Think of vehicle. Again, no object comes to mind. Because a
        vehicle can be any that travels on land, water, or air! Should the
        vehicle have wheels? We are not sure because boats certainly do not have
        wheels. Should the vehicle have propellers like the ones found in
        choppers? A bicycle certainly does not!
        <br />
        <br />
        What we do know is that a vehicle, any vehicle for that matter, moves!
        And that before it is able to move it has to have energy that will make
        the movement possible. What fuels this vehicle to move from one place to
        another? The source of this energy may be oil, electricity or battery,
        pedalling (bicycles), etc.
        <br />
        <br />
        So far, we have identified two operations for our vehicle, i.e. move,
        and fuel - the act of "putting in" the source of energy.
        <br />
        <br />
        Should an abstract class called <code>Vehicle</code> be implemented and
        set these two operations (methods) to abstract as shown below?
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`public abstract class Vehicle {\n\tpublic abstract void move(int speed); // moves at a certain speed\n\tpublic abstract void fuel(int amount); // vehicle gets fuel by some unit of measurement\n}`}
      </Code>
      <Text>
        And have say a class <code>Car</code> inherit from <code>Vehicle</code>{' '}
        as show below?
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`public class Car extends Vehicle {\n\tpublic void move(int speed) { // say km/hour\n\t\tSystem.out.println("Car is moving at " + speed + " km/hr.");\n\t}\n\t\n\tpublic void fuel(int amount) { // say liters\n\t\tSystem.out.println("Car is being pumped with " + amount + " liters of gas.");\n\t}\n}`}
      </Code>
      <Text>
        As you have noticed, programs written in any OOP language are simply the
        interaction of objects and are modeled by sending messages to each
        other. Objects send messages to each other via their public methods. It
        is these public methods that allow for the interaction of objects as
        they provide an "interface" as to how the interaction or communication
        between objects can be achieved!
        <br />
        <br />
        There is a Java construct where grouping of related methods without
        having to define is allowed. And guess what, this kind of grouping does
        not allow instance variables - the very attributes we need not define
        the Vehicle problem we have.
        <br />
        <br />
        This is called an <strong>interface</strong> (it is also the keyword
        used). An interface is somewhat like a class. But as mentioned above,
        cannot contain instance variables just method signatures. This means
        that there is no need to define the methods very much like abstract
        methods.
        <br />
        <br />
        If we were to implement <code>Vehicle</code> as an interface instead of
        an abstract class, we define it as shown below.
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`public interface Vehicle {\n\tpublic void move(int speed);\n\tpublic void fuel(int amount);\n\tpublic void brake(int speed); // lets add a break that reduces speed of the movement by some kilometer measurement\n}`}
      </Code>
      <Text>
        Interfaces in Java are implicitly abstract. What this means is that
        instances of interfaces cannot be created.
        <br />
        <br />
        Labour sidequest: Compile the code below.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `public class Main {\n\tpublic static void main(String args[]) {\n\t\tVehicle v = new Vehicle();\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public interface Vehicle {\n\tpublic void move(int speed);\n\tpublic void fuel(int amount);\n\tpublic void brake(int speed); // lets add a break that reduces speed of the movement by some kilometer measurement\n}`,
            file_name: 'Vehicle',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <Text>
        An error should be reported saying <code>Vehicle</code> is abstract and
        therefore an instance of it cannot be created. Take note that we did not
        define to <code>Vehicle</code> to be abstract. Again,{' '}
        <strong>interfaces are implicitly abstract.</strong>
        <br />
        <br />
        And as aside, unlike abstract classes, interfaces cannot have
        constructors. Simply, interfaces are not classes!
        <br />
        <br />
        <strong>Labour sidequest:</strong> Compile the redefinition of{' '}
        <code>Vehicle</code> as shown below.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `public interface Vehicle {\n\tpublic Vehicle() {\n\t\t\n\t}\n\t\n\tpublic void move(int speed);\n\tpublic void fuel(int amount);\n\tpublic void brake(int speed); // lets add a break that reduces speed of the movement by some kilometer measurement\n}`,
            file_name: 'Vehicle',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public class Main {\n\tpublic static void main(String args[]) {\n\t\tVehicle v = new Vehicle();\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <Text>
        An error should be reported. Constructors should have bodies
        (implementations) but{' '}
        <strong>
          we are not allowed to define methods with bodies in interfaces!
        </strong>
        <br />
        <br />
        The methods of an interface are inherently abstract as well. What this
        means is that some other class should implement these methods when it
        "inherits" from the interface, the way subclasses are forced to define
        the abstract methods of an abstract class.
        <br />
        <br />
        For interfaces though, instead of using "extends", the keyword used is
        "implements". Everytime an interface is defined it is as if a contract
        is drafted. The contract forces classes that implement interfaces to
        "promise" to implement all the methods!
        <br />
        <br />
        <strong>Labour sidequest:</strong> Let's try this first. We define a
        class <code>Car</code> that implements <code>Vehicle</code>. But only
        move gets implemented. Compile this together with the interface{' '}
        <code>Vehicle</code>.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `public class Car implements Vehicle {\n\tpublic void move(int speed) {\n\t\tSystem.out.println("Car is moving at " + speed + " km/hr.");\n\t}\n}`,
            file_name: 'Car',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public interface Vehicle {\n\tpublic void move(int speed);\n\tpublic void fuel(int amount);\n\tpublic void brake(int speed); // lets add a break that reduces speed of the movement by some kilometer measurement\n}`,
            file_name: 'Vehicle',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public class Main {\n\tpublic static void main(String args[]) {\n\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <Text>
        An error should be reported complaining about <code>Car</code> not being
        an abstract class and that it did not override all the abstract methods.
        <br />
        <br />
        Although methods in the interface were not explicitly defined as
        abstract, by default, they are inherently abstract. This forces a class
        that implements an interface to define all the methods.
        <br />
        <br />
        Let's redo class <code>Car</code>.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `public class Car implements Vehicle {\n\tpublic Car() {\n\t\t\n\t}\n\t\n\tpublic void move(int speed) {\n\t\tSystem.out.println("Car is moving at " + speed + " km/hr.");\n\t}\n\t\n\tpublic void fuel(int amount) { // say liters\n\t\tSystem.out.println("Car is being pumped with " + amount + " liters of gas.");\n\t}\n\t\n\tpublic void brake(int speed) {\n\t\tSystem.out.println("Car's speed is being reduced by " + speed + " km/hr.");\n\t}\n}`,
            file_name: 'Car',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public interface Vehicle {\n\tpublic void move(int speed);\n\tpublic void fuel(int amount);\n\tpublic void brake(int speed); // lets add a break that reduces speed of the movement by some kilometer measurement\n}`,
            file_name: 'Vehicle',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public class Main {\n\tpublic static void main(String args[]) {\n\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <Text>
        Compile this new implementation of class <code>Car</code>. This should
        be free of the previous errors.
        <br />
        <br />
        Just an important side note. Of course, <code>Car</code> can have its
        own attributes defined because it is a class and not an interface.
        <br />
        <br />
        Interfaces are allowed to inherit from other interfaces as shown in the
        sample below.
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`public interface WaterVehicle extends Vehicle {\n\tpublic void dock();\n}`}
      </Code>
      <Text>
        Water vehicles normally dock at a port. Air vehicles land, and land
        vehicles park.
        <br />
        <br />
        Labour sidequest: Compile the class <code>Speedboat</code> as defined
        below.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `public class Speedboat implements WaterVehicle {\n\tpublic void dock() {\n\t\tSystem.out.println("Speedboat is docking.");\n\t}\n}`,
            file_name: 'Speedboat',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public interface WaterVehicle extends Vehicle {\n\tpublic void dock();\n}`,
            file_name: 'WaterVehicle',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public interface Vehicle {\n\tpublic void move(int speed);\n\tpublic void fuel(int amount);\n\tpublic void brake(int speed); // lets add a break that reduces speed of the movement by some kilometer measurement\n}`,
            file_name: 'Vehicle',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public class Main {\n\tpublic static void main(String args[]) {\n\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <Text>
        <code>Speedboat</code> is a <code>WaterVehicle</code>. But{' '}
        <code>WaterVehicle</code> is a <code>Vehicle</code>, and therefore{' '}
        <code>Speedboat</code> is a <code>Vehicle</code> as well. This means
        that <code>Speedboat</code> should also implement move, brake, and fuel.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `public class Speedboat implements WaterVehicle {\n\tpublic Speedboat() {\n\t\t\n\t}\n\n\tpublic void dock() {\n\t\tSystem.out.println("Speedboat is docking.");\n\t}\n\t\n\tpublic void move(int speed) {\n\t\tSystem.out.println("Speedboat is moving at " + speed + " km/hr.");\n\t}\n\t\n\tpublic void fuel(int amount) { // say liters\n\t\tSystem.out.println("Speedboat is being pumped with " + amount + " liters of gas.");\n\t}\n\t\n\tpublic void brake(int speed) {\n\t\tSystem.out.println("Speedboat's speed is being reduced by " + speed + " km/hr.");\n\t}\n}`,
            file_name: 'Speedboat',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public interface WaterVehicle extends Vehicle {\n\tpublic void dock();\n}`,
            file_name: 'WaterVehicle',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public interface Vehicle {\n\tpublic void move(int speed);\n\tpublic void fuel(int amount);\n\tpublic void brake(int speed); // lets add a break that reduces speed of the movement by some kilometer measurement\n}`,
            file_name: 'Vehicle',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public class Main {\n\tpublic static void main(String args[]) {\n\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <Text>
        Classes can implement multiple interfaces. Let's say we have another
        interface called <code>AirVehicle</code>.
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`public interface AirVehicle extends Vehicle {\n\tpublic void land();\n}`}
      </Code>
      <Text>
        Let's have a look at a seaplane. Seaplanes have the capability of
        landing on water and dock at a port. And so we can say that, based on
        our implementations of the different kinds of vehicles we have and how
        they behave so far, seaplanes are both a <code>WaterVehicle</code> and
        an <code>AirVehicle</code>.
        <br />
        <br />
        Check the sample below:
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`public class Seaplane implements WaterVehicle, AirVehicle {\n\tpublic Seaplane() {\n\n\t}\n\n\tpublic void dock() {\n\t\tSystem.out.println("Speedboat is docking.");\n\t}\n\n\tpublic void land() {\n\t\tSystem.out.println("Air vehicle is landing.");\n\t}\n\n\tpublic void move(int speed) {\n\t\tSystem.out.println("Speedboat is moving at " + speed + " km/hr.");\n\t}\n\n\tpublic void fuel(int amount) { // say liters\n\t\tSystem.out.println("Speedboat is being pumped with " + amount + " liters of gas.");\n\t}\n\n\tpublic void brake(int speed) {\n\t\tSystem.out.println("Speedboat's speed is being reduced by " + speed + " km/hr.");\n\t}\n}`}
      </Code>
      <Text>
        Defining Seaplane to implement both the <code>WaterVehicle</code> and{' '}
        <code>AirVehicle</code> interfaces requires that Seaplane implement
        dock, land, and all the methods of <code>Vehicle</code>! This is
        multiple inheritance via interfaces!
        <br />
        <br />
        This is in contrast to "extends" where classes are allowed to extend
        from one class only.
        <br />
        <br />
        Since implementing interfaces is a form of inheritance, polymorphism is
        observed as well. Just take a look at <code>Seaplane</code>, it is a{' '}
        <code>Vehicle</code>, a <code>WaterVehicle</code>, and an{' '}
        <code>AirVehicle</code>!
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `public class Main {\n\tpublic static void main(String args[]) {\n\t\tSeaplane sp = new Seaplane();\n\t\tWaterVehicle wv = new Seaplane();\n\t\tAirVehicle av = new Seaplane();\n\t\tVehicle v = new Seaplane();\n\t\t\n\t\tsp.land();\n\t\tsp.dock();\n\t\t\n\t\twv.dock();\n\t\t\n\t\tav.land();\n\t\t\n\t\tv.move(60);\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public interface AirVehicle extends Vehicle {\n\tpublic void land();\n}`,
            file_name: 'AirVehicle',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public interface WaterVehicle extends Vehicle {\n\tpublic void dock();\n}`,
            file_name: 'WaterVehicle',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public interface Vehicle {\n\tpublic void move(int speed);\n\tpublic void fuel(int amount);\n\tpublic void brake(int speed); // lets add a break that reduces speed of the movement by some kilometer measurement\n}`,
            file_name: 'Vehicle',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public class Seaplane implements WaterVehicle, AirVehicle {\n\tpublic Seaplane() {\n\n\t}\n\n\tpublic void dock() {\n\t\tSystem.out.println("Speedboat is docking.");\n\t}\n\n\tpublic void land() {\n\t\tSystem.out.println("Air vehicle is landing.");\n\t}\n\n\tpublic void move(int speed) {\n\t\tSystem.out.println("Speedboat is moving at " + speed + " km/hr.");\n\t}\n\n\tpublic void fuel(int amount) { // say liters\n\t\tSystem.out.println("Speedboat is being pumped with " + amount + " liters of gas.");\n\t}\n\n\tpublic void brake(int speed) {\n\t\tSystem.out.println("Speedboat's speed is being reduced by " + speed + " km/hr.");\n\t}\n}`,
            file_name: 'Seaplane',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <Text>
        This should look familiar. The same thing is done here as with the{' '}
        <code>display()</code> method of <code>Person</code> and{' '}
        <code>Student</code> in the Inheritance and Polymorphism Labour.
        <br />
        <br />
        But try this one below.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `public class Main {\n\tpublic static void main(String args[]) {\n\t\tSeaplane sp = new Seaplane();\n\t\tWaterVehicle wv = new Seaplane();\n\t\tAirVehicle av = new Seaplane();\n\t\tVehicle v = new Seaplane();\n\t\t\n\t\tsp.land();\n\t\tsp.dock();\n\t\t\n\t\twv.dock();\n\t\twv.land();\n\t\t\n\t\tav.land();\n\t\tav.dock();\n\t\t\n\t\tv.move(60);\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public interface AirVehicle extends Vehicle {\n\tpublic void land();\n}`,
            file_name: 'AirVehicle',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public interface WaterVehicle extends Vehicle {\n\tpublic void dock();\n}`,
            file_name: 'WaterVehicle',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public interface Vehicle {\n\tpublic void move(int speed);\n\tpublic void fuel(int amount);\n\tpublic void brake(int speed); // lets add a break that reduces speed of the movement by some kilometer measurement\n}`,
            file_name: 'Vehicle',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public class Seaplane implements WaterVehicle, AirVehicle {\n\tpublic Seaplane() {\n\n\t}\n\n\tpublic void dock() {\n\t\tSystem.out.println("Speedboat is docking.");\n\t}\n\n\tpublic void land() {\n\t\tSystem.out.println("Air vehicle is landing.");\n\t}\n\n\tpublic void move(int speed) {\n\t\tSystem.out.println("Speedboat is moving at " + speed + " km/hr.");\n\t}\n\n\tpublic void fuel(int amount) { // say liters\n\t\tSystem.out.println("Speedboat is being pumped with " + amount + " liters of gas.");\n\t}\n\n\tpublic void brake(int speed) {\n\t\tSystem.out.println("Speedboat's speed is being reduced by " + speed + " km/hr.");\n\t}\n}`,
            file_name: 'Seaplane',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <Text>
        It should be easy to figure this one out. Both <code>wv.land()</code>{' '}
        and <code>av.dock()</code> are not allowed.
        <br />
        <br />
        Finally, classes in Java are allowed to extend from a base class and
        implement from interfaces at the same time.
        <br />
        <br />
        Let's say, for the purpose of discussion, that the class{' '}
        <code>Seaplane</code> did not implement any of the Vehicle interfaces.
        Check the sample below.
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`public class Seaplane {\n\t//...\n}`}
      </Code>
      <Text>
        Flying boats are a type of <code>Seaplane</code>. Flying boats are a{' '}
        <code>WaterVehicle</code> and an <code>AirVehicle</code>. We can then
        define them as shown below.
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`public class FlyingBoat extends Seaplane implements WaterVehicle, AirVehicle {\n\t// does the requirements for inheritance and interfaces\n}`}
      </Code>
      <Text>
        And just like that, polymorphism has come full circle! Any{' '}
        <code>FlyingBoat</code>
        object is a <code>Seaplane</code>, a <code>WaterVehicle</code>, an{' '}
        <code>AirVehicle</code>, and a <code>Vehicle</code>!
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic3;
