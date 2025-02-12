import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: ${({ isCollapsed }) => (isCollapsed ? '0' : '250px')};
  transition: width 0.3s;
  overflow: hidden;
  background-color: #333; /* Grey background */
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ToggleButton = styled.button`
  background-color: #444;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const ChatHistory = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
`;

const Sidebar = ({ isCollapsed, toggleSidebar, messages }) => {
  return (
    <SidebarContainer isCollapsed={isCollapsed}>
      <ToggleButton onClick={toggleSidebar}>
        {isCollapsed ? '>' : '<'}
      </ToggleButton>
      <ChatHistory>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </ChatHistory>
    </SidebarContainer>
  );
};

export default Sidebar;