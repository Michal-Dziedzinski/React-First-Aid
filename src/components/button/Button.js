import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.colorPrimary} 0%,
    ${({ theme }) => theme.colorMain} 100%
  );
  color: ${({ theme }) => theme.colorWhite};
  border: none;
  width: 80%;
  border-radius: 2.5rem;
  padding: 2rem 0;
  margin: 1rem 0;
  text-transform: uppercase;
  font-family: inherit;
  font-size: 1.8rem;
  font-weight: 900;
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(
      to left,
      ${({ theme }) => theme.colorPrimary} 0%,
      ${({ theme }) => theme.colorMain} 100%
    );
  }
  &:disabled {
    background-image: none;
    background-color: ${({ theme }) => theme.colorInactive};
  }
`;

export const Button = ({ children, disabled, onClick }) => {
  return (
    <StyleButton onClick={() => (onClick ? onClick() : null)} disabled={disabled}>
      {children}
    </StyleButton>
  );
};
