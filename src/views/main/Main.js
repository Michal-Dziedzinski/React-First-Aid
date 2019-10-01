import React from 'react';
import styled from 'styled-components';
import { Button } from 'components/button/Button';
import { NavLink } from 'react-router-dom';

const Title = styled.h1`
  font-family: 'Karla', sans-serif;
  color: ${({ theme }) => theme.colorPrimary};
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
  font-size: 24px;
`;
const StyledRewardName = styled.h2`
  font-family: 'Karla', sans-serif;
  color: ${({ theme }) => theme.colorPrimary};
  text-align: center;
  font-size: 22px;
  padding: 10px 0;
`;

const StyledContainer = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const StyledLink = styled(NavLink)`
  width: 100%;
  text-align: center;
`;

const StyledProduct = styled.div`
  position: relative;
  padding-top: 20px;
`;

const StyledProductImg = styled.img`
  display: block;
  width: auto;
  max-height: 260px;
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
    transform: scaleX(${({ points, price }) => points / price});
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
  const { points, reward } = props;
  return (
    <StyledContainer>
      {reward ? (
        <>
          {' '}
          <Title>YOUR MOST WANTED REWARD PROGRESS</Title>
          <StyledProduct>
            <StyledProductImg src={require(`assets/${reward.image}.png`)} />
            <StyledDiscount>{reward.reward}</StyledDiscount>
          </StyledProduct>
          <StyledRewardName>{reward.name}</StyledRewardName>
          {reward.price >= points ? (
            <StyledProgressBar points={points} price={reward.price} />
          ) : (
            <Button>Grab your reward!</Button>
          )}
          <StyledPoints>
            {points}/{reward.price}
          </StyledPoints>{' '}
        </>
      ) : (
        <>
          <Title>Choose the reward you want to get!</Title>
          <StyledLink to="/rewards">
            <Button>Chose Your reward</Button>
          </StyledLink>
        </>
      )}
    </StyledContainer>
  );
};

export default Main;
