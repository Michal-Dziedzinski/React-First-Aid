import React from 'react';
import styled from 'styled-components';
import logo from 'assets/logo-dark.png';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colorMain};
  padding: 20px 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colorPrimary};
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
`;

const LogoDark = styled.img`
  display: block;
  width: 32px;
`;

const BottomBtn = () => {
  return (
    <Wrapper>
      <Text>Scan!</Text>
      <LogoDark src={logo} />
    </Wrapper>
  );
};

export default BottomBtn;
