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
    title="Exception Handling"
    titleJsx={
      <>
        <Text type={textTypes.BODY.MD}>
          You have been using the Scanner for reading inputs. Try the code
          sample below:
        </Text>
        <Compiler
          hasInput
          initialSourceCodes={[
            {
              code: `import java.util.Scanner;\n\npublic class Main {\n\tpublic static void main(String args[]) {\n\t\tScanner in = new Scanner(System.in);\n\t\t\n\t\tint x = in.nextInt(), y = in.nextInt();\n\t\t\n\t\tSystem.out.println(x + " * " + y + " = " + (x*y));\n\t\t\n\t\tSystem.out.println("Proceeding with the program...");\n\t}\n}`,
              file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
              file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
            },
          ]}
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
        />
        <br />
        <Text>
          When running this, <strong>enter strings instead of numbers.</strong>{' '}
          What happens?
          <br />
          <br />
          Take this other sample:
        </Text>
        <Compiler
          hasInput
          initialSourceCodes={[
            {
              code: `import java.util.Scanner;\n\npublic class Main {\n\tpublic static void main(String args[]) {\n\t\tScanner in = new Scanner(System.in);\n\t\t\n\t\tint dividend = in.nextInt(), divisor = in.nextInt();\n\t\t\n\t\tSystem.out.println(dividend + " / " + divisor + " = " + (dividend/divisor));\n\t\t\n\t\tSystem.out.println("Proceeding with the program...");\n\t}\n}`,
              file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
              file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
            },
          ]}
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
        />
        <br />
        <Text>
          When running this program,{' '}
          <strong>
            enter any integer for dividend and enter 0 for divisor.
          </strong>{' '}
          What happens?
        </Text>
      </>
    }
  >
    <Section>
      <Text>
        Both tries should have given you run-time errors. The programs suddenly
        crashed. For the first experiment, there was no way for{' '}
        <code>Scanner</code> to convert that string to its integer equivalent
        becaue the input was a string to begin with.
        <br />
        <br />
        The second experiment on the other hand, produced a division by zero
        run-time error.
        <br />
        <br />
        Whichever the case maybe, the fact remains that both programs crashed.
        And there is no way the program could have proceeded from the crash.
        <br />
        <br />
        Check the 2 sample codes below. Compile it, and run it. Recreate the
        experiments here.
      </Text>
      <Compiler
        hasInput
        initialSourceCodes={[
          {
            code: `import java.util.Scanner;\n\npublic class Main {\n\tpublic static void main(String args[]) {\n\t\tScanner in = new Scanner(System.in);\n\t\t\n\t\ttry {\n\t\t\tint x = in.nextInt(), y = in.nextInt();\n\t\t\tSystem.out.println(x + " * " + y + " = " + (x*y));\n\t\t} catch(Exception e) {\n\t\t\tSystem.out.println("Ooops! You did not enter an integer.");\n\t\t}\n\t\t\n\t\tSystem.out.println("Proceeding with the program...");\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <Compiler
        hasInput
        initialSourceCodes={[
          {
            code: `import java.util.Scanner;\n\npublic class Main {\n\tpublic static void main(String args[]) {\n\t\tScanner in = new Scanner(System.in);\n\t\t\n\t\ttry {\n\t\t\tint dividend = in.nextInt(), divisor = in.nextInt();\n\t\t\tSystem.out.println(dividend + " / " + divisor + " = " + (dividend/divisor));\n\t\t} catch(Exception e) {\n\t\t\tSystem.out.println("Ooops! Divisor is 0!");\n\t\t}\n\t\t\n\t\tSystem.out.println("Proceeding with the program...");\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <Text>
        When recreating the errors for both samples, the program printed the
        lines from inside the catch and was able to proceed to proceed with
        printing the last line.
        <br />
        <br />
        These kinds of errors, errors that happen during run-time, are called{' '}
        <strong>exceptions</strong>. And the try-catch block show in the two
        samples above is the simplest form of exception-handling in Java.
        <br />
        <br />
        When there exceptions that occur, and these exceptions are unchecked,
        the program crashes and suddenly exits.
        <br />
        <br />
        When there are possible exceptions that might happen during the
        execution of a program, it is best to handle them via the try-catch
        block.
        <br />
        <br />
        Take for instance the division by 0. How did the try-catch block affect
        the flow of the program?
        <br />
        <br />
        When the program is executed, what happens is the statements in the try
        block are executed as usual. But when an exception occurs, execution of
        the program transfers to the catch block. The catch block is normally
        used to send a message or prompt a message for some error.
      </Text>
    </Section>

    <Section title="Catch Block">
      <Text>
        You might have noticed that in the catch block, there is an argument{' '}
        <code>e</code> of type <code>Exception</code>. The catch block accepts
        an <code>Exception</code> object. This <code>Exception</code> object
        holds the messages of what the Exception is about. If you want to know
        what the actual error or exception is, you can use the method{' '}
        <code>getMessage()</code>. There's also a <code>getCause()</code>, and a{' '}
        <code>printStackTrace()</code>. Let's use each of these in our samples.
      </Text>
      <Compiler
        hasInput
        initialSourceCodes={[
          {
            code: `import java.util.Scanner;\n\npublic class Main {\n\tpublic static void main(String args[]) {\n\t\tScanner in = new Scanner(System.in);\n\t\t\n\t\ttry {\n\t\t\tint dividend = in.nextInt(), divisor = in.nextInt();\n\t\t\tSystem.out.println(dividend + " / " + divisor + " = " + (dividend/divisor));\n\t\t} catch(Exception e) {\n\t\t\tSystem.out.println("Ooops! Divisor is 0!");\n\t\t\tSystem.out.println("getMessage: " + e.getMessage());\n\t\t\tSystem.out.println("getCause: " + e.getCause());\n\t\t}\n\t\t\n\t\tSystem.out.println("Proceeding with the program...");\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <Compiler
        hasInput
        initialSourceCodes={[
          {
            code: `import java.util.Scanner;\n\npublic class Main {\n\tpublic static void main(String args[]) {\n\t\tScanner in = new Scanner(System.in);\n\t\t\n\t\ttry {\n\t\t\tint dividend = in.nextInt(), divisor = in.nextInt();\n\t\t\tSystem.out.println(dividend + " / " + divisor + " = " + (dividend/divisor));\n\t\t} catch(Exception e) {\n\t\t\te.printStackTrace();\n\t\t}\n\t\t\n\t\tSystem.out.println("Proceeding with the program...");\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <Text>
        You must have observed that the <code>printStackTrace()</code> is
        essentially the error message displayed when the exceptions are
        unchecked.
      </Text>
    </Section>

    <Section title="Throwing Exceptions">
      <Text>
        What if you want your methods to handle exceptions? What you want to do
        here is when client programs use the methods that you have implemented,
        they would be able to handle the exceptions by way of the try-catch
        blocks.
        <br />
        <br />
        Check the sample below:
      </Text>
      <Compiler
        hasInput
        initialSourceCodes={[
          {
            code: `import java.util.Scanner;\n\npublic class Main {\n\t\n\tpublic static int divide(int x, int y) throws Exception {\n\t\tif(y != 0)\n\t\t\treturn x / y;\n\t\telse\n\t\t\tthrow new Exception();\n\t}\n\t\n\tpublic static void main(String args[]) {\n\t\tScanner in = new Scanner(System.in);\n\t\t\n\t\ttry {\n\t\t\tint dividend = in.nextInt(), divisor = in.nextInt();\n\t\t\tSystem.out.println(dividend + " / " + divisor + " = " + divide(dividend, divisor));\n\t\t} catch(Exception e) {\n\t\t\tSystem.out.println("Ooops! Divisor is 0!");\n\t\t\tSystem.out.println("getMessage: " + e.getMessage());\n\t\t}\n\t\t\n\t\tSystem.out.println("Proceeding with the program...");\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
    </Section>

    <Section title="Making your own Exception">
      <Text>
        It is also possible to create your own Exception. This is done by
        inheriting from Exception.
        <br />
        <br />
        Recall the Account activity you did in Encapsulation. This is a simple
        class definition.
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`public class Account {\n\tprivate String accountNumber;\n\tprivate double balance;\n\t\n\tpublic Account(String accountNumber, double balance) {\n\t\tthis.accountNumber = accountNumber;\n\t\tthis.balance = balance;\n\t}\n\t\n\tpublic void credit(double amount) {\n\t\tbalance = balance + amount;\n\t}\n\t\n\tpublic void debit(double amount) {\n\t\tif(amount <= balance)\n\t\t\tbalance = balance - amount;\n\t}\n}`}
      </Code>
      <Text>
        What if you want to create your own Exception for handling debits that
        are not possible?
        <br />
        <br />
        Banks or at least ATMs report an "Insufficient Fund" error when the
        amount to be withdrawn is bigger than the balance of the account. So
        let's call this <code>InsufficientFundException</code>. And let's also
        keep track of the missing fund that needs to be funded, i.e. if the
        account's balance is 2000, and the 3000 is withdrawn, then the missing
        fund or lacking fund is 1000. This is what we will keep as ann attribute
        for the <code>InsufficientFundException</code>.
        <br />
        <br />
        Since this is a class, then it is like any ordinary class (warts and
        all).
        <br />
        <br />
        Check this simple implementation.
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`public class InsufficientFundException extends Exception {\n\tprivate double lackingFund;\n\t\n\tpublic InsufficientFundException(double lackingFund) {\n\t\tthis.lackingFund = lackingFund;\n\t}\n\t\n\tpublic double getLackFund(){\n\t\treturn lackingFund;\n\t}\n}`}
      </Code>
      <Text>Let's redo the Account class.</Text>
      <Code language={programmingLanguages.JAVA}>
        {`public class Account {\n\tprivate String accountNumber;\n\tprivate double balance;\n\t\n\tpublic Account(String accountNumber, double balance) {\n\t\tthis.accountNumber = accountNumber;\n\t\tthis.balance = balance;\n\t}\n\t\n\tpublic void credit(double amount) {\n\t\tbalance = balance + amount;\n\t}\n\t\n\tpublic void debit(double amount) throws InsufficientFundException {\n\t\tif(amount <= balance)\n\t\t\tbalance = balance - amount;\n\t\telse\n\t\t\tthrow new InsufficientFundException(amount - balance);\n\t}\n}`}
      </Code>
      <Text>And let's try to have a test Account here.</Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `public class Main {\n\tpublic static void main(String args[]) {\n\t\tAccount ac = new Account("ACCT-1003", 10000);\n\t\t\n\t\ttry {\n\t\t\tac.debit(20000);\n\t\t} catch(InsufficientFundException ife) {\n\t\t\tSystem.out.println("Lacking fund = " + ife.getLackFund());\n\t\t}\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public class Account {\n\tprivate String accountNumber;\n\tprivate double balance;\n\t\n\tpublic Account(String accountNumber, double balance) {\n\t\tthis.accountNumber = accountNumber;\n\t\tthis.balance = balance;\n\t}\n\t\n\tpublic void credit(double amount) {\n\t\tbalance = balance + amount;\n\t}\n\t\n\tpublic void debit(double amount) throws InsufficientFundException {\n\t\tif(amount <= balance)\n\t\t\tbalance = balance - amount;\n\t\telse\n\t\t\tthrow new InsufficientFundException(amount - balance);\n\t}\n}`,
            file_name: 'Account',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public class InsufficientFundException extends Exception {\n\tprivate double lackingFund;\n\t\n\tpublic InsufficientFundException(double lackingFund) {\n\t\tthis.lackingFund = lackingFund;\n\t}\n\t\n\tpublic double getLackFund(){\n\t\treturn lackingFund;\n\t}\n}`,
            file_name: 'InsufficientFundException',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
    </Section>
  </TopicContainer>
);

export default Topic2;
