import React from 'react';
import styled from 'styled-components';

const StyledBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  clip-path: polygon(0 1%, 100% 56%, 100% 100%, 0% 100%);
  background-image: linear-gradient(to bottom, #f3f3f3, #ffffff);
`;

export const Background = () => {
  return <StyledBackground />;
};
