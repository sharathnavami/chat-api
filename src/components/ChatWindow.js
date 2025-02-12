import React from 'react';
import styled from 'styled-components';
import Message from './Message';

const ChatWindowContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

const ChatWindow = ({ messages }) => {
  return (
    <ChatWindowContainer>
      {messages.map((msg, index) => (
        <Message key={index} sender={msg.sender} text={msg.text} />
      ))}
    </ChatWindowContainer>
  );
};

export default ChatWindow;