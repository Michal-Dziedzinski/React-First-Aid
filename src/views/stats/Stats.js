import React from 'react';
import styled, { css } from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 66;
const percentageSecond = 89;

const StyledWrapper = styled.div`
  text-align: center;
  padding: 15px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colorPrimary};
  font-size: 14px;

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
  /* align-items: center; */

  padding: 10px;
  font-size: 12px;
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
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const StyledPanel = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colorWhite};
  width: 45%;
  padding: 10px;
`;

const StyledPanelText = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  color: ${({ theme }) => theme.colorPrimary};
`;

const StyledCircleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Stats = () => (
  <>
    <StyledWrapper>
      <StyledLink className="active" href="">
        Global
      </StyledLink>
      / <StyledLink href="">Lokal</StyledLink>
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
          <StyledCol color>932 Grabs</StyledCol>
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
                textSize: '30px',
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
                textSize: '30px',
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
  </>
);

export default Stats;
