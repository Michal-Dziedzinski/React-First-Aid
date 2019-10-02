import React from 'react';
import styled, { css } from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 66;
const percentageSecond = 89;

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

const StyledWrapper = styled.div`
  text-align: center;
  padding: 2rem 1.5rem 10rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    padding-top: 4rem;
  }
`;

const StyledLink = styled.span`
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colorPrimary};
  font-size: 1.4rem;

  &.active {
    color: ${({ theme }) => theme.colorMain};
    font-weight: bold;
  }
`;

const StyledRatingWrapper = styled.div`
  background-color: ${({ theme }) => theme.colorWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledRow = styled.div`
  display: flex;
  padding: 1rem;
  font-size: 1.2rem;
  width: 100%;
  color: ${({ theme }) => theme.colorWhite};

  &:first-child {
    font-weight: bold;
  }

  &:last-child {
    background-color: ${({ theme }) => theme.colorMain};
    font-weight: bold;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colorWhite};
  }
`;

const StyledCol = styled.span`
  width: 40%;
  color: ${({ theme }) => theme.colorPrimary};

  &:first-child {
    text-align: left;
  }

  &:nth-of-type(2) {
    width: 20%;
  }

  &:nth-of-type(3) {
    text-transform: uppercase;
  }

  ${({ color }) =>
    color &&
    css`
      color: ${({ theme }) => theme.colorWhite};
      font-weight: bold;
    `}
`;

const StyledPanelWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const StyledPanel = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colorWhite};
  width: 45%;
  padding: 1rem;
`;

const StyledPanelText = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colorPrimary};
`;

const StyledCircleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Stats = () => (
  <StyledWrapper>
    <StyledTitle>Your statistics</StyledTitle>
    <StyledLink className="active">Global</StyledLink>/ <StyledLink>Lokal</StyledLink>
    <StyledRatingWrapper>
      <StyledRow>
        <StyledCol>1. John Smith</StyledCol>
        <StyledCol>-</StyledCol>
        <StyledCol>1234 Grabs</StyledCol>
      </StyledRow>
      <StyledRow>
        <StyledCol>2. Johnny Smith</StyledCol>
        <StyledCol>-</StyledCol>
        <StyledCol>1233 Grabs</StyledCol>
      </StyledRow>
      <StyledRow>
        <StyledCol>3. Jonathan Smith</StyledCol>
        <StyledCol>-</StyledCol>
        <StyledCol>1232 Grabs</StyledCol>
      </StyledRow>
      <StyledRow>
        <StyledCol>110. You</StyledCol>
        <StyledCol>-</StyledCol>
        <StyledCol>932 Grabs</StyledCol>
      </StyledRow>
    </StyledRatingWrapper>
    <StyledPanelWrapper>
      <StyledPanel>
        <StyledPanelText>Your grabbed more than</StyledPanelText>
        <StyledCircleWrapper>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              rotation: 1,
              textSize: '3.0rem',
              pathTransitionDuration: 0.5,
              pathColor: `rgba(30, 215, 96, ${percentage / 100})`,
              textColor: '#37003c',
              trailColor: '#f5f5f5',
              backgroundColor: '#ffffff',
            })}
          />
        </StyledCircleWrapper>
        <StyledPanelText>Users in your country</StyledPanelText>
      </StyledPanel>
      <StyledPanel>
        <StyledPanelText>Your grabbed more than</StyledPanelText>
        <StyledCircleWrapper>
          <CircularProgressbar
            value={percentageSecond}
            text={`${percentageSecond}%`}
            styles={buildStyles({
              rotation: 1,
              textSize: '3.0rem',
              pathTransitionDuration: 0.5,
              pathColor: `rgba(30, 215, 96, ${percentageSecond / 100})`,
              textColor: '#37003c',
              trailColor: '#f5f5f5',
              backgroundColor: '#ffffff',
            })}
          />
        </StyledCircleWrapper>
        <StyledPanelText>Users in your country</StyledPanelText>
      </StyledPanel>
    </StyledPanelWrapper>
  </StyledWrapper>
);

export default Stats;
