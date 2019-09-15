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
  padding-top: 20px;
`;

const StyledProductImg = styled.img`
  display: block;
  width: 90%;
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

const StyledProgressBar = styled.div`
  width: 100%;
  height: 30px;
  padding: 3px;
  border: 2px solid ${({ theme }) => theme.colorPrimary};
  border-radius: 15px;
  position: relative;
  margin-bottom: 10px;
  transition: transform 1s;
  &:after {
    display: block;
    content: '';
    position: absolute;
    height: 20px;
    left: 4px;
    top: 3px;
    width: 98%;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colorPrimary},
      ${({ theme }) => theme.colorMain}
    );
    border-radius: 15px;
    transform-origin: left;
    transform: scaleX(0.75);
  }
`;

const StyledPoints = styled.p`
  text-align: center;
  font-weight: 700;
  font-family: 'Karla', sans-serif;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colorPrimary};
`;

const Main = props => {
  const { points, price } = props;
  return (
    <StyledContainer>
      <Title>YOUR FAVOURITE REWARD PROGRESS</Title>
      <StyledProduct>
        <StyledProductImg src={product} />
        <StyledDiscount>-50%</StyledDiscount>
      </StyledProduct>
      <StyledProgressBar />
      <StyledPoints>
        {points}/{price}
      </StyledPoints>
    </StyledContainer>
  );
};

export default Main;
