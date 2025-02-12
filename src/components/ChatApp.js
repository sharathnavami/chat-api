import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import MessageInput from './MessageInput';
import Sidebar from './Sidebar';
import ToggleButton from './ToggleButton';
import NewChatButton from './NewChatButton';
import styled from 'styled-components';

const ChatAppContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
  position: relative;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const handleSendMessage = async (message) => {
    setMessages([...messages, { sender: 'user', text: message }]);
    const response = await fetchGPTResponse(message);
    setMessages([...messages, { sender: 'user', text: message }, { sender: 'bot', text: response }]);
  };

  const fetchGPTResponse = async (message) => {
    return "This is a response from GPT.";
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const startNewChat = () => {
    setMessages([]);
  };

  return (
    <ChatAppContainer>
      {isSidebarCollapsed && <ToggleButton isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />}
      <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} messages={messages} />
      <NewChatButton startNewChat={startNewChat} />
      <MainContent>
        <ChatWindow messages={messages} />
        <MessageInput onSendMessage={handleSendMessage} />
      </MainContent>
    </ChatAppContainer>
  );
};

export default ChatApp;