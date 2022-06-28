import React, { useEffect } from 'react';
import Container from './styles';
import MessageItem from '../MessageItem';
import { Message } from '../../types';

interface Props {
    messages: Message[];
}

const ChatMessages: React.FC<Props> = function ChatMessages({ messages }) {
  const containerRef: React.RefObject<HTMLDivElement> = React.createRef();

  const refreshScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    refreshScroll();
  }, [messages]);

  return (
    <Container ref={containerRef}>
      {messages.map((message) => (
        <MessageItem
          key={message.id}
          nickname={message.nickname}
          system={message.system}
          text={message.message}
          onChange={refreshScroll}
        />
      ))}
    </Container>
  );
};

export default ChatMessages;
