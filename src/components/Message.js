import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  display: flex;
  justify-content: ${({ sender }) => (sender === 'user' ? 'flex-end' : 'flex-start')};
  margin-bottom: 10px;
`;

const MessageBubble = styled.div`
  max-width: 60%;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ sender }) => (sender === 'user' ? '#007bff' : '#e5e5ea')};
  color: ${({ sender }) => (sender === 'user' ? '#fff' : '#000')};
`;

const Message = ({ sender, text }) => {
  return (
    <MessageContainer sender={sender}>
      <MessageBubble sender={sender}>{text}</MessageBubble>
    </MessageContainer>
  );
};

export default Message;