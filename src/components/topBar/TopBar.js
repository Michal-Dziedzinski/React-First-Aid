import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colorPrimary};
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colorMain};
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
`;

const TopBar = () => {
  return (
    <Wrapper>
      <Text>15 GRABS</Text>
    </Wrapper>
  );
};

export default TopBar;
