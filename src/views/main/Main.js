import React from 'react';
import styled from 'styled-components';
import { Button } from 'components/button/Button';
import { NavLink } from 'react-router-dom';

const StyledTitle = styled.h1`
  font-family: 'Karla', sans-serif;
  color: ${({ theme }) => theme.colorPrimary};
  font-weight: 700;
  text-align: center;
  font-size: 2.4rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
  @media only screen and (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;
const StyledRewardName = styled.h2`
  font-family: 'Karla', sans-serif;
  color: ${({ theme }) => theme.colorPrimary};
  text-align: center;
  font-size: 2.2rem;
  padding: 1rem 0;
`;

const StyledContainer = styled.div`
  padding: 2rem 1.5rem 10rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    padding-top: 4rem;
  }
`;
const StyledLink = styled(NavLink)`
  width: 100%;
  text-align: center;
`;

const StyledProduct = styled.div`
  position: relative;
  padding-top: 2rem;
`;

const StyledProductImg = styled.img`
  display: block;
  width: auto;
  max-height: 26rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4rem;
  @media only screen and (min-width: 768px) {
    max-width: 72rem;
  }
`;

const StyledDiscount = styled.span`
  width: 6.5rem;
  height: 6.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -2.5rem;
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
  height: 3rem;
  padding: 0.3rem;
  border: 0.2rem solid ${({ theme }) => theme.colorPrimary};
  border-radius: 1.5rem;
  position: relative;
  margin-bottom: 1rem;
  transition: transform 1s;
  &:after {
    display: block;
    content: '';
    position: absolute;
    height: 2rem;
    left: 0.4rem;
    top: 0.3rem;
    width: 98%;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colorPrimary},
      ${({ theme }) => theme.colorMain}
    );
    border-radius: 1.5rem;
    transform-origin: left;
    transform: scaleX(${({ points, price }) => points / price});
  }
  @media only screen and (min-width: 768px) {
    width: 72rem;
  }
`;

const StyledPoints = styled.p`
  text-align: center;
  font-weight: 700;
  font-family: 'Karla', sans-serif;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colorPrimary};
`;

export const Main = props => {
  const { points, reward } = props;
  return (
    <StyledContainer>
      {reward ? (
        <>
          {' '}
          <StyledTitle>Your most wanted reward progress</StyledTitle>
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
          <StyledTitle>Choose the reward you want to get!</StyledTitle>
          <StyledLink to="/rewards">
            <Button>Chose Your reward</Button>
          </StyledLink>
        </>
      )}
    </StyledContainer>
  );
};
