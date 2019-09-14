import React from 'react';
import styled from 'styled-components';

const Title = styled.p`
  background-color: ${({ theme }) => theme.colorMain};
  color: '#ffffff';
`;

const Main = () => (
  <div>
    <h1>Main</h1>
    <Title>Text</Title>
  </div>
);

export default Main;
