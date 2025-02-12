import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1000;
`;

const NewChatButton = ({ startNewChat }) => {
  return (
    <Button onClick={startNewChat}>
      New Chat
    </Button>
  );
};

export default NewChatButton;