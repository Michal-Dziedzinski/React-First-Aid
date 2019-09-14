import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colorPrimary};
  padding: 20px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BottomBtn = () => {
  return <Wrapper />;
};

export default BottomBtn;
