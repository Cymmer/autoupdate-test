import cn from 'classnames';
import { ModalTitle, XTermWrapper } from 'components/elements';
import { keyCodes, modalTitleTypes } from 'components/elements/constants';
import { useKeyPress, useWindowDimensions } from 'hooks';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { Rnd } from 'react-rnd';
import { useLocation } from 'react-router';
import CloseIcon from 'static/images/Misc/close.svg';
import BottomHandle from './components/BottomHandle';
import HelperKeyboard from './components/HelperKeyboard';
import RightHandle from './components/RightHandle';
import styles from './styles.module.scss';

const MOBILE_WINDOW_WIDTH = 767;

const TerminalModal = ({ handleClose, currentAnswer, onCodeSave = null }) => {
  const xTermRef = useRef();
  const location = useLocation();
  const { width: windowWidth } = useWindowDimensions();

  const terminalRef = useRef();
  const [inputs, setInputs] = useState([]);
  const [output, setOutput] = useState([]);
  const [socket, setSocket] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [typedInput, setTypedInput] = useState('');

  const escKeyPressed = useKeyPress('Escape');
  const isInFocus = terminalRef?.current === document.activeElement;

  const handleCloseModal = async () => {
    if (onCodeSave != null) {
      await onCodeSave({ inputs, output: output.join('') });
    }
    socket.send({ status: 0 });
    socket.close();
    handleClose();
  };

  useEffect(() => {
    if (currentAnswer) {
      setAnswer(currentAnswer);
    }

    return () => {
      if (socket) {
        handleCloseModal();
      }
    };
  }, []);

  const handleKeyPress = (key) => {
    if (key === keyCodes.ESCAPE) {
      handleCloseModal();
    }

    if (key === keyCodes.BACKSPACE) {
      if (typedInput.length > 0) {
        xTermRef.current.terminal.write('\b \b');
        setTypedInput(typedInput.slice(0, -1));
      }
    } else if (key === keyCodes.ENTER) {
      socket.send(`${typedInput}\r`);
      setOutput([...output, typedInput, '\n']);
      xTermRef.current.terminal.write('\r\n');
      setInputs([...inputs, typedInput]);

      setTypedInput('');
    } else if (key.length === 1) {
      setTypedInput(typedInput + key);
      xTermRef.current.terminal.write(key);
    }
  };

  useEffect(() => {
    if (escKeyPressed && isInFocus) {
      handleCloseModal();
    }
  }, [escKeyPressed]);

  const data = {
    programming_language_id: answer?.programming_language.online_id,
    files: answer?.source_codes
      .filter(
        (sc) => sc.programming_language.id === answer?.programming_language.id
      )
      .map((sc) => ({
        code: sc.code,
        file_name: sc.file_name,
        file_extension: sc.file_extension,
      })),
    timestamp: null,
  };

  data.timestamp = new Date().getTime();

  const isInViewLessonScreen =
    location.pathname.includes('lessons') &&
    !location.pathname.includes('activity');
  const isMobile = windowWidth <= MOBILE_WINDOW_WIDTH;
  const mobileDefaultX = isInViewLessonScreen ? -80 : 0;
  const mobileDefaultY = isInViewLessonScreen ? 0 : 10;
  const mobileDefaultWidth = isInViewLessonScreen ? '90vw' : '100vw';
  const desktopDefaultX = 100;
  const defaultSettings = isMobile
    ? {
        x: mobileDefaultX,
        y: mobileDefaultY,
        width: mobileDefaultWidth,
        height: '95vh',
      }
    : {
        x: desktopDefaultX,
        y: 0,
        width: '65vw',
        height: '75vh',
      };

  return (
    <>
      <Rnd
        ref={terminalRef}
        bounds="#root"
        className={styles.TerminalModal}
        data-test="terminalModal"
        default={defaultSettings}
        disableDragging={isMobile}
        dragHandleClassName="TerminalModal_head"
        enableResizing={{
          top: false,
          right: !isMobile,
          bottom: !isMobile,
          left: false,
          topRight: false,
          bottomRight: !isMobile,
          bottomLeft: false,
          topLeft: false,
        }}
        enableUserSelectHack={false}
        maxHeight="90vh"
        minHeight="160px"
        minWidth="160px"
        resizeHandleClasses={{
          bottom: styles.TerminalModal_resizeHandle___bottom,
          bottomRight: styles.TerminalModal_resizeHandle___bottomRight,
          right: styles.TerminalModal_resizeHandle___right,
        }}
        resizeHandleComponent={{
          bottom: !isMobile && <BottomHandle />,
          right: !isMobile && <RightHandle />,
        }}
        // so that component can be in focus
        tabIndex="0"
      >
        <div className={cn(styles.TerminalModal_head, 'TerminalModal_head')}>
          <ModalTitle
            icon="code"
            iconClassName={styles.TerminalModal_title_icon}
            textClassName={styles.TerminalModal_title}
            title="CodeChum Terminal"
            type={modalTitleTypes.SMALL}
          />
          <button
            className={styles.TerminalModal_close}
            data-test="closeButton"
            type="button"
            onClick={handleCloseModal}
          >
            <img alt="close icon" src={CloseIcon} />
          </button>
        </div>
        {answer && (
          <XTermWrapper
            data={JSON.stringify(data)}
            data-test="xterm"
            handleKeyPress={handleKeyPress}
            output={output}
            setOutput={setOutput}
            setSocket={setSocket}
            setTypedInput={setTypedInput}
            socket={socket}
            xTermRef={xTermRef}
          />
        )}
      </Rnd>
      {/* only show the helper keyboard on Android devices */}
      {/Android/i.test(navigator.userAgent) && (
        <HelperKeyboard handleKeyPress={handleKeyPress} />
      )}
    </>
  );
};

TerminalModal.defaultProps = {
  onCodeSave: null,
};

TerminalModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  currentAnswer: PropTypes.shape({
    programming_language: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
    source_codes: PropTypes.arrayOf(
      PropTypes.shape({
        programming_language: PropTypes.shape({
          id: PropTypes.number.isRequired,
        }),
        code: PropTypes.string.isRequired,
        file_name: PropTypes.string.isRequired,
        file_extension: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  onCodeSave: PropTypes.func,
};

export default TerminalModal;
