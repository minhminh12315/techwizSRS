// src/components/Button/Button.js
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: relative; /* Để pseudo-element có thể được đặt bên trong */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  padding: 8px 16px;
  border: 1px solid gray;
  background-color: ${props => props.background || '#007bff'};
  color: ${props => props.color || 'white'};
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  overflow: hidden; 
  transition: color 0.3s ease;

 
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%; 
    height: 300%; 
    background-color: ${props => props.hoverBackground || '#0056b3'};
    
    transition: transform 0.3s ease;
    transform: translate(-50%, -50%) scale(1); 
  }

  &:hover::before {
    transform: translate(-50%, -50%) scale(0); 
    background-color: ${props => props.hoverBackground || '#0056b3'}; 
  }

  svg {
    margin-right: 8px;
  }
`;

const Button = ({ icon: Icon, children, background, hoverBackground, color, ...props }) => {
  return (
    <StyledButton
      background={background}
      hoverBackground={hoverBackground}
      color={color}
      {...props}
    >
      {Icon && <Icon />}
      {children}
    </StyledButton>
  );
};

export default Button;
