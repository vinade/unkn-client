import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import ChatMessages from './components/ChatMessages';
import MessageBox from './components/MessageBox';
import usePersistedSate from './utils/usePersistedSate';
import { ThemeNames, availableThemes } from './styles/themes';
import ChatFrame from './styles/frame';
import { Message } from './types';
import MessageController from './messageController';
import config from './config';

const messager = new MessageController(config.server);

interface Props {
  userId: string;
  roomId: string;
}

const App: React.FC<Props> = function App({ userId, roomId }) {
  const [themeName, setThemeName] = usePersistedSate<ThemeNames>('theme', ThemeNames.dark);
  const [theme, setTheme] = useState(availableThemes[ThemeNames.dark]);
  const [messages, setMessages] = useState([] as Message[]);

  const toggleTheme = () => {
    setThemeName((themeName === ThemeNames.light) ? ThemeNames.dark : ThemeNames.light);
  };

  useEffect(() => {
    setTheme(availableThemes[themeName]);
  }, [themeName]);

  useEffect(() => {
    messager.setMessages = setMessages;
    messager.setRoom(roomId, userId);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ChatFrame>
        <Header toggleTheme={toggleTheme} />
        <ChatMessages messages={messages} />
        <MessageBox
          onMessage={(message) => {
            messager.send(message);
          }}
        />
      </ChatFrame>
    </ThemeProvider>
  );
};

export default App;
