import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic2 = () => (
  <TopicContainer
    image={IntroImage}
    number={2}
    title="Abstract Classes"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Abstraction in Java is implemented via Abstract classes and Interfaces.
        <br />
        <br />
        Before implementing classes for a television object or an air
        conditioning unit object (this list can go on and on - theres just too
        many appliance now!), it is best to implement an appliance class first.
      </Text>
    }
  >
    <Section>
      <Code language={programmingLanguages.JAVA}>
        {`public class Appliance {\n\tprivate boolean power;\n\tprivate String brand; // manufacturer\n\tprivate String model; // model of the appliance\n\t\n\tAppliance() {\n\t\tpower = false;\n\t\tbrand = "Samsung";\n\t\tmodel = "SM-01";\n\t}\n\t\n\tAppliance(String brand, String model) {\n\t\tpower = false;\n\t\tthis.brand = brand;\n\t\tthis.model = model;\n\t}\n\t\n\tpublic void power() {\n\t\tif(power)\n\t\t\tpower = false;\n\t\telse\n\t\t\tpower = true;\n\t}\n\t\n\tpublic void work() { // for the task that the appliance has to perform\n\t\tif(power)\n\t\t\tSystem.out.println("Appliance working!");\n\t}\n\t\n\tpublic boolean getPower() {\n\t\treturn power;\n\t}\n\t\n\tpublic String getBrand() {\n\t\treturn brand;\n\t}\n\t\n\tpublic String getModel() {\n\t\treturn model;\n\t}\n}`}
      </Code>
      <Text>
        If we look at the class <code>Appliance</code>, it looks like any class
        that we have seen so far. So far we were able to model an appliance
        object. Notice that since we do not know what this appliance does, we
        simply printed <code>"Appliance Working!"</code> but only when the{' '}
        <code>Appliance</code> is on.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `public class Main{\n\tpublic static void main(String args[]){\n\t\tAppliance app = new Appliance();\n\t\t\n\t\tapp.power();\n\t\tapp.work();\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public class Appliance {\n\tprivate boolean power;\n\tprivate String brand; // manufacturer\n\tprivate String model; // model of the appliance\n\t\n\tAppliance() {\n\t\tpower = false;\n\t\tbrand = "Samsung";\n\t\tmodel = "SM-01";\n\t}\n\t\n\tAppliance(String brand, String model) {\n\t\tpower = false;\n\t\tthis.brand = brand;\n\t\tthis.model = model;\n\t}\n\t\n\tpublic void power() {\n\t\tif(power)\n\t\t\tpower = false;\n\t\telse\n\t\t\tpower = true;\n\t}\n\t\n\tpublic void work() { // for the task that the appliance has to perform\n\t\tif(power)\n\t\t\tSystem.out.println("Appliance working!");\n\t}\n\t\n\tpublic boolean getPower() {\n\t\treturn power;\n\t}\n\t\n\tpublic String getBrand() {\n\t\treturn brand;\n\t}\n\t\n\tpublic String getModel() {\n\t\treturn model;\n\t}\n}`,
            file_name: 'Appliance',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <Text>
        Recall that we never meant for an <code>Appliance</code> to be an actual
        object, the way appliance is in the sample code above.{' '}
        <strong>
          It is supposed to be an "idea" of an object and not an actual object.
        </strong>{' '}
        And if this is the case, there must be a way to prevent the creation of
        an <code>Appliance</code> object!
        <br />
        <br />
        All we have to do to prevent this, and to implement that{' '}
        <code>Appliance</code> is an "idea", is to declare the class{' '}
        <code>Appliance</code> as an <strong>abstract class</strong>. Yes,
        that's the Java keyword for it! Check the updated code below.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `public abstract class Appliance {\n\tprivate boolean power;\n\tprivate String brand; // manufacturer\n\tprivate String model; // model of the appliance\n\t\n\tAppliance(){\n\t\tpower = false;\n\t\tbrand = "Samsung";\n\t\tmodel = "SM-01";\n\t}\n\t\n\tAppliance(String brand, String model) {\n\t\tpower = false;\n\t\tthis.brand = brand;\n\t\tthis.model = model;\n\t}\n\n\tpublic void power() {\n\t\tif(power)\n\t\t\tpower = false;\n\t\telse\n\t\t\tpower = true;\n\t}\n\t\n\tpublic void work() { // for the task that the appliance has to perform\n\t\tif(power)\n\t\t\tSystem.out.println("Appliance working!");\n\t}\n\t\n\tpublic boolean getPower() {\n\t\treturn power;\n\t}\n\t\n\tpublic String getBrand() {\n\t\treturn brand;\n\t}\n\t\n\tpublic String getModel() {\n\t\treturn model;\n\t}\n\t\n\tpublic String toString() {\n\t\treturn new String("Brand: "+ brand + ", Model: " + model + ", Power: " + power);\n\t}\n}`,
            file_name: 'Appliance',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public class Main{\n\tpublic static void main(String args[]){\n\t\tAppliance app = new Appliance();\n\t\t\n\t\tapp.power();\n\t\tapp.work();\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <Text>
        <strong>Labour sidequest:</strong> This time, try to compile the code
        above. There should be an error that says the creation of an{' '}
        <code>Appliance</code> object is not allowed since it is abstract!
        <br />
        <br />
        Notice that the <code>Appliance</code> class has constructors. This
        tells us that even if objects of type <code>Appliance</code> cannot be
        created (again, because it is abstract), it can still have constructors.
        This is so especially when the abstract classes have attributes like the
        class <code>Appliance</code>. Where else can the attributes be
        initialized? You guessed it! In the constructors.
        <br />
        <br />
        So, how can we use the abstract class <code>Appliance</code> now?
        <br />
        <br />
        This time, we can view <code>Appliance</code> as a{' '}
        <strong>base class</strong> for actual appliances! You can now implement
        a class for <code>Television</code> and let it inherit from{' '}
        <code>Appliance</code>! This is why we had to postpone the discussion of
        abstraction after encapsulation. We needed to understand inheritance
        first! ;)
        <br />
        <br />
        But before we go ahead and do this, let's iron out a few kinks. Recall
        the method <code>work()</code>. Since we do not really know how the
        actual <code>Appliance</code> object is going to work, is it possible to
        still have a method <code>work()</code> but without any implementation
        and force the child class to implement this? If a class{' '}
        <code>Television</code> is going to inherit from <code>Appliance</code>,
        can we implement the <code>work()</code> method, specific to its need?
        <br />
        <br />
        The answer is a yes. And its implementation is quite simple. Define{' '}
        <code>work()</code> to be abstract! Yes,{' '}
        <strong>methods can be abstract as well</strong>. This forces child
        classes to implement this method. And as an aside,{' '}
        <strong>
          if there is at least one abstract method in a class, the class has to
          be defined abstract.
        </strong>{' '}
        Any abstract class, though, may or may not have any abstract method.
        <br />
        <br />
        And while at this, the <code>toString()</code> method may be defined as
        abstract as the child classes might have additional information or
        attributes. Although we may leave it as is and have child classes
        override it instead. But let's have it as abstract in this case.
        <br />
        <br />
        By the way, do not forget to set the access modifiers of{' '}
        <code>power</code>, <code>brand</code>, and <code>model</code> to
        protected so the classes that would inherit from <code>Appliance</code>{' '}
        will have direct access to them.
        <br />
        <br />
        Check out the code below:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `public abstract class Appliance {\n\tprotected boolean power;\n\tprotected String brand; // manufacturer\n\tprotected String model; // model of the appliance\n\t\n\tpublic Appliance() {\n\t\tpower = false;\n\t\tbrand = "Samsung";\n\t\tmodel = "SM-01";\n\t}\n\t\n\tpublic Appliance(String brand, String model) {\n\t\tpower = false;\n\t\tthis.brand = brand;\n\t\tthis.model = model;\n\t}\n\t\n\tpublic void power() {\n\t\tif(power)\n\t\t\tpower = false;\n\t\telse\n\t\t\tpower = true;\n\t}\n\t\n\tpublic abstract void work();\n\t\n\tpublic abstract String toString();\n\t\n\tpublic boolean getPower() {\n\t\treturn power;\n\t}\n\t\n\tpublic String getBrand() {\n\t\treturn brand;\n\t}\n\t\n\tpublic String getModel() {\n\t\treturn model;\n\t}\n}`,
            file_name: 'Appliance',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public class Main{\n\tpublic static void main(String args[]){\n\t\tAppliance app = new Appliance();\n\t\t\n\t\tapp.power();\n\t\tapp.work();\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <Text>
        You may have observed that there may be different ways as to how
        different appliance objects are powered on. But for sure, the power
        status should be turned on if it is off, and off when it is on. So we
        leave it as is.
        <br />
        <br />
        <strong>Labour side quest:</strong> Edit the <code>Appliance</code>{' '}
        class and do not define it as abstract. But leave <code>work()</code>{' '}
        and <code>toString()</code> as abstract methods. Compile your code and
        see what happens.
        <br />
        <br />
        On to implementing the class <code>Television</code> as an{' '}
        <code>Appliance</code> . We going to keep a very simple{' '}
        <code>Television</code> object and have the following attributes:
        <ul>
          <li>size in inches</li>
          <li>type (whether smart or not)</li>
          <li>channel</li>
          <li>volume</li>
        </ul>
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `public class Television extends Appliance {\n\tprivate int size;\n\tprivate boolean type; // true if smart tv, false otherwise\n\tprivate int channel;\n\tprivate int volume;\n\t\n\tpublic Television() {\n\t\tsuper();\n\t\tsize = 49;\n\t\ttype = true;\n\t\tchannel = 1;\n\t\tvolume = 0;\n\t}\n\n\tpublic Television(String brand, String model, int size, boolean type) {\n\t\tsuper(brand,model);\n\t\tthis.size = size;\n\t\tthis.type = type;\n\t\tchannel = 1;\n\t\tvolume = 0;\n\t}\n\n\tpublic void channelUp() {\n\t\tif (power) {\n\t\t\tif(channel < 100)\n\t\t\t\tchannel++;\n\t\t}\n\t}\n\n\tpublic void channelDown() {\n\t\tif (power) {\n\t\t\tif(channel > 1)\n\t\t\t\tchannel--;\n\t\t}\n\t}\n\n\tpublic void volumeUp() {\n\t\tif (power) {\n\t\t\tif(volume < 100)\n\t\t\t\tvolume++;\n\t\t}\n\t}\n\n\tpublic void volumeDown() {\n\t\tif (power) {\n\t\t\tif(volume > 0)\n\t\t\t\tvolume--;\n\t\t}\n\t}\n}`,
            file_name: 'Television',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public abstract class Appliance {\n\tprotected boolean power;\n\tprotected String brand; // manufacturer\n\tprotected String model; // model of the appliance\n\t\n\tpublic Appliance() {\n\t\tpower = false;\n\t\tbrand = "Samsung";\n\t\tmodel = "SM-01";\n\t}\n\t\n\tpublic Appliance(String brand, String model) {\n\t\tpower = false;\n\t\tthis.brand = brand;\n\t\tthis.model = model;\n\t}\n\t\n\tpublic void power() {\n\t\tif(power)\n\t\t\tpower = false;\n\t\telse\n\t\t\tpower = true;\n\t}\n\t\n\tpublic abstract void work();\n\t\n\tpublic abstract String toString();\n\t\n\tpublic boolean getPower() {\n\t\treturn power;\n\t}\n\t\n\tpublic String getBrand() {\n\t\treturn brand;\n\t}\n\t\n\tpublic String getModel() {\n\t\treturn model;\n\t}\n}`,
            file_name: 'Appliance',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public class Main{\n\tpublic static void main(String args[]){\n\t\tTelevision television = new Television();\n\t\t\n\t\ttelevision.power();\n\t\ttelevision.work();\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <Text>
        <strong>Labour sidequest:</strong> Try to compile this as is. And see
        what happens.
        <br />
        <br />
        You should expect an error saying that <code>Television</code> is not
        abstract and that it does not override <code>toString()</code> and{' '}
        <code>work()</code>.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `public class Television extends Appliance {\n\tprivate int size;\n\tprivate boolean type; // true if smart tv, false otherwise\n\tprivate int channel;\n\tprivate int volume;\n\t\n\tpublic Television() {\n\t\tsuper();\n\t\tsize = 49;\n\t\ttype = true;\n\t\tchannel = 1;\n\t\tvolume = 0;\n\t}\n\t\n\tpublic Television(String brand, String model, int size, boolean type) {\n\t\tsuper(brand, model);\n\t\tthis.size = size;\n\t\tthis.type = type;\n\t\tchannel = 1;\n\t\tvolume = 0;\n\t}\n\t\n\tpublic void channelUp() {\n\t\tif (power) {\n\t\t\tif(channel < 100)\n\t\t\t\tchannel++;\n\t\t}\n\t}\n\t\n\tpublic void channelDown() {\n\t\tif (power) {\n\t\t\tif(channel > 1)\n\t\t\t\tchannel--;\n\t\t}\n\t}\n\t\n\tpublic void volumeUp() {\n\t\tif (power) {\n\t\t\tif(volume < 100)\n\t\t\t\tvolume++;\n\t\t}\n\t}\n\t\n\tpublic void volumeDown() {\n\t\tif (power) {\n\t\t\tif(volume > 0)\n\t\t\t\tvolume--;\n\t\t}\n\t}\n\t\n\tpublic void work() {\n\t\tSystem.out.println("Displaying moving pictures from the show on channel" + channel + " at volume " + volume + ".");\n\t}\n\t\n\tpublic String toString() {\n\t\treturn new String("Television Brand: " + brand + ", Model: " + model + ", Size: " + size + ", Smart TV: " + type + ", Power: " + power + ", Channel: " + channel + ", Volume: " + volume);\n\t}\n}`,
            file_name: 'Television',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public abstract class Appliance {\n\tprotected boolean power;\n\tprotected String brand; // manufacturer\n\tprotected String model; // model of the appliance\n\t\n\tpublic Appliance() {\n\t\tpower = false;\n\t\tbrand = "Samsung";\n\t\tmodel = "SM-01";\n\t}\n\t\n\tpublic Appliance(String brand, String model) {\n\t\tpower = false;\n\t\tthis.brand = brand;\n\t\tthis.model = model;\n\t}\n\t\n\tpublic void power() {\n\t\tif(power)\n\t\t\tpower = false;\n\t\telse\n\t\t\tpower = true;\n\t}\n\t\n\tpublic abstract void work();\n\t\n\tpublic abstract String toString();\n\t\n\tpublic boolean getPower() {\n\t\treturn power;\n\t}\n\t\n\tpublic String getBrand() {\n\t\treturn brand;\n\t}\n\t\n\tpublic String getModel() {\n\t\treturn model;\n\t}\n}`,
            file_name: 'Appliance',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public class Main{\n\tpublic static void main(String args[]){\n\t\tTelevision television = new Television();\n\t\t\n\t\ttelevision.power();\n\t\ttelevision.work();\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <Text>
        <strong>Labour sidequest:</strong> With the updated class Television
        above, compile and see the errors go away!
        <br />
        <br />
        There you have it! Design level abstraction!
        <br />
        <br />
        <strong>Labour sidequest:</strong> Try this code below. Without
        compiling and running it just yet, what is its expected output?
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `public class Main {\n\tpublic static void main(String args[]) {\n\t\tTelevision tv = new Television();\n\t\t\n\t\tSystem.out.println(tv.toString());\n\t\t\n\t\ttv.volumeUp();\n\t\ttv.volumeUp();\n\t\t\n\t\tSystem.out.println(tv.toString());\n\t\ttv.power();\n\t\t\n\t\tfor(int i = 0; i < 20; i++)\n\t\t\ttv.volumeUp();\n\t\t\n\t\tSystem.out.println(tv.toString());\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public class Television extends Appliance {\n\tprivate int size;\n\tprivate boolean type; // true if smart tv, false otherwise\n\tprivate int channel;\n\tprivate int volume;\n\t\n\tpublic Television() {\n\t\tsuper();\n\t\tsize = 49;\n\t\ttype = true;\n\t\tchannel = 1;\n\t\tvolume = 0;\n\t}\n\t\n\tpublic Television(String brand, String model, int size, boolean type) {\n\t\tsuper(brand, model);\n\t\tthis.size = size;\n\t\tthis.type = type;\n\t\tchannel = 1;\n\t\tvolume = 0;\n\t}\n\t\n\tpublic void channelUp() {\n\t\tif (power) {\n\t\t\tif(channel < 100)\n\t\t\t\tchannel++;\n\t\t}\n\t}\n\t\n\tpublic void channelDown() {\n\t\tif (power) {\n\t\t\tif(channel > 1)\n\t\t\t\tchannel--;\n\t\t}\n\t}\n\t\n\tpublic void volumeUp() {\n\t\tif (power) {\n\t\t\tif(volume < 100)\n\t\t\t\tvolume++;\n\t\t}\n\t}\n\t\n\tpublic void volumeDown() {\n\t\tif (power) {\n\t\t\tif(volume > 0)\n\t\t\t\tvolume--;\n\t\t}\n\t}\n\t\n\tpublic void work() {\n\t\tSystem.out.println("Displaying moving pictures from the show on channel" + channel + " at volume " + volume + ".");\n\t}\n\t\n\tpublic String toString() {\n\t\treturn new String("Television Brand: " + brand + ", Model: " + model + ", Size: " + size + ", Smart TV: " + type + ", Power: " + power + ", Channel: " + channel + ", Volume: " + volume);\n\t}\n}`,
            file_name: 'Television',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public abstract class Appliance {\n\tprotected boolean power;\n\tprotected String brand; // manufacturer\n\tprotected String model; // model of the appliance\n\t\n\tpublic Appliance() {\n\t\tpower = false;\n\t\tbrand = "Samsung";\n\t\tmodel = "SM-01";\n\t}\n\t\n\tpublic Appliance(String brand, String model) {\n\t\tpower = false;\n\t\tthis.brand = brand;\n\t\tthis.model = model;\n\t}\n\t\n\tpublic void power() {\n\t\tif(power)\n\t\t\tpower = false;\n\t\telse\n\t\t\tpower = true;\n\t}\n\t\n\tpublic abstract void work();\n\t\n\tpublic abstract String toString();\n\t\n\tpublic boolean getPower() {\n\t\treturn power;\n\t}\n\t\n\tpublic String getBrand() {\n\t\treturn brand;\n\t}\n\t\n\tpublic String getModel() {\n\t\treturn model;\n\t}\n}`,
            file_name: 'Appliance',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <Text>
        Let's tie some loose ends first before you go on ahead to do your
        activity
        <br />
        <br />
        Recall that certain methods may be set as static. Take a look at the{' '}
        <code>times</code> operation of a <code>Fraction</code> class below.
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`public class Fraction {\n\tpublic int nume;\n\tpublic int deno;\n\t\n\tpublic Fraction() {\n\t\tnume = 0;\n\t\tdeno = 1;\n\t}\n\t\n\tpublic Fraction(int n) {\n\t\tnume = n;\n\t\tdeno = 1;\n\t}\n\t\n\tpublic Fraction(int n, int d) {\n\t\tnume = n;\n\t\tdeno = d;\n\t}\n\t\n\tpublic String toString(){\n\t\treturn new String(nume + "/" + deno);\n\t}\n\t\n\tpublic static Fraction times(Fraction f1, Fraction f2) {\n\t\tFraction f = new Fraction();\n\t\tf.nume = f1.nume * f2.nume;\n\t\tf.deno = f1.deno * f2.deno;\n\t\treturn f;\n\t\t// or reduced to the return statement below\n\t\t// return new Fraction(f1.nume*f2.deno, f1.deno*f2.deno);\n\t}\n}`}
      </Code>
      <Text>
        Notice that the <code>times</code> method of <code>Fraction</code> is
        static and this time accepts 2 <code>Fraction</code> objects as
        arguments serving as the multiplicands of the operation.
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`public class Main {\n\tpublic static void main(String args[]) {\n\t\tFraction f1 = new Fraction(3, 5), f2 = new Fraction(1, 2);\n\t\tFraction f = Fraction.times(f1, f2);\n\t\tSystem.out.println(f1.toString() + " * " + f2.toString() + " is " + f.toString() + ".");\n\t}\n}`}
      </Code>
      <Text>
        Since <code>times</code> is static, it cannot be abstract. Remember that
        abstract methods have to be overridden by child classes. And recall that
        static members are not inherited. If static methods are not inherited
        and abstract methods have to overridden, as a result,{' '}
        <strong>methods cannot be abstract and static at the same time.</strong>
        <br />
        <br />
        In a similar tact, abstract methods cannot be private. Recall that
        private methods are not inherited, in its truest sense. Hence the
        prohibition.
        <br />
        <br />
        Lastly, a child class (let's call this class <code>AChild</code>)
        inheriting from an abstract class may be defined as abstract as well.
        Class <code>AChild</code>, since it is defined as abstract,{' '}
        <strong>
          is exempted from the rule of having to define abstract methods.
        </strong>{' '}
        This responsibility falls on the non-abstract child classes of class A.
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic2;
