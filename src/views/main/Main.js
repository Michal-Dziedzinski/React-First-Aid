import React from 'react';
import styled from 'styled-components';
import product from 'assets/salad.png';

const Title = styled.h4`
  font-family: 'Karla', sans-serif;
  color: ${({ theme }) => theme.colorPrimary};
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
`;

const StyledContainer = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 40px;
`;

const StyledProduct = styled.div`
  position: relative;
`;

const StyledProductImg = styled.img`
  display: block;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
`;

const StyledDiscount = styled.span`
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -25px;
  right: 0;
  color: ${({ theme }) => theme.colorPrimary};
  background-color: ${({ theme }) => theme.colorMain};
  border-radius: 50%;
  font-weight: 700;
  font-family: 'Karla', sans-serif;
  font-size: 1.8rem;
`;

const Main = () => (
  <StyledContainer>
    <Title>YOUR FAVOURITE REWARD PROGRESS</Title>
    <StyledProduct>
      <StyledProductImg src={product} />
      <StyledDiscount>-50%</StyledDiscount>
    </StyledProduct>
  </StyledContainer>
);

export default Main;
