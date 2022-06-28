import React from 'react';
import { Container } from './styles';

interface Props {
    // eslint-disable-next-line no-unused-vars
    onMessage: (message:string)=>void;
}

const MessageBox: React.FC<Props> = function msgbox({ onMessage }) {
  const textAreaRef: React.RefObject<HTMLTextAreaElement> = React.createRef();

  const pushMessage = () => {
    if (textAreaRef.current) {
      const { value } = textAreaRef.current;
      onMessage(value);
      textAreaRef.current.value = '';
    }
  };

  function keyDownHandler(event : React.KeyboardEvent<HTMLTextAreaElement>) {
    if (!event.shiftKey) {
      if (event.key === 'Enter') {
        const element = event.target as HTMLTextAreaElement;

        if (element.value.length > 0) {
          pushMessage();
          event.preventDefault();
          return;
        }

        event.preventDefault();
      }
    }
  }

  return (
    <Container>
      <textarea
        ref={textAreaRef}
        placeholder="Digite aqui"
        onKeyDown={keyDownHandler}
      />
      <button onClick={pushMessage} type="button">Enviar</button>
    </Container>
  );
};

export default MessageBox;
