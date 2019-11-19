import React from 'react';
import styled from 'styled-components';
import logo from 'assets/logo-dark.png';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colorMain};
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  z-index: 5;
  @media only screen and (min-width: 768px) {
    width: auto;
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colorPrimary};
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  margin-right: 20px;
`;

const LogoDark = styled.img`
  display: block;
  width: 3.2rem;
`;

export const BottomBtn = () => {
  return (
    <Wrapper>
      <Text>Scan!</Text>
      <LogoDark src={logo} />
    </Wrapper>
  );
};
