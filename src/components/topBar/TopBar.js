import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colorPrimary};
  padding: 2rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 3;
`;

const Text = styled.p`
  font-family: 'Karla', sans-serif;
  color: ${({ theme }) => theme.colorMain};
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
`;

const Button = styled.div`
  width: 2rem;
  height: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const Line1 = styled.div`
  width: 1.6rem;
  height: 0.2rem;
  background-color: ${({ theme }) => theme.colorWhite};
  margin-bottom: 0.5rem;
`;

const Line2 = styled.div`
  width: 2rem;
  height: 0.2rem;
  background-color: ${({ theme }) => theme.colorWhite};
`;

export const TopBar = props => {
  const { points } = props;
  return (
    <Wrapper>
      <Text>{points} GRABS</Text>
      <Button>
        <Line1 />
        <Line2 />
      </Button>
    </Wrapper>
  );
};
