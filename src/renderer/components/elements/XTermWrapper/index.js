import GLOBALS from 'codechum-app-globals';
import { Spinner, Text } from 'components/elements';
import { spinnerSizes, textTypes } from 'components/elements/constants';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { AttachAddon } from 'xterm-addon-attach';
import { FitAddon } from 'xterm-addon-fit';
import { XTerm } from 'xterm-for-react';
import { keyCodes } from './constants';
import styles from './styles.module.scss';
import './styles.scss';

const WS_ENDPOINT = 'ws://127.0.0.1:40459/v1/interactive/playground';

const XTermWrapper = ({
  data,
  output,
  socket,
  xTermRef,
  handleKeyPress,
  setOutput,
  setSocket,
  setTypedInput,
}) => {
  const [lastOutput, setLastOutput] = useState(null);

  const [isExecuting, setIsExecuting] = useState(false);
  const [websocketAddon, setWebsocketAddon] = useState(null);
  const fitAddon = new FitAddon();

  useEffect(() => {
    if (xTermRef.current) {
      xTermRef.current.terminal.focus();
    }
  }, [xTermRef.current]);

  useEffect(() => {
    if (lastOutput !== null) {
      setOutput([...output, lastOutput]);
    }
  }, [lastOutput]);

  useEffect(() => {
    if (!isExecuting) {
      fitAddon.fit();
    }
  }, [isExecuting]);

  useEffect(() => {
    if (data) {
      setIsExecuting(true);
      setTypedInput('');
      setOutput([]);

      if (socket) {
        socket.close();
      }

      const newSocket = new WebSocket(WS_ENDPOINT);
      newSocket.addEventListener('open', () => {
        newSocket.send(data);
      });
      newSocket.addEventListener('message', (message) => {
        setLastOutput(null);
        try {
          if (JSON.parse(message.data).state === 'ready') {
            setIsExecuting(false);

            if (/Android/i.test(navigator.userAgent)) {
              xTermRef.current.terminal.textarea.addEventListener(
                'focus',
                () => {
                  xTermRef.current.terminal.textarea.blur();
                }
              );
            }
          }
        } catch (e) {
          setLastOutput(message.data);
        }
      });

      setSocket(newSocket);

      setWebsocketAddon(
        new AttachAddon(newSocket, {
          bidirectional: false,
        })
      );
    }
  }, []);

  if (!websocketAddon) {
    return null;
  }

  return isExecuting ? (
    <div className={styles.XTermWrapper_loading} data-test="loadingIndicator">
      <Spinner
        className={styles.XTermWrapper_loading_spinner}
        colorName={GLOBALS.COLOR_NAMES.GRAY}
        size={spinnerSizes.MD}
      />
      <Text
        className={styles.XTermWrapper_loading_text}
        type={textTypes.BODY.LG}
      >
        Executing
      </Text>
    </div>
  ) : (
    <>
      <div className={styles.XTermWrapper_container}>
        <XTerm
          ref={xTermRef}
          addons={[fitAddon, websocketAddon]}
          className={styles.XTermWrapper_terminal}
          options={{
            theme: {
              background: GLOBALS.COLOR_HEX_CODES.NEUTRAL['800'],
            },
          }}
          onKey={(e) => {
            if (!/Android/i.test(navigator.userAgent)) {
              let { key } = e;
              if (e.domEvent.key === keyCodes.BACKSPACE) {
                key = keyCodes.BACKSPACE;
              } else if (e.domEvent.key === keyCodes.ENTER) {
                key = keyCodes.ENTER;
              } else if (e.domEvent.key === keyCodes.ESCAPE) {
                key = keyCodes.ESCAPE;
              }
              handleKeyPress(key);
            }
          }}
        />
      </div>
    </>
  );
};

XTermWrapper.propTypes = {
  // the JSON string of the data to be sent to the server (websocket)
  data: PropTypes.string.isRequired,

  // terminal output to be sent to execute answer
  output: PropTypes.arrayOf(PropTypes.string),
  setOutput: PropTypes.func,

  // websocket for api connection
  socket: PropTypes.object,
  setSocket: PropTypes.func,

  handleKeyPress: PropTypes.func,
  setTypedInput: PropTypes.func,
  xTermRef: PropTypes.object,
};

export default XTermWrapper;
