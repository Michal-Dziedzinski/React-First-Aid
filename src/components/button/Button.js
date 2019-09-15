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
  border-radius: 25px;
  padding: 20px 0;
  text-transform: uppercase;
  font-family: inherit;
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(
      to left,
      ${({ theme }) => theme.colorPrimary} 0%,
      ${({ theme }) => theme.colorMain} 100%
    );
  }
`;

export const Button = ({ children }) => {
  return <StyleButton>{children}</StyleButton>;
};
