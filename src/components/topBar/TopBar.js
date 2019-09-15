import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colorPrimary};
  padding: 20px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.p`
  font-family: 'Karla', sans-serif;
  color: ${({ theme }) => theme.colorMain};
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
`;

const Button = styled.div`
  width: 20px;
  height: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const Line1 = styled.div`
  width: 16px;
  height: 2px;
  background-color: ${({ theme }) => theme.colorWhite};
  margin-bottom: 5px;
`;

const Line2 = styled.div`
  width: 20px;
  height: 2px;
  background-color: ${({ theme }) => theme.colorWhite};
`;

const TopBar = props => {
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

export default TopBar;
