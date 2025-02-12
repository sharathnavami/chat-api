import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #444; /* Grey background */
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  width: 30px;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: white;
`;

const ToggleButton = ({ isCollapsed, toggleSidebar }) => {
  return (
    <Button onClick={toggleSidebar}>
      <Line />
      <Line />
      <Line />
    </Button>
  );
};

export default ToggleButton;