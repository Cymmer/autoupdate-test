import React from 'react';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';
import GLOBALS from 'codechum-app-globals';

import { SampleProblemList, SampleProblemCard } from 'components';
import { getFileName } from 'codechum-app-utils';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic3 = () => (
  <TopicContainer
    image={IntroImage}
    number={3}
    title="Manipulating the Situation"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        The robot you've programmed, Cody, now learns how to speak and pause
        like a human kiddo! But you notice that there is still something else
        missing in order to complete his speaking ability. Eager to find out
        what it is, you then turned to the last page of the current chapter of
        the manual: <br />
        <br />
        "Speaking and learning to pause are two essential skills that your robot
        needs to be able to talk like human, but there is one last recipe that
        completes the basic human-like speaking skills, and that is the ability
        to manipulate and construct properly the things it wants to say.".
      </Text>
    }
  >
    <Section title="std::fixed and std::setprecision()">
      <Text>
        So far, we've been printing strings (or text) only. How about decimal
        numbers, how do we print them? It's actually just the same process!
      </Text>
      <Code language={programmingLanguages.CPP}>{`std::cout << 5.1534;`}</Code>
      <Text>and the output, as you guess it, would be:</Text>
      <Code language={programmingLanguages.CPP}>5.1534</Code>
      <Text>
        But what if we want to manipulate it so that we can only display three
        of its decimal places, how do we do that?
        <br />
        To achieve that we need to use <code>std::fixed</code> from{' '}
        <code>{`<iostream>`}</code> and <code>std::setprecision</code> from{' '}
        <code>{`<iomanip>`}</code>. The code would look like this:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<iostream>\n#include<iomanip>\n\nint main(void) {\n\tstd::cout << std::fixed;\n\tstd::cout << std::setprecision(3);\n\tstd::cout << 5.1534;\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
      <Text>
        Don't get overwhelmed, it's actually pretty easy to understand! Let's
        break it down:
        <br />
        <br /> {'\u2B24'} <code>{`#include<iomanip>`}</code> - to be able to use{' '}
        <code>std::setprecision</code>, we need to include the{' '}
        <code>{`<iomanip>`}</code> library
        <br />
        <br /> {'\u2B24'} <code>{`std::cout << std::fixed;`}</code> - this is
        needed to change the default formatting of the numbers that are printed
        to "fixed-point notation". I know, that sounds complex, but to make
        things simple, we need to do that because if we don't, the next line
        (the <code>std::setprecision</code>) that actually sets the number of
        decimal places, will include the whole number as part of the specified
        number of digits. That means, in the above example, the output would be{' '}
        <code>5.15</code> (5.15 is 3 digits, including the whole number) and not{' '}
        <code>5.153</code> as what we are trying to achieve
        <br />
        <br /> {'\u2B24'} <code>std::setprecision(3)</code> - this is the line
        that sets the number of decimal places to be printed.
        <br />
        <br /> We're not done yet! You might be thinking that that's a lot of
        lines of code just to format the number of decimal places, isnt' there
        an easier way? Spoiler alert, there is and it looks like this:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<iostream>\n#include<iomanip>\n\nint main(void) {\n\tstd::cout << std::fixed << std::setprecision(3) << 5.1534;\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
    </Section>

    <Section title="Combining Strings and Numbers">
      <Text>
        Now, what about if we want to output strings and numbers at the same
        time? Would that be possible? You're right, it sure is! Take a look at
        this one:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<iostream>\n\nint main(void) {\n\tstd::cout << "Hello, my name is Cody.\\n";\n\tstd::cout << "I am " << 999999 << " years old.\\n";\n\tstd::cout << "I have been living in 1010 CC Street for over " << 1000 << " years.";\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
      <Text>
        As you can see, in the second and third <code>std::cout</code> we did
        above, we combined integers (or whole numbers) with strings (or text)
        and it's working perfectly fine!
      </Text>
    </Section>

    <Section title="Substitute For \n">
      <Text>
        Before we go to the activity, there's one last thing that we need to
        know. If you take a look at the previous example above, in the first and
        second <code>std::cout</code>, we really need to add{' '}
        <code>{`\\n`}</code> at the end so that the next print message will go
        the next line. If we don't, all the print messages will be in one line,
        try running this one:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<iostream>\n\nint main(void) {\n\tstd::cout << "Hello, my name is Cody.";\n\tstd::cout << "I am " << 999999 << " years old.";\n\tstd::cout << "I have been living in 1010 CC Street for over " << 1000 << " years.";\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
      <Text>
        But adding <code>{`\n`}</code> is sometimes not too clear because it'll
        seem that it's part of the message that we're trying to print.
        <br />
        <br /> There's actually another way and that is to use{' '}
        <code>std::endl</code>. Take a look at this one:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<iostream>\n\nint main(void) {\n\tstd::cout << "Hello, my name is Cody." << std::endl;\n\tstd::cout << "I am " << 999999 << " years old." << std::endl;\n\tstd::cout << "I have been living in 1010 CC Street for over " << 1000 << " years.";\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="How Much?">
          <Text>
            There will come a time where Cody will need to buy something at a
            grocery or a convenience store with his human friends in the future,
            and for it to be able to recognize the money format with cents in
            the country, he has to learn to limit his digits into two decimal
            places, since it would be weird if he would just directly blurt out
            the amount of money in 6 decimal places, right? <br />
            <br />
            Let's apply what we just learned above! Let's see how it works.{' '}
            <br />
            <br />
            Let's see how it works!
          </Text>
          <Compiler
            initialSourceCodes={[
              {
                code: `#include<iostream>\n#include<iomanip>\n\nint main(void) {\n\tstd::cout << "An apple costs P" << std::fixed << std::setprecision(2) << 20.252598;\n\n\treturn 0;\n}`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          />
        </SampleProblemCard>
      </SampleProblemList>
    </Section>
  </TopicContainer>
);

export default Topic3;
