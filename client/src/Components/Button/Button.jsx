import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: relative; 
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  padding: 8px 16px;
  border: ${props => props.border || '1px solid gray'};
  background-color: ${props => props.background || 'white'};
  color: ${props => props.color || 'white'};
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  overflow: hidden; 
  transition: color 0.5s ease, background-color 0.5s ease; 

  span, svg {
    position: relative;
    z-index: 1; 
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%; 
    height: 300%; 
    background-color: ${props => props.hoverBackground || '#0E82FD'};
    transition: transform 0.5s ease, background-color 0.5s ease;
    transform: translate(-50%, -50%) scale(1); 
    z-index: 0;
  }

  &:hover::before {
    transform: translate(-50%, -50%) scale(0); 
    background-color: ${props => props.hoverBackground || '#0E82FD'}; 
  }

  &:hover {
    color: ${props => props.hoverColor || 'black'}; /* Hover color added */
  }

  svg {
    margin-right: 8px;
  }
`;

const Button = ({ icon: Icon, children, background, hoverBackground, color, hoverColor, border, ...props }) => {
  return (
    <StyledButton
      background={background}
      hoverBackground={hoverBackground}
      color={color}
      hoverColor={hoverColor}  
      border={border}
      {...props}
    >
      {Icon && <Icon />}
      <span>{children}</span> 
    </StyledButton>
  );
};

export default Button;
